// LICENSE_CODE ZON ISC
'use strict'; /*jslint node:true, browser:true*/
(function(){
var define;
var is_node_ff = typeof module=='object' && module.exports;
if (!is_node_ff)
    define = self.define;
else
    define = require('./require_node.js').define(module, '../');
define([], function(){
var E = {};

E.list = {
    AF: 'Afghanistan',
    AL: 'Albania',
    DZ: 'Algeria',
    AX: 'Aland Islands',
    AS: 'American Samoa',
    AD: 'Andorra',
    AO: 'Angola',
    AP: 'Asia/Pacific',
    AI: 'Anguilla',
    AQ: 'Antarctica',
    AG: 'Antigua And Barbuda',
    AR: 'Argentina',
    AM: 'Armenia',
    AW: 'Aruba',
    AU: 'Australia',
    AT: 'Austria',
    AZ: 'Azerbaijan',
    BS: 'Bahamas',
    BH: 'Bahrain',
    JE: 'Bailiwick of Jersey',
    BD: 'Bangladesh',
    BB: 'Barbados',
    BY: 'Belarus',
    BE: 'Belgium',
    BZ: 'Belize',
    BJ: 'Benin',
    BM: 'Bermuda',
    BT: 'Bhutan',
    BO: 'Bolivia',
    BQ: 'Bonaire, Sint Eustatius and Saba',
    BA: 'Bosnia And Herzegovina',
    BW: 'Botswana',
    BV: 'Bouvet Island',
    BR: 'Brazil',
    IO: 'British Indian Ocean Territory',
    BN: 'Brunei',
    BG: 'Bulgaria',
    BF: 'Burkina Faso',
    BI: 'Burundi',
    KH: 'Cambodia',
    CM: 'Cameroon',
    CA: 'Canada',
    CV: 'Cape Verde',
    KY: 'Cayman Islands',
    CF: 'Central African Republic',
    TD: 'Chad',
    CL: 'Chile',
    CN: 'China',
    CX: 'Christmas Island',
    CC: 'Cocos (Keeling) Islands',
    CO: 'Colombia',
    KM: 'Comoros',
    CG: 'Congo',
    CK: 'Cook Islands',
    CR: 'Costa Rica',
    CI: "Cote D'Ivorie (Ivory Coast)",
    HR: 'Croatia (Hrvatska)',
    CU: 'Cuba',
    CW: 'Curacao',
    CY: 'Cyprus',
    CZ: 'Czech Republic',
    CD: 'Democratic Republic Of Congo (Zaire)',
    DK: 'Denmark',
    DJ: 'Djibouti',
    DM: 'Dominica',
    DO: 'Dominican Republic',
    TP: 'East Timor',
    EC: 'Ecuador',
    EG: 'Egypt',
    SV: 'El Salvador',
    GQ: 'Equatorial Guinea',
    ER: 'Eritrea',
    EU: 'European Union',
    EE: 'Estonia',
    ET: 'Ethiopia',
    FK: 'Falkland Islands (Malvinas)',
    FO: 'Faroe Islands',
    FJ: 'Fiji',
    FI: 'Finland',
    FR: 'France',
    FX: 'France, Metropolitan',
    GF: 'French Guinea',
    PF: 'French Polynesia',
    TF: 'French Southern Territories',
    GA: 'Gabon',
    GM: 'Gambia',
    GE: 'Georgia',
    DE: 'Germany',
    GH: 'Ghana',
    GI: 'Gibraltar',
    GB: 'Great Britain',
    GR: 'Greece',
    GL: 'Greenland',
    GD: 'Grenada',
    GP: 'Guadeloupe',
    GU: 'Guam',
    GT: 'Guatemala',
    GG: 'Guernsey',
    GN: 'Guinea',
    GW: 'Guinea-Bissau',
    GY: 'Guyana',
    HT: 'Haiti',
    HM: 'Heard And McDonald Islands',
    HN: 'Honduras',
    HK: 'Hong Kong',
    HU: 'Hungary',
    IS: 'Iceland',
    IN: 'India',
    ID: 'Indonesia',
    IR: 'Iran',
    IQ: 'Iraq',
    IE: 'Ireland',
    IM: 'Isle of Man',
    IL: 'Israel',
    IT: 'Italy',
    JM: 'Jamaica',
    JP: 'Japan',
    JO: 'Jordan',
    KZ: 'Kazakhstan',
    KE: 'Kenya',
    KI: 'Kiribati',
    XK: 'Kosovo',
    KW: 'Kuwait',
    KG: 'Kyrgyzstan',
    LA: 'Laos',
    LV: 'Latvia',
    LB: 'Lebanon',
    LS: 'Lesotho',
    LR: 'Liberia',
    LY: 'Libya',
    LI: 'Liechtenstein',
    LT: 'Lithuania',
    LU: 'Luxembourg',
    MO: 'Macau',
    MK: 'Macedonia',
    MG: 'Madagascar',
    MW: 'Malawi',
    MY: 'Malaysia',
    MV: 'Maldives',
    ML: 'Mali',
    MT: 'Malta',
    MH: 'Marshall Islands',
    MQ: 'Martinique',
    MR: 'Mauritania',
    MU: 'Mauritius',
    YT: 'Mayotte',
    MX: 'Mexico',
    FM: 'Micronesia',
    MD: 'Moldova',
    MC: 'Monaco',
    MN: 'Mongolia',
    ME: 'Montenegro',
    MS: 'Montserrat',
    MA: 'Morocco',
    MZ: 'Mozambique',
    MM: 'Myanmar (Burma)',
    NA: 'Namibia',
    NR: 'Nauru',
    NP: 'Nepal',
    NL: 'Netherlands',
    AN: 'Netherlands Antilles',
    NC: 'New Caledonia',
    NZ: 'New Zealand',
    NI: 'Nicaragua',
    NE: 'Niger',
    NG: 'Nigeria',
    NU: 'Niue',
    NF: 'Norfolk Island',
    KP: 'North Korea',
    MP: 'Northern Mariana Islands',
    NO: 'Norway',
    OM: 'Oman',
    PK: 'Pakistan',
    PW: 'Palau',
    PS: 'Palestine',
    PA: 'Panama',
    PG: 'Papua New Guinea',
    PY: 'Paraguay',
    PE: 'Peru',
    PH: 'Philippines',
    PN: 'Pitcairn',
    PL: 'Poland',
    PT: 'Portugal',
    PR: 'Puerto Rico',
    QA: 'Qatar',
    RE: 'Reunion',
    RO: 'Romania',
    RU: 'Russia',
    RW: 'Rwanda',
    BL: 'Saint Barthelemy',
    SH: 'Saint Helena',
    KN: 'Saint Kitts And Nevis',
    LC: 'Saint Lucia',
    MF: 'Saint Martin',
    PM: 'Saint Pierre And Miquelon',
    VC: 'Saint Vincent And The Grenadines',
    SM: 'San Marino',
    SX: 'Sint Maarten',
    ST: 'Sao Tome And Principe',
    SA: 'Saudi Arabia',
    SN: 'Senegal',
    RS: 'Serbia',
    SC: 'Seychelles',
    SL: 'Sierra Leone',
    SG: 'Singapore',
    SK: 'Slovak Republic',
    SI: 'Slovenia',
    SB: 'Solomon Islands',
    SO: 'Somalia',
    ZA: 'South Africa',
    GS: 'South Georgia And South Sandwich Islands',
    KR: 'South Korea',
    SS: 'South Sudan',
    ES: 'Spain',
    LK: 'Sri Lanka',
    SD: 'Sudan',
    SR: 'Suriname',
    SJ: 'Svalbard And Jan Mayen',
    SZ: 'Swaziland',
    SE: 'Sweden',
    CH: 'Switzerland',
    SY: 'Syria',
    TW: 'Taiwan',
    TJ: 'Tajikistan',
    TZ: 'Tanzania',
    TH: 'Thailand',
    TL: 'Timor-Leste',
    TG: 'Togo',
    TK: 'Tokelau',
    TO: 'Tonga',
    TT: 'Trinidad And Tobago',
    TN: 'Tunisia',
    TR: 'Turkey',
    TM: 'Turkmenistan',
    TC: 'Turks And Caicos Islands',
    TV: 'Tuvalu',
    UG: 'Uganda',
    UA: 'Ukraine',
    AE: 'United Arab Emirates',
    UK: 'United Kingdom',
    US: 'United States',
    UM: 'United States Minor Outlying Islands',
    UY: 'Uruguay',
    UZ: 'Uzbekistan',
    VU: 'Vanuatu',
    VA: 'Vatican City (Holy See)',
    VE: 'Venezuela',
    VN: 'Vietnam',
    VG: 'Virgin Islands (British)',
    VI: 'Virgin Islands (US)',
    WF: 'Wallis And Futuna Islands',
    EH: 'Western Sahara',
    WS: 'Western Samoa',
    YE: 'Yemen',
    YU: 'Yugoslavia',
    ZM: 'Zambia',
    ZW: 'Zimbabwe',
};

// XXX saarya: merge with list
E.adj_list = {
    AF: {name: 'Afghanistan', adj: 'Afghan'},
    AX: {name: 'Åland Islands', adj: 'Åland Island'},
    AL: {name: 'Albania', adj: 'Albanian'},
    DZ: {name: 'Algeria', adj: 'Algerian'},
    AS: {name: 'American Samoa', adj: 'American Samoan'},
    AD: {name: 'Andorra', adj: 'Andorran'},
    AO: {name: 'Angola', adj: 'Angolan'},
    AI: {name: 'Anguilla', adj: 'Anguillan'},
    AG: {name: 'Antigua and Barbuda', adj: 'Antiguan'},
    AR: {name: 'Argentina', adj: 'Argentinian'},
    AM: {name: 'Armenia', adj: 'Armenian'},
    AW: {name: 'Aruba', adj: 'Aruban'},
    AU: {name: 'Australia', adj: 'Australian'},
    AT: {name: 'Austria', adj: 'Austrian'},
    AZ: {name: 'Azerbaijan', adj: 'Azerbaijani'},
    BS: {name: 'Bahamas', adj: 'Bahamian'},
    BH: {name: 'Bahrain', adj: 'Bahraini'},
    BD: {name: 'Bangladesh', adj: 'Bengali'},
    BB: {name: 'Barbados', adj: 'Barbadian'},
    BY: {name: 'Belarus', adj: 'Belarusian'},
    BE: {name: 'Belgium', adj: 'Belgian'},
    BZ: {name: 'Belize', adj: 'Belizean'},
    BJ: {name: 'Benin', adj: 'Beninese'},
    BM: {name: 'Bermuda', adj: 'Bermudan'},
    BT: {name: 'Bhutan', adj: 'Bhutanese'},
    BO: {name: 'Bolivia', adj: 'Bolivian'},
    BQ: {name: 'Bonaire', adj: 'Bonaire'},
    BA: {name: 'Bosnia and Herzegovina', adj: 'Bosnian'},
    BW: {name: 'Botswana', adj: 'Botswanan'},
    BV: {name: 'Bouvet Island', adj: 'Bouvet Island'},
    BR: {name: 'Brazil', adj: 'Brazilian'},
    IO: {name: 'British Indian Ocean Territory', adj: 'BIOT'},
    BN: {name: 'Brunei', adj: 'Bruneian'},
    BG: {name: 'Bulgaria', adj: 'Bulgarian'},
    BF: {name: 'Burkina Faso', adj: 'Burkinabé'},
    BI: {name: 'Burundi', adj: 'Burundian'},
    CV: {name: 'Cabo Verde', adj: 'Cabo Verdean'},
    KH: {name: 'Cambodia', adj: 'Cambodian'},
    CM: {name: 'Cameroon', adj: 'Cameroonian'},
    CA: {name: 'Canada', adj: 'Canadian'},
    KY: {name: 'Cayman Islands', adj: 'Caymanian'},
    TD: {name: 'Chad', adj: 'Chadian'},
    CL: {name: 'Chile', adj: 'Chilean'},
    CN: {name: 'China', adj: 'Chinese'},
    CX: {name: 'Christmas Island', adj: 'Christmas Island'},
    CO: {name: 'Colombia', adj: 'Colombian'},
    KM: {name: 'Comoros', adj: 'Comoran'},
    CG: {name: 'Congo', adj: 'Congolese'},
    CK: {name: 'Cook Islands', adj: 'Cook Island'},
    CR: {name: 'Costa Rica', adj: 'Costa Rican'},
    CI: {name: 'Côte d\'Ivoire', adj: 'Ivorian'},
    HR: {name: 'Croatia', adj: 'Croatian'},
    CU: {name: 'Cuba', adj: 'Cuban'},
    CW: {name: 'Curaçao', adj: 'Curaçaoan'},
    CY: {name: 'Cyprus', adj: 'Cypriot'},
    CZ: {name: 'Czech Republic', adj: 'Czech'},
    DK: {name: 'Denmark', adj: 'Danish'},
    DJ: {name: 'Djibouti', adj: 'Djiboutian'},
    DM: {name: 'Dominica', adj: 'Dominican'},
    DO: {name: 'Dominican Republic', adj: 'Dominican'},
    EC: {name: 'Ecuador', adj: 'Ecuadorian'},
    EG: {name: 'Egypt', adj: 'Egyptian'},
    SV: {name: 'El Salvador', adj: 'Salvadoran'},
    GQ: {name: 'Equatorial Guinea', adj: 'Equatorial Guinean'},
    EE: {name: 'Estonia', adj: 'Estonian'},
    ET: {name: 'Ethiopia', adj: 'Ethiopian'},
    FO: {name: 'Faroe Islands', adj: 'Faroese'},
    FJ: {name: 'Fiji', adj: 'Fijian'},
    FI: {name: 'Finland', adj: 'Finnish'},
    FR: {name: 'France', adj: 'French'},
    PF: {name: 'French Polynesia', adj: 'French Polynesian'},
    GA: {name: 'Gabon', adj: 'Gabonese'},
    GM: {name: 'Gambia', adj: 'Gambian'},
    GE: {name: 'Georgia', adj: 'Georgian'},
    DE: {name: 'Germany', adj: 'German'},
    GH: {name: 'Ghana', adj: 'Ghanaian'},
    GI: {name: 'Gibraltar', adj: 'Gibraltar'},
    GR: {name: 'Greece', adj: 'Greek'},
    GL: {name: 'Greenland', adj: 'Greenlandic'},
    GD: {name: 'Grenada', adj: 'Grenadian'},
    GP: {name: 'Guadeloupe', adj: 'Guadeloupe'},
    GU: {name: 'Guam', adj: 'Guamanian'},
    GT: {name: 'Guatemala', adj: 'Guatemalan'},
    GG: {name: 'Guernsey', adj: 'Channel Island'},
    GN: {name: 'Guinea', adj: 'Guinean'},
    GW: {name: 'Guinea-Bissau', adj: 'Bissau-Guinean'},
    GY: {name: 'Guyana', adj: 'Guyanese'},
    HT: {name: 'Haiti', adj: 'Haitian'},
    HN: {name: 'Honduras', adj: 'Honduran'},
    HK: {name: 'Hong Kong', adj: 'Hong Kong'},
    HU: {name: 'Hungary', adj: 'Hungarian'},
    IS: {name: 'Iceland', adj: 'Icelandic'},
    IN: {name: 'India', adj: 'Indian'},
    ID: {name: 'Indonesia', adj: 'Indonesian'},
    IR: {name: 'Iran', adj: 'Iranian'},
    IQ: {name: 'Iraq', adj: 'Iraqi'},
    IE: {name: 'Ireland', adj: 'Irish'},
    IM: {name: 'Isle of Man', adj: 'Manx'},
    IL: {name: 'Israel', adj: 'Israeli'},
    IT: {name: 'Italy', adj: 'Italian'},
    JM: {name: 'Jamaica', adj: 'Jamaican'},
    JP: {name: 'Japan', adj: 'Japanese'},
    JE: {name: 'Jersey', adj: 'Channel Island'},
    JO: {name: 'Jordan', adj: 'Jordanian'},
    KZ: {name: 'Kazakhstan', adj: 'Kazakhstani'},
    KE: {name: 'Kenya', adj: 'Kenyan'},
    KI: {name: 'Kiribati', adj: 'I-Kiribati'},
    XK: {name: 'Kosovo', adj: 'Kosovan'},
    KW: {name: 'Kuwait', adj: 'Kuwaiti'},
    KG: {name: 'Kyrgyzstan', adj: 'Kyrgyzstani'},
    LA: {name: 'Laos', adj: 'Lao, Laotian'},
    LV: {name: 'Latvia', adj: 'Latvian'},
    LB: {name: 'Lebanon', adj: 'Lebanese'},
    LS: {name: 'Lesotho', adj: 'Basotho'},
    LR: {name: 'Liberia', adj: 'Liberian'},
    LY: {name: 'Libya', adj: 'Libyan'},
    LI: {name: 'Liechtenstein', adj: 'Liechtensteiner'},
    LT: {name: 'Lithuania', adj: 'Lithuanian'},
    LU: {name: 'Luxembourg', adj: 'Luxembourgish'},
    MO: {name: 'Macau', adj: 'Macanese'},
    MK: {name: 'Macedonia', adj: 'Macedonian'},
    MG: {name: 'Madagascar', adj: 'Malagasy'},
    MW: {name: 'Malawi', adj: 'Malawian'},
    MY: {name: 'Malaysia', adj: 'Malaysian'},
    MV: {name: 'Maldives', adj: 'Maldivian'},
    ML: {name: 'Mali', adj: 'Malian'},
    MT: {name: 'Malta', adj: 'Maltese'},
    MH: {name: 'Marshall Islands', adj: 'Marshallese'},
    MQ: {name: 'Martinique', adj: 'Martinican'},
    MR: {name: 'Mauritania', adj: 'Mauritanian'},
    MU: {name: 'Mauritius', adj: 'Mauritian'},
    YT: {name: 'Mayotte', adj: 'Mahoran'},
    MX: {name: 'Mexico', adj: 'Mexican'},
    FM: {name: 'Micronesia', adj: 'Micronesian'},
    MD: {name: 'Moldova', adj: 'Moldovan'},
    MC: {name: 'Monaco', adj: 'Monacan'},
    MN: {name: 'Mongolia', adj: 'Mongolian'},
    ME: {name: 'Montenegro', adj: 'Montenegrin'},
    MA: {name: 'Morocco', adj: 'Moroccan'},
    MZ: {name: 'Mozambique', adj: 'Mozambican'},
    MM: {name: 'Myanmar', adj: 'Burmese'},
    NA: {name: 'Namibia', adj: 'Namibian'},
    NR: {name: 'Nauru', adj: 'Nauruan'},
    NP: {name: 'Nepal', adj: 'Nepali'},
    NL: {name: 'Netherlands', adj: 'Dutch'},
    NC: {name: 'New Caledonia', adj: 'New Caledonian'},
    NZ: {name: 'New Zealand', adj: 'Zelanian'},
    NI: {name: 'Nicaragua', adj: 'Nicaraguan'},
    NE: {name: 'Niger', adj: 'Nigerien'},
    NG: {name: 'Nigeria', adj: 'Nigerian'},
    MP: {name: 'Northern Mariana Islands', adj: 'Niuean'},
    NO: {name: 'Norway', adj: 'Norwegian'},
    OM: {name: 'Oman', adj: 'Omani'},
    PK: {name: 'Pakistan', adj: 'Pakistani'},
    PW: {name: 'Palau', adj: 'Palauan'},
    PS: {name: 'Palestine', adj: 'Palestinian'},
    PA: {name: 'Panama', adj: 'Panamanian'},
    PG: {name: 'Papua New Guinea', adj: 'Papuan'},
    PY: {name: 'Paraguay', adj: 'Paraguayan'},
    PE: {name: 'Peru', adj: 'Peruvian'},
    PH: {name: 'Philippines', adj: 'Filipino'},
    PL: {name: 'Poland', adj: 'Polish'},
    PT: {name: 'Portugal', adj: 'Portuguese'},
    PR: {name: 'Puerto Rico', adj: 'Puerto Rican'},
    QA: {name: 'Qatar', adj: 'Qatari'},
    RE: {name: 'Réunion', adj: 'Réunionese'},
    RO: {name: 'Romania', adj: 'Romanian'},
    RU: {name: 'Russia', adj: 'Russian'},
    RW: {name: 'Rwanda', adj: 'Rwandan'},
    BL: {name: 'Saint Barthélemy', adj: 'Barthélemois'},
    KN: {name: 'Saint Kitts and Nevis', adj: 'Kittitian'},
    LC: {name: 'Saint Lucia', adj: 'Saint Lucian'},
    MF: {name: 'Saint Martin', adj: 'Saint-Martinoise'},
    PM: {name: 'Saint Pierre and Miquelon', adj: 'Saint-Pierrais'},
    VC: {name: 'Saint Vincent and the Grenadines', adj: 'Saint Vincentian'},
    SM: {name: 'San Marino', adj: 'Sammarinese'},
    SA: {name: 'Saudi Arabia', adj: 'Saudi'},
    SN: {name: 'Senegal', adj: 'Senegalese'},
    RS: {name: 'Serbia', adj: 'Serbian'},
    SC: {name: 'Seychelles', adj: 'Seychellois'},
    SL: {name: 'Sierra Leone', adj: 'Sierra Leonean'},
    SG: {name: 'Singapore', adj: 'Singaporean'},
    SX: {name: 'Sint Maarten', adj: 'Sint Eustatius'},
    SK: {name: 'Slovakia', adj: 'Slovak'},
    SI: {name: 'Slovenia', adj: 'Slovenian'},
    SB: {name: 'Solomon Islands', adj: 'Solomon Island'},
    SO: {name: 'Somalia', adj: 'Somali'},
    ZA: {name: 'South Africa', adj: 'South African'},
    KR: {name: 'South Korea', adj: 'South Korean'},
    SS: {name: 'South Sudan', adj: 'South Sudanese'},
    ES: {name: 'Spain', adj: 'Spanish'},
    LK: {name: 'Sri Lanka', adj: 'Sri Lankan'},
    SD: {name: 'Sudan', adj: 'Sudanese'},
    SR: {name: 'Surinam', adj: 'Surinamese'},
    SZ: {name: 'Swaziland', adj: 'Swazi'},
    SE: {name: 'Sweden', adj: 'Swedish'},
    CH: {name: 'Switzerland', adj: 'Swiss'},
    SY: {name: 'Syria', adj: 'Syrian'},
    TW: {name: 'Taiwan', adj: 'Taiwanese'},
    TJ: {name: 'Tajikistan', adj: 'Tajikistani'},
    TZ: {name: 'Tanzania', adj: 'Tanzanian'},
    TH: {name: 'Thailand', adj: 'Thai'},
    TL: {name: 'Timor-Leste', adj: 'Timorese'},
    TG: {name: 'Togo', adj: 'Togolese'},
    TT: {name: 'Trinidad and Tobago', adj: 'Trinidadian'},
    TN: {name: 'Tunisia', adj: 'Tunisian'},
    TR: {name: 'Turkey', adj: 'Turkish'},
    TC: {name: 'Turks and Caicos Islands', adj: 'Turks and Caicos Island'},
    UG: {name: 'Uganda', adj: 'Ugandan'},
    UA: {name: 'Ukraine', adj: 'Ukrainian'},
    AE: {name: 'United Arab Emirates', adj: 'Emirati'},
    GB: {name: 'United Kingdom', adj: 'British'},
    US: {name: 'United States', adj: 'American'},
    UY: {name: 'Uruguay', adj: 'Uruguayan'},
    UZ: {name: 'Uzbekistan', adj: 'Uzbekistani'},
    VU: {name: 'Vanuatu', adj: 'Vanuatuan'},
    VE: {name: 'Venezuela', adj: 'Venezuelan'},
    VN: {name: 'Vietnam', adj: 'Vietnamese'},
    VG: {name: 'Virgin Islands, British', adj: 'British Virgin Island'},
    VI: {name: 'Virgin Islands, United States', adj: 'U.S. Virgin Island'},
    YE: {name: 'Yemen', adj: 'Yemeni'},
    ZM: {name: 'Zambia', adj: 'Zambian'},
    ZW: {name: 'Zimbabwe', adj: 'Zimbabwean'},
};

// XXX vladislavl: merge with country list and fill zones for other countries
E.timezone = {
    AU: 'Australia/Sydney',
    BA: 'Europe/Sarajevo',
    BE: 'Europe/Brussels',
    BY: 'Europe/Minsk',
    CA: 'Canada/Eastern',
    CN: 'Asia/Shanghai',
    CR: 'America/Costa_Rica',
    DE: 'Europe/Berlin',
    EE: 'Europe/Tallinn',
    ES: 'Europe/Madrid',
    FR: 'Europe/Paris',
    GB: 'Europe/London',
    HK: 'Asia/Hong_Kong',
    IL: 'Israel',
    IN: 'Asia/Colombo',
    KR: 'Asia/Seoul',
    LT: 'Europe/Vilnius',
    MD: 'Europe/Istanbul',
    MT: 'Europe/Malta',
    NL: 'Europe/Amsterdam',
    NO: 'Europe/Oslo',
    PH: 'Asia/Manila',
    PL: 'Poland',
    RU: 'Europe/Moscow',
    SG: 'Asia/Singapore',
    UA: 'Europe/Kiev',
    UK: 'Europe/London',
    US: 'US/Eastern',
    UZ: 'Asia/Tashkent',
};

E.regions = {
    AD: ['Southern Europe', 'EMEA'],
    AE: ['Western Asia', 'EMEA'],
    AF: ['Southern Asia', 'EMEA'],
    AG: ['Caribbean', 'AMER'],
    AI: ['Caribbean', 'AMER'],
    AL: ['South-Eastern Europe', 'EMEA'],
    AM: ['Western Asia', 'EMEA'],
    AN: ['Caribbean'],
    AO: ['Middle Africa', 'EMEA'],
    AP: ['Asia/Pacific'],
    AQ: ['Antarctica', 'APAC'],
    AR: ['South America', 'AMER'],
    AS: ['Polynesia', 'AMER'],
    AT: ['Western Europe', 'EMEA'],
    AU: ['Australia and New Zealand', 'APAC'],
    AW: ['Caribbean', 'AMER'],
    AX: ['Scandinavia', 'Northern Europe', 'EMEA'],
    AZ: ['Western Asia', 'EMEA'],
    BA: ['South-Eastern Europe', 'EMEA'],
    BB: ['Caribbean', 'AMER'],
    BD: ['Southern Asia', 'APAC'],
    BE: ['Western Europe', 'EMEA'],
    BF: ['Western Africa', 'EMEA'],
    BG: ['Eastern Europe', 'EMEA'],
    BH: ['Western Asia', 'EMEA'],
    BI: ['Eastern Africa', 'EMEA'],
    BJ: ['Western Africa', 'EMEA'],
    BL: ['Caribbean', 'AMER'],
    BM: ['Northern America', 'AMER'],
    BN: ['South-Eastern Asia', 'EMEA'],
    BO: ['South America', 'AMER'],
    BQ: ['Caribbean', 'AMER'],
    BR: ['South America', 'AMER'],
    BS: ['Caribbean', 'AMER'],
    BT: ['Southern Asia', 'APAC'],
    BV: ['Antarctica', 'AMER'],
    BW: ['Southern Africa', 'EMEA'],
    BY: ['Eastern Europe', 'EMEA'],
    BZ: ['Central America', 'AMER'],
    CA: ['Northern America', 'AMER'],
    CC: ['Australia and New Zealand', 'APAC'],
    CD: ['Middle Africa', 'EMEA'],
    CF: ['Middle Africa', 'EMEA'],
    CG: ['Middle Africa', 'EMEA'],
    CH: ['Western Europe', 'EMEA'],
    CI: ['Western Africa', 'EMEA'],
    CK: ['Polynesia', 'APAC'],
    CL: ['South America', 'AMER'],
    CM: ['Middle Africa', 'EMEA'],
    CN: ['Asia', 'China'],
    CO: ['South America', 'AMER'],
    CR: ['Central America', 'AMER'],
    CU: ['Caribbean', 'AMER'],
    CV: ['Western Africa', 'EMEA'],
    CW: ['Caribbean', ''],
    CX: ['Australia and New Zealand', 'APAC'],
    CY: ['South-Eastern Europe', 'EMEA'],
    CZ: ['Eastern Europe', 'EMEA'],
    DE: ['Western Europe', 'EMEA'],
    DJ: ['Eastern Africa', 'EMEA'],
    DK: ['Scandinavia', 'Northern Europe', 'EMEA'],
    DM: ['Caribbean', 'AMER'],
    DO: ['Caribbean', 'AMER'],
    DZ: ['Northern Africa', 'EMEA'],
    EC: ['South America', 'AMER'],
    EE: ['Eastern Europe', 'EMEA'],
    EG: ['Northern Africa', 'EMEA'],
    EH: ['Northern Africa', 'EMEA'],
    ER: ['Eastern Africa', 'EMEA'],
    ES: ['Southern Europe', 'EMEA'],
    ET: ['Eastern Africa', 'EMEA'],
    EU: ['Western Europe'],
    FI: ['Scandinavia', 'Northern Europe', 'EMEA'],
    FJ: ['Melanesia', 'APAC'],
    FK: ['South America', 'AMER'],
    FM: ['Micronesia', 'APAC'],
    FO: ['Scandinavia', 'Northern Europe', 'AMER'],
    FR: ['Western Europe', 'EMEA'],
    FX: ['Western Europe'],
    GA: ['Middle Africa', 'EMEA'],
    GB: ['Northern Europe', 'EMEA'],
    GD: ['Caribbean', 'AMER'],
    GE: ['Western Asia', 'EMEA'],
    GF: ['South America', 'EMEA'],
    GG: ['Northern Europe', 'EMEA'],
    GH: ['Western Africa', 'EMEA'],
    GI: ['Southern Europe', 'EMEA'],
    GL: ['Scandinavia', 'Northern America', 'EMEA'],
    GM: ['Western Africa', 'EMEA'],
    GN: ['Western Africa', 'EMEA'],
    GP: ['Caribbean', 'AMER'],
    GQ: ['Middle Africa', 'EMEA'],
    GR: ['South-Eastern Europe', 'EMEA'],
    GS: ['Antarctica', 'AMER'],
    GT: ['Central America', 'AMER'],
    GU: ['Micronesia', 'APAC'],
    GW: ['Western Africa', 'EMEA'],
    GY: ['South America', 'EMEA'],
    HK: ['Eastern Asia', 'APAC'],
    HM: ['Australia and New Zealand', 'AMER'],
    HN: ['Central America', 'AMER'],
    HR: ['South-Eastern Europe', 'EMEA'],
    HT: ['Caribbean', 'AMER'],
    HU: ['Eastern Europe', 'EMEA'],
    ID: ['South-Eastern Asia', 'APAC'],
    IE: ['Northern Europe', 'EMEA'],
    IL: ['Western Asia', 'EMEA'],
    IM: ['Northern Europe', 'EMEA'],
    IN: ['Southern Asia', 'APAC'],
    IO: ['Eastern Africa', 'APAC'],
    IQ: ['Western Asia', 'EMEA'],
    IR: ['Southern Asia', 'EMEA'],
    IS: ['Scandinavia', 'Northern Europe', 'EMEA'],
    IT: ['Southern Europe', 'EMEA'],
    JE: ['Northern Europe', 'EMEA'],
    JM: ['Caribbean', 'AMER'],
    JO: ['Western Asia', 'EMEA'],
    JP: ['Eastern Asia', 'APAC'],
    KE: ['Eastern Africa', 'EMEA'],
    KG: ['Central Asia', 'EMEA'],
    KH: ['South-Eastern Asia', 'APAC'],
    KI: ['Micronesia', 'EMEA'],
    KM: ['Eastern Africa', 'EMEA'],
    KN: ['Caribbean', 'AMER'],
    KP: ['Eastern Asia', 'APAC'],
    KR: ['Eastern Asia', 'APAC'],
    KW: ['Western Asia', 'EMEA'],
    KY: ['Caribbean', 'AMER'],
    KZ: ['Central Asia', 'EMEA'],
    LA: ['South-Eastern Asia', 'APAC'],
    LB: ['Western Asia', 'EMEA'],
    LC: ['Caribbean', 'AMER'],
    LI: ['Western Europe', 'EMEA'],
    LK: ['Southern Asia', 'APAC'],
    LR: ['Western Africa', 'EMEA'],
    LS: ['Southern Africa', 'EMEA'],
    LT: ['Eastern Europe', 'EMEA'],
    LU: ['Western Europe', 'EMEA'],
    LV: ['Eastern Europe', 'EMEA'],
    LY: ['Northern Africa', 'EMEA'],
    MA: ['Northern Africa', 'EMEA'],
    MC: ['Western Europe', 'EMEA'],
    MD: ['Eastern Europe', 'EMEA'],
    ME: ['South-Eastern Europe', 'EMEA'],
    MF: ['Caribbean', 'AMER'],
    MG: ['Eastern Africa', 'EMEA'],
    MH: ['Micronesia', 'AMER'],
    MK: ['South-Eastern Europe', 'EMEA'],
    ML: ['Western Africa', 'EMEA'],
    MM: ['South-Eastern Asia', 'APAC'],
    MN: ['Eastern Asia', 'APAC'],
    MO: ['Eastern Asia', 'APAC'],
    MP: ['Micronesia', 'AMER'],
    MQ: ['Caribbean', 'EMEA'],
    MR: ['Western Africa', 'EMEA'],
    MS: ['Caribbean', 'AMER'],
    MT: ['Southern Europe', 'EMEA'],
    MU: ['Eastern Africa', 'EMEA'],
    MV: ['Southern Asia', 'APAC'],
    MW: ['Eastern Africa', 'EMEA'],
    MX: ['Central America', 'AMER'],
    MY: ['South-Eastern Asia', 'APAC'],
    MZ: ['Eastern Africa', 'EMEA'],
    NA: ['Southern Africa', 'EMEA'],
    NC: ['Melanesia', 'APAC'],
    NE: ['Western Africa', 'EMEA'],
    NF: ['Australia and New Zealand', 'AMER'],
    NG: ['Western Africa', 'EMEA'],
    NI: ['Central America', 'AMER'],
    NL: ['Western Europe', 'EMEA'],
    NO: ['Scandinavia', 'Northern Europe', 'EMEA'],
    NP: ['Southern Asia', 'APAC'],
    NR: ['Micronesia', 'AMER'],
    NU: ['Polynesia', 'AMER'],
    NZ: ['Australia and New Zealand', 'APAC'],
    OM: ['Western Asia', 'EMEA'],
    PA: ['Central America', 'AMER'],
    PE: ['South America', 'AMER'],
    PF: ['Polynesia', 'EMEA'],
    PG: ['Melanesia', 'APAC'],
    PH: ['South-Eastern Asia', 'APAC'],
    PK: ['Southern Asia', 'EMEA'],
    PL: ['Eastern Europe', 'EMEA'],
    PM: ['Northern America', 'AMER'],
    PN: ['Polynesia', 'AMER'],
    PR: ['Caribbean', 'AMER'],
    PS: ['Western Asia', 'EMEA'],
    PT: ['Southern Europe', 'EMEA'],
    PW: ['Micronesia', 'APAC'],
    PY: ['South America', 'AMER'],
    QA: ['Western Asia', 'EMEA'],
    RE: ['Eastern Africa', 'AMER'],
    RO: ['Eastern Europe', 'EMEA'],
    RS: ['South-Eastern Europe', 'EMEA'],
    RU: ['Eastern Europe', 'EMEA'],
    RW: ['Eastern Africa', 'EMEA'],
    SA: ['Western Asia', 'EMEA'],
    SB: ['Melanesia', 'APAC'],
    SC: ['Eastern Africa', 'APAC'],
    SD: ['Northern Africa', 'EMEA'],
    SE: ['Scandinavia', 'Northern Europe', 'EMEA'],
    SG: ['South-Eastern Asia', 'APAC'],
    SH: ['Western Africa', 'AMER'],
    SI: ['South-Eastern Europe', 'EMEA'],
    SJ: ['Scandinavia', 'Northern Europe', 'AMER'],
    SK: ['Eastern Europe', 'EMEA'],
    SL: ['Western Africa', 'EMEA'],
    SM: ['Southern Europe', 'EMEA'],
    SN: ['Western Africa', 'EMEA'],
    SO: ['Eastern Africa', 'EMEA'],
    SR: ['South America', 'AMER'],
    SS: ['Eastern Africa', 'EMEA'],
    ST: ['Middle Africa', 'EMEA'],
    SV: ['Central America', 'AMER'],
    SX: ['Caribbean', 'APAC'],
    SY: ['Western Asia', 'EMEA'],
    SZ: ['Southern Africa', 'EMEA'],
    TC: ['Caribbean', 'AMER'],
    TD: ['Middle Africa', 'EMEA'],
    TF: ['Antarctica', 'EMEA'],
    TG: ['Western Africa', 'EMEA'],
    TH: ['South-Eastern Asia', 'APAC'],
    TJ: ['Central Asia', 'EMEA'],
    TK: ['Polynesia', 'EMEA'],
    TL: ['South-Eastern Asia', 'APAC'],
    TM: ['Central Asia', 'EMEA'],
    TN: ['Northern Africa', 'EMEA'],
    TO: ['Polynesia', 'APAC'],
    TP: ['South-Eastern Asia'],
    TR: ['South-Eastern Europe', 'EMEA'],
    TT: ['Caribbean', 'AMER'],
    TV: ['Polynesia', 'AMER'],
    TW: ['Eastern Asia', 'APAC'],
    TZ: ['Eastern Africa', 'EMEA'],
    UA: ['Eastern Europe', 'EMEA'],
    UG: ['Eastern Africa', 'EMEA'],
    UK: ['Northern Europe'],
    UM: ['Northern America', 'AMER'],
    US: ['Northern America', 'AMER'],
    UY: ['South America', 'AMER'],
    UZ: ['Central Asia', 'EMEA'],
    VA: ['Southern Europe', 'EMEA'],
    VC: ['Caribbean', 'AMER'],
    VE: ['South America', 'AMER'],
    VG: ['Caribbean', 'AMER'],
    VI: ['Caribbean', 'AMER'],
    VN: ['South-Eastern Asia', 'APAC'],
    VU: ['Melanesia', 'APAC'],
    WF: ['Polynesia', 'AMER'],
    WS: ['Polynesia', 'APAC'],
    XK: ['South-Eastern Europe'],
    YE: ['Western Asia', 'EMEA'],
    YT: ['Eastern Africa', 'EMEA'],
    YU: ['South-Eastern Europe'],
    ZA: ['Southern Africa', 'EMEA'],
    ZM: ['Eastern Africa', 'EMEA'],
    ZW: ['Eastern Africa', 'EMEA'],
};
var supraregions = {
    'Northern America': ['America'],
    'South America': ['LATAM'],
    'Central America': ['LATAM'],
    Caribbean: ['LATAM'],
    LATAM: ['America'],
    'Eastern Europe': ['Eastern Europe (W/E)'],
    'South-Eastern Europe': ['Eastern Europe (W/E)'],
    'Western Europe': ['Western Europe (W/E)'],
    'Southern Europe': ['Western Europe (W/E)'],
    'Northern Europe': ['Western Europe (W/E)'],
    'Western Europe (W/E)': ['Europe'],
    'Eastern Europe (W/E)': ['Europe'],
    Polynesia: ['Oceania'],
    Melanesia: ['Oceania'],
    Micronesia: ['Oceania'],
    'Australia and New Zealand': ['Oceania'],
    Oceania: ['APAC'],
    'South-Eastern Asia': ['APAC', 'Asia'],
    'Southern Asia': ['APAC', 'Asia'],
    'Eastern Asia': ['APAC', 'Asia'],
    'Central Asia': ['Asia'],
    'Western Asia': ['Asia'],
    'Eastern Africa': ['Africa'],
    'Western Africa': ['Africa'],
    'Southern Africa': ['Africa'],
    'Northern Africa': ['Africa'],
    'Middle Africa': ['Africa'],
};
var extend_regions = function(regions){
    for (var i = 0; i<regions.length; i++)
    {
        (supraregions[regions[i]]||[])
        .filter(function(extra){ return !regions.includes(extra); })
        .forEach(function(extra){ regions.push(extra); });
    }
    regions.push('All');
};
for (var country in E.regions)
    extend_regions(E.regions[country]);

E.unallowed_list = {
    SY: 1,
    LB: 1,
    IR: 1,
    IQ: 1,
    DO: 1,
};

E.is_allowed = function(code){
    return E.list[code] && !E.unallowed_list[code];
};

E.lum_easy_pass = {
    AR: 1,
    AT: 1,
    AU: 1,
    BE: 1,
    CA: 1,
    EU: 1,
    FL: 1,
    FR: 1,
    DE: 1,
    GB: 1,
    IE: 1,
    IL: 1,
    IT: 1,
    NL: 1,
    NZ: 1,
    PL: 1,
    PT: 1,
    SG: 1,
    KR: 1,
    CH: 1,
    SE: 1,
    UK: 1,
    US: 1,
    JP: 1,
};

E.dialing_code_list = {
    AF: '93',
    AL: '355',
    DZ: '213',
    AX: '358',
    AS: '1684',
    AD: '376',
    AO: '244',
    AI: '1264',
    AQ: '672',
    AG: '1268',
    AR: '54',
    AM: '374',
    AW: '297',
    AU: '61',
    AT: '43',
    AZ: '994',
    BS: '1242',
    BH: '973',
    JE: '44',
    BD: '880',
    BB: '1246',
    BY: '375',
    BE: '32',
    BZ: '501',
    BJ: '229',
    BM: '1441',
    BT: '975',
    BO: '591',
    BQ: '599',
    BA: '387',
    BW: '267',
    BV: '55',
    BR: '55',
    IO: '246',
    BN: '673',
    BG: '359',
    BF: '226',
    BI: '257',
    KH: '855',
    CM: '237',
    CV: '238',
    KY: '1345',
    CF: '236',
    TD: '235',
    CL: '56',
    CN: '86',
    CX: '61',
    CC: '61',
    CO: '57',
    KM: '269',
    CG: '242',
    CK: '682',
    CR: '506',
    CI: '225',
    HR: '385',
    CU: '53',
    CW: '599',
    CY: '357',
    CZ: '420',
    CD: '243',
    DK: '45',
    DJ: '253',
    DM: '1767',
    TP: '670',
    EC: '593',
    EG: '20',
    SV: '503',
    GQ: '240',
    ER: '291',
    EE: '372',
    ET: '251',
    FK: '500',
    FO: '298',
    FJ: '679',
    FI: '358',
    FR: '33',
    FX: '33',
    GF: '594',
    PF: '689',
    TF: '262',
    GA: '241',
    GM: '220',
    GE: '995',
    DE: '49',
    GH: '233',
    GI: '350',
    GB: '44',
    GR: '30',
    GL: '299',
    GD: '1473',
    GP: '590',
    GU: '1671',
    GT: '502',
    GG: '44',
    GN: '224',
    GW: '245',
    GY: '592',
    HT: '509',
    HN: '504',
    HK: '852',
    HU: '36',
    IS: '354',
    IN: '91',
    ID: '62',
    IR: '98',
    IQ: '964',
    IE: '353',
    IM: '44',
    IL: '972',
    IT: '39',
    JM: '1876',
    JP: '81',
    JO: '962',
    KE: '254',
    KI: '686',
    XK: '383',
    KW: '965',
    KG: '996',
    LA: '856',
    LV: '371',
    LB: '961',
    LS: '266',
    LR: '231',
    LY: '218',
    LI: '423',
    LT: '370',
    LU: '352',
    MO: '853',
    MK: '389',
    MG: '261',
    MW: '265',
    MY: '60',
    MV: '960',
    ML: '223',
    MT: '356',
    MH: '692',
    MQ: '596',
    MR: '222',
    MU: '230',
    YT: '262',
    MX: '52',
    FM: '691',
    MD: '373',
    MC: '377',
    MN: '976',
    ME: '382',
    MS: '1664',
    MA: '212',
    MZ: '258',
    MM: '95',
    NA: '264',
    NR: '674',
    NP: '977',
    NL: '31',
    AN: '599',
    NC: '687',
    NZ: '64',
    NI: '505',
    NE: '227',
    NG: '234',
    NU: '683',
    NF: '672',
    KP: '850',
    MP: '1670',
    NO: '47',
    OM: '968',
    PK: '92',
    PW: '680',
    PS: '970',
    PA: '507',
    PG: '675',
    PY: '595',
    PE: '51',
    PH: '63',
    PN: '64',
    PL: '48',
    PT: '351',
    QA: '974',
    RE: '262',
    RO: '40',
    RW: '250',
    BL: '590',
    SH: '290',
    KN: '1869',
    LC: '1758',
    MF: '590',
    PM: '508',
    VC: '1784',
    SM: '378',
    SX: '1721',
    ST: '239',
    SA: '966',
    SN: '221',
    RS: '381',
    SC: '248',
    SL: '232',
    SG: '65',
    SK: '421',
    SI: '386',
    SB: '677',
    SO: '252',
    ZA: '27',
    GS: '500',
    KR: '82',
    SS: '211',
    ES: '34',
    LK: '94',
    SD: '249',
    SR: '597',
    SJ: '47',
    SZ: '268',
    SE: '46',
    CH: '41',
    SY: '963',
    TW: '886',
    TJ: '992',
    TZ: '255',
    TH: '66',
    TL: '670',
    TG: '228',
    TK: '690',
    TO: '676',
    TT: '1868',
    TN: '216',
    TR: '90',
    TM: '993',
    TC: '1649',
    TV: '688',
    UG: '256',
    UA: '380',
    AE: '971',
    UK: '44',
    UY: '598',
    UZ: '998',
    VU: '678',
    VA: '39',
    VE: '58',
    VN: '84',
    VG: '1284',
    VI: '1340',
    WF: '681',
    EH: '212',
    WS: '685',
    YE: '967',
    YU: '38',
    ZM: '260',
    ZW: '263',
    DO: '1',
    CA: '1',
    HM: '0',
    KZ: '7',
    US: '1',
    UM: '1',
    PR: '1',
    RU: '7',
};

E.code2label = function(code){
    code = code.toUpperCase();
    return E.list[code] || code;
};

E.code2adj = function(code){
    code = code.toUpperCase();
    return E.adj_list[code] || code;
};

E.code2timezone = function(code){
    code = code.toUpperCase();
    return E.timezone[code] || code;
};

E.label2code = function(label){
    for (var i in E.list)
    {
        if (E.list[i]===label)
            return i;
    }
    return '';
};

E.mixed2code = function(mixed){
    if (!mixed)
        return;
    if (/^[A-Z]{2}$/.test(mixed))
        return mixed;
    if (mixed.length==2)
        return mixed.toUpperCase();
    if (mixed=='USA')
        return 'US';
    for (var code in E.list)
    {
        if (E.list[code].toLowerCase()==mixed.toLowerCase())
            return code;
    }
    return mixed;
};

E.www2code = function(code){
    return code=='UK' ? 'GB' : code=='uk' ? 'gb' : code; };

E.code2www = function(code){
    return code=='GB' ? 'UK' : code=='gb' ? 'uk' : code; };

return E; }); }());
