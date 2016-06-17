var React = require('react');
var Select = require('react-select');

var Countries = React.createClass({
    propTypes: {
        // You can declare that a prop is a specific JS primitive. By default, these
        // are all optional.
        getLinkState: React.PropTypes.func.isRequired,
        namePrefix: React.PropTypes.string.isRequired,
        additionalItems: React.PropTypes.array
    },


    render: function () {

        let additionalItems = this.props.additionalItems || [];

        return (

            <div>
                <label>{this.props.label || 'Country'}</label>
                <Select
                    options = {additionalItems.concat([
                     {label:'USA (United States of America)',value:'USA (United States of America)'},
                    {label:'Afghanistan',value:'Afghanistan'},
                    {label:'Albania',value:'Albania'},
                    {label:'Algeria',value:'Algeria'},
                    {label:'Andorra',value:'Andorra'},
                    {label:'Angola',value:'Angola'},
                    {label:'Antigua and Barbuda',value:'Antigua and Barbuda'},
                    {label:'Argentina',value:'Argentina'},
                    {label:'Armenia',value:'Armenia'},
                    {label:'Australia',value:'Australia'},
                    {label:'Austria',value:'Austria'},
                    {label:'Azerbaijan',value:'Azerbaijan'},
                    {label:'Bahamas',value:'Bahamas'},
                    {label:'Bahrain',value:'Bahrain'},
                    {label:'Bangladesh',value:'Bangladesh'},
                    {label:'Barbados',value:'Barbados'},
                    {label:'Belarus',value:'Belarus'},
                    {label:'Belgium',value:'Belgium'},
                    {label:'Belize',value:'Belize'},
                    {label:'Benin',value:'Benin'},
                    {label:'Bhutan',value:'Bhutan'},
                    {label:'Bolivia',value:'Bolivia'},
                    {label:'Bosnia and Herzegovina',value:'Bosnia and Herzegovina'},
                    {label:'Botswana',value:'Botswana'},
                    {label:'Brazil',value:'Brazil'},
                    {label:'Brunei',value:'Brunei'},
                    {label:'Bulgaria',value:'Bulgaria'},
                    {label:'Burkina Faso',value:'Burkina Faso'},
                    {label:'Burundi',value:'Burundi'},
                    {label:'Cabo Verde',value:'Cabo Verde'},
                    {label:'Cambodia',value:'Cambodia'},
                    {label:'Cameroon',value:'Cameroon'},
                    {label:'Canada',value:'Canada'},
                    {label:'Central African Republic',value:'Central African Republic'},
                    {label:'Chad',value:'Chad'},
                    {label:'Chile',value:'Chile'},
                    {label:'China',value:'China'},
                    {label:'Colombia',value:'Colombia'},
                    {label:'Comoros',value:'Comoros'},
                    {label:'Congo, Republic of the',value:'Congo, Republic of the'},
                    {label:'Congo, Democratic Republic of the',value:'Congo, Democratic Republic of the'},
                    {label:'Costa Rica',value:'Costa Rica'},
                    {label:'Cote d\'Ivoire',value:'Cote d\'Ivoire'},
                    {label:'Croatia',value:'Croatia'},
                    {label:'Cuba',value:'Cuba'},
                    {label:'Cyprus',value:'Cyprus'},
                    {label:'Czech Republic',value:'Czech Republic'},
                    {label:'Denmark',value:'Denmark'},
                    {label:'Djibouti',value:'Djibouti'},
                    {label:'Dominica',value:'Dominica'},
                    {label:'Dominican Republic',value:'Dominican Republic'},

                    {label:'Ecuador',value:'Ecuador'},
                    {label:'Egypt',value:'Egypt'},
                    {label:'El Salvador',value:'El Salvador'},
                    {label:'Equatorial Guinea',value:'Equatorial Guinea'},
                    {label:'Eritrea',value:'Eritrea'},
                    {label:'Estonia',value:'Estonia'},
                    {label:'Ethiopia',value:'Ethiopia'},

                    {label:'Fiji',value:'Fiji'},
                    {label:'Finland',value:'Finland'},
                    {label:'France',value:'France'},

                    {label:'Gabon',value:'Gabon'},
                    {label:'Gambia',value:'Gambia'},
                    {label:'Georgia',value:'Georgia'},
                    {label:'Germany',value:'Germany'},
                    {label:'Ghana',value:'Ghana'},
                    {label:'Greece',value:'Greece'},
                    {label:'Grenada',value:'Grenada'},
                    {label:'Guatemala',value:'Guatemala'},
                    {label:'Guinea',value:'Guinea'},
                    {label:'Guinea-Bissau',value:'Guinea-Bissau'},
                    {label:'Guyana',value:'Guyana'},

                    {label:'Haiti',value:'Haiti'},
                    {label:'Honduras',value:'Honduras'},
                    {label:'Hungary',value:'Hungary'},

                    {label:'Iceland',value:'Iceland'},
                    {label:'India',value:'India'},
                    {label:'Indonesia',value:'Indonesia'},
                    {label:'Iran',value:'Iran'},
                    {label:'Iraq',value:'Iraq'},
                    {label:'Ireland',value:'Ireland'},
                    {label:'Israel',value:'Israel'},
                    {label:'Italy',value:'Italy'},

                    {label:'Jamaica',value:'Jamaica'},
                    {label:'Japan',value:'Japan'},
                    {label:'Jordan',value:'Jordan'},

                    {label:'Kazakhstan',value:'Kazakhstan'},
                    {label:'Kenya',value:'Kenya'},
                    {label:'Kiribati',value:'Kiribati'},
                    {label:'Kosovo',value:'Kosovo'},
                    {label:'Kuwait',value:'Kuwait'},
                    {label:'Kyrgyzstan',value:'Kyrgyzstan'},

                    {label:'Laos',value:'Laos'},
                    {label:'Latvia',value:'Latvia'},
                    {label:'Lebanon',value:'Lebanon'},
                    {label:'Lesotho',value:'Lesotho'},
                    {label:'Liberia',value:'Liberia'},
                    {label:'Libya',value:'Libya'},
                    {label:'Liechtenstein',value:'Liechtenstein'},
                    {label:'Lithuania',value:'Lithuania'},
                    {label:'Luxembourg',value:'Luxembourg'},

                    {label:'Macedonia',value:'Macedonia'},
                    {label:'Madagascar',value:'Madagascar'},
                    {label:'Malawi',value:'Malawi'},
                    {label:'Malaysia',value:'Malaysia'},
                    {label:'Maldives',value:'Maldives'},
                    {label:'Mali',value:'Mali'},
                    {label:'Malta',value:'Malta'},
                    {label:'Marshall Islands',value:'Marshall Islands'},
                    {label:'Mauritania',value:'Mauritania'},
                    {label:'Mauritius',value:'Mauritius'},
                    {label:'Mexico',value:'Mexico'},
                    {label:'Micronesia',value:'Micronesia'},
                    {label:'Moldova',value:'Moldova'},
                    {label:'Monaco',value:'Monaco'},
                    {label:'Mongolia',value:'Mongolia'},
                    {label:'Montenegro',value:'Montenegro'},
                    {label:'Morocco',value:'Morocco'},
                    {label:'Mozambique',value:'Mozambique'},
                    {label:'Myanmar (Burma)',value:'Myanmar (Burma)'},

                    {label:'Namibia',value:'Namibia'},
                    {label:'Nauru',value:'Nauru'},
                    {label:'Nepal',value:'Nepal'},
                    {label:'Netherlands',value:'Netherlands'},
                    {label:'New Zealand',value:'New Zealand'},
                    {label:'Nicaragua',value:'Nicaragua'},
                    {label:'Niger',value:'Niger'},
                    {label:'Nigeria',value:'Nigeria'},
                    {label:'North Korea',value:'North Korea'},
                    {label:'Norway',value:'Norway'},

                    {label:'Oman',value:'Oman'},

                    {label:'Pakistan',value:'Pakistan'},
                    {label:'Palau',value:'Palau'},
                    {label:'Palestine',value:'Palestine'},
                    {label:'Panama',value:'Panama'},
                    {label:'Papua New Guinea',value:'Papua New Guinea'},
                    {label:'Paraguay',value:'Paraguay'},
                    {label:'Peru',value:'Peru'},
                    {label:'Philippines',value:'Philippines'},
                    {label:'Poland',value:'Poland'},
                    {label:'Portugal',value:'Portugal'},

                    {label:'Qatar',value:'Qatar'},

                    {label:'Romania',value:'Romania'},
                    {label:'Russia',value:'Russia'},
                    {label:'Rwanda',value:'Rwanda'},

                    {label:'St. Kitts and Nevis',value:'St. Kitts and Nevis'},
                    {label:'St. Lucia',value:'St. Lucia'},
                    {label:'St. Vincent and The Grenadines',value:'St. Vincent and The Grenadines'},
                    {label:'Samoa',value:'Samoa'},
                    {label:'San Marino',value:'San Marino'},
                    {label:'Sao Tome and Principe',value:'Sao Tome and Principe'},
                    {label:'Saudi Arabia',value:'Saudi Arabia'},
                    {label:'Senegal',value:'Senegal'},
                    {label:'Serbia',value:'Serbia'},
                    {label:'Seychelles',value:'Seychelles'},
                    {label:'Sierra Leone',value:'Sierra Leone'},
                    {label:'Singapore',value:'Singapore'},
                    {label:'Slovakia',value:'Slovakia'},
                    {label:'Slovenia',value:'Slovenia'},
                    {label:'Solomon Islands',value:'Solomon Islands'},
                    {label:'Somalia',value:'Somalia'},
                    {label:'South Africa',value:'South Africa'},
                    {label:'South Korea',value:'South Korea'},
                    {label:'South Sudan',value:'South Sudan'},
                    {label:'Spain',value:'Spain'},
                    {label:'Sri Lanka',value:'Sri Lanka'},
                    {label:'Sudan',value:'Sudan'},
                    {label:'Suriname',value:'Suriname'},
                    {label:'Swaziland',value:'Swaziland'},
                    {label:'Sweden',value:'Sweden'},
                    {label:'Switzerland',value:'Switzerland'},
                    {label:'Syria',value:'Syria'},

                    {label:'Taiwan',value:'Taiwan'},
                    {label:'Tajikistan',value:'Tajikistan'},
                    {label:'Tanzania',value:'Tanzania'},
                    {label:'Thailand',value:'Thailand'},
                    {label:'Timor-Leste',value:'Timor-Leste'},
                    {label:'Togo',value:'Togo'},
                    {label:'Tonga',value:'Tonga'},
                    {label:'Trinidad and Tobago',value:'Trinidad and Tobago'},
                    {label:'Tunisia',value:'Tunisia'},
                    {label:'Turkey',value:'Turkey'},
                    {label:'Turkmenistan',value:'Turkmenistan'},
                    {label:'Tuvalu',value:'Tuvalu'},

                    {label:'Uganda',value:'Uganda'},
                    {label:'Ukraine',value:'Ukraine'},
                    {label:'United Arab Emirates',value:'United Arab Emirates'},
                    {label:'UK (United Kingdom)',value:'UK (United Kingdom)'},
                    {label:'Uruguay',value:'Uruguay'},
                    {label:'Uzbekistan',value:'Uzbekistan'},

                    {label:'Vanuatu',value:'Vanuatu'},
                    {label:'Vatican City (Holy See)',value:'Vatican City (Holy See)'},
                    {label:'Venezuela',value:'Venezuela'},
                    {label:'Vietnam',value:'Vietnam'},

                    {label:'Yemen',value:'Yemen'},

                    {label:'Zambia',value:'Zambia'},
                    {label:'Zimbabwe',value:'Zimbabwe'}
                    ])}
                    value={this.props.getLinkState(this.props.namePrefix + "Country").value}
                    onChange={this.props.getLinkState(this.props.namePrefix + "Country", true).requestChange}
                    multi={this.props.multi}
                    />
            </div>
        );
    }
});

module.exports = Countries;