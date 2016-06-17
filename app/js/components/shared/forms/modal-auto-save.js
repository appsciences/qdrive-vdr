const request = require("superagent");

let ModalAutoSave = function() {
    let instance = {};
    let config = {};

    let hasUnsavedChanges = false;

    let inputs = [];
    let hiddenInputs = [];
    let textAreas = [];
    let buttons = [];

    const selectModalElements = () => {
        let inputs = Array.from(document.querySelectorAll('.modal-body input'));
        let hiddenInputs = Array.from(
            document.querySelectorAll('.modal-body input[type=hidden], .modal-body .bootstrap-search-input')
        );
        let textAreas = Array.from(document.querySelectorAll('.modal-body textarea'));
        let buttons = Array.from(document.querySelectorAll('.modal-body button:not([type="submit"])'));

        return {inputs, hiddenInputs, textAreas, buttons};
    };

    const attachEventListeners = (inputs, hiddenInputs, textAreas, buttons) => {
        const onChangeEventHandler = () => {
            instance.performSave();
        };

        inputs.forEach((input) => {
            input.addEventListener("input", onChangeEventHandler);
        });

        textAreas.forEach((textarea) => {
            textarea.addEventListener("input", onChangeEventHandler);
        });

        buttons.forEach((button) => {
            button.addEventListener("click", onChangeEventHandler);
        });

        // handling changes in hidden inputs. Check changes for every 100ms
        hiddenInputs.forEach((input) => {
            let oldValue = input.value;

            setInterval(() => {
                if (input.value != oldValue) {
                    oldValue = input.value;
                    onChangeEventHandler();
                }
            }, 100);
        });
    };

    instance.init = (url, getDataFunc, onSave, httpMethod = "post") => {
        config = {url, getDataFunc, onSave, httpMethod};

        // 'Save...' indicator at the bottom of the page
        instance.saveStatusElement = document.querySelector(".save-status");

        ({inputs, hiddenInputs, textAreas, buttons} = selectModalElements());
        attachEventListeners(inputs, hiddenInputs, textAreas, buttons);
        console.info(`Found inputs: ${inputs.length}, hidden: ${hiddenInputs.length}, buttons: ${buttons.length}`);
    };

    instance.update = () => {
        let {inputs : newInputs,
            hiddenInputs: newHiddenInputs,
            textAreas: newTextAreas,
            buttons: newButtons} = selectModalElements();

        const getDiff = (oldElementsArray, newElementsArray ) => {
            const getMap = (elementsArray) => new Map(
                elementsArray.map((element) => [element.getAttribute('data-reactid'), element])
            );

            let diff = [];
            let newElementsMap = getMap(newElementsArray);
            let oldElementsMap = getMap(oldElementsArray);

            newElementsMap.forEach((value, key) => {
                if (!oldElementsMap.has(key)) {
                    diff.push(value);
                }
            });

            return diff;
        };

        let inputsDiff = getDiff(inputs, newInputs);
        let hiddenInputsDiff = getDiff(hiddenInputs, newHiddenInputs);
        let textAreasDiff = getDiff(textAreas, newTextAreas);
        let buttonsDiff = getDiff(buttons, newButtons);

        attachEventListeners(inputsDiff, hiddenInputsDiff, textAreasDiff, buttonsDiff);
        console.info(`Found new elements: inputs: ${inputsDiff.length}, hidden: ${hiddenInputsDiff.length}, buttons: ${buttonsDiff.length}`);

        inputs = newInputs;
        hiddenInputs = newHiddenInputs;
        textAreas = newTextAreas;
        buttons = newButtons;
    };

    let requestsInProgress = 0;

    instance.saveHandler = (callback) => {
        hasUnsavedChanges = false;

        requestsInProgress++;
        console.info("Saving... Save queue:", requestsInProgress);

        instance.saveStatusElement.style.display = "block";

        request
            [config.httpMethod](config.url)
            .send(config.getDataFunc())
            .end(() => {
                config.onSave && config.onSave();

                requestsInProgress--;
                console.log("Save queue:", requestsInProgress);

                if (requestsInProgress === 0) {
                    // sometimes saving is too fast
                    setTimeout(() => instance.saveStatusElement.style.display = "none", 500);

                    callback && callback();
                }
            });
    };



    instance.performSave = () => {
        console.debug("performing save");

        hasUnsavedChanges = true;
        clearInterval(instance.autoSaveTimeoutId);
        instance.autoSaveTimeoutId = setTimeout(instance.saveHandler, 3000);
    };

    instance.forceSave = (callback) => {
        if (hasUnsavedChanges) {
            clearInterval(instance.autoSaveTimeoutId);
            instance.saveHandler(callback);
        } else {
            callback && callback();
        }
    };

    return instance;
};

module.exports = ModalAutoSave;
