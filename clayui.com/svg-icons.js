/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

const fs = require('fs');
const path = require('path');

/* eslint-disable */
// prettier-ignore
const flagsData = {
	"af-za":						'"af-za", "Afrikaans", "South Africa"',
	"ar":							'"ar", "Arabic"',
	"ar-ae":						'"ar-ae", "Arabic", "United Arab Emirates"',
	"ar-ar":						'"ar-ar", "ar-ar", "Arabic", "Arabic"',
	"ar-bh":						'"ar-bh", "Arabic", "Bahrain"',
	"ar-dj":						'"ar-dj", "Arabic", "Djibouti"',
	"ar-dz":						'"ar-dz", "Arabic", "Algeria"',
	"ar-eg":						'"ar-eg", "Arabic", "Egypt"',
	"ar-eh":						'"ar-eh", "Arabic", "Western Sahara"',
	"ar-er":						'"ar-er", "Arabic", "Eritrea"',
	"ar-il":						'"ar-il", "Arabic", "Israel"',
	"ar-iq":						'"ar-iq", "Arabic", "Iraq"',
	"ar-jo":						'"ar-jo", "Arabic", "Jordan"',
	"ar-km":						'"ar-km", "Arabic", "Comoros"',
	"ar-kw":						'"ar-kw", "Arabic", "Kuwait"',
	"ar-lb":						'"ar-lb", "Arabic", "Lebanon"',
	"ar-ly":						'"ar-ly", "Arabic", "Libya"',
	"ar-ma":						'"ar-ma", "Arabic", "Morocco"',
	"ar-mr":						'"ar-mr", "Arabic", "Mauritania"',
	"ar-om":						'"ar-om", "Arabic", "Oman"',
	"ar-ps":						'"ar-ps", "Arabic", "West Bank and Gaza"',
	"ar-qa":						'"ar-qa", "Arabic", "Qatar"',
	"ar-sa":						'"ar-sa", "Arabic", "Saudi Arabia"',
	"ar-sd":						'"ar-sd", "Arabic", "Sudan"',
	"ar-so":						'"ar-so", "Arabic", "Somalia"',
	"ar-sy":						'"ar-sy", "Arabic", "Syria"',
	"ar-td":						'"ar-td", "Arabic", "Chad"',
	"ar-tn":						'"ar-tn", "Arabic", "Tunisia"',
	"ar-ye":						'"ar-ye", "Arabic", "Yemen"',
	"ar-ae":						'"ar-ae", "Arabic", "United Arab Emirates"',
	"ar-bh":						'"ar-bh", "Arabic", "Bahrain"',
	"ar-dz":						'"ar-dz", "Arabic", "Algeria"',
	"ar-eg":						'"ar-eg", "Arabic", "Egypt"',
	"ar-iq":						'"ar-iq", "Arabic", "Iraq"',
	"ar-jo":						'"ar-jo", "Arabic", "Jordan"',
	"ar-kw":						'"ar-kw", "Arabic", "Kuwait"',
	"ar-lb":						'"ar-lb", "Arabic", "Lebanon"',
	"ar-ly":						'"ar-ly", "Arabic", "Libya"',
	"ar-ma":						'"ar-ma", "Arabic", "Morocco"',
	"ar-om":						'"ar-om", "Arabic", "Oman"',
	"ar-qa":						'"ar-qa", "Arabic", "Qatar"',
	"ar-sa":						'"ar-sa", "Arabic", "Saudi Arabia"',
	"ar-sd":						'"ar-sd", "Arabic", "Sudan"',
	"ar-sy":						'"ar-sy", "Arabic", "Syria"',
	"ar-tn":						'"ar-tn", "Arabic", "Tunisia"',
	"ar-ye":						'"ar-ye", "Arabic", "Yemen"',
	"az-az":						'"az-az", "Azerbaijani", "Azerbaijan"',
	"be":							'"be", "Belarusian"',
	"be-by":						'"be-by", "Belarusian", "Belarus)"',
	"bg":							'"bg", "Bulgarian"',
	"bg-bg":						'"bg-bg", "Bulgarian", "Bulgaria"',
	"bn-in":						'"bn-in", "Bengali", "India"',
	"bs-ba":						'"bs-ba", "Bosnian", "Bosnia and Herzegovina"',
	"ca":							'"ca", "Catalan"',
	"ca-ad":						'"ca-ad", "Catalan", "Andorra"',
	"ca-es":						'"ca-es", "Catalan", "Spain"',
	"cs":							'"cs", "Czech"',
	"cs-cz":						'"cs-cz", "Czech", "Czech Republic"',
	"cs-sk":						'"cs-sk", "Czech", "Slovak Republic"',
	"cs-cz":						'"cs-cz", "Czech", "Czech Republic"',
	"cy-gb":						'"cy-gb", "Welsh", "United Kingdom"',
	"da":							'"da", "Danish"',
	"da-dk":						'"da-dk", "Danish", "Denmark"',
	"da-fo":						'"da-fo", "Danish", "Faeroe Islands"',
	"da-gl":						'"da-gl", "Danish", "Greenland"',
	"da-dk":						'"da-dk", "Danish", "Denmark"',
	"de":							'"de", "German"',
	"de-at":						'"de-at", "German", "Austria"',
	"de-be":						'"de-be", "German", "Belgium"',
	"de-ch":						'"de-ch", "German", "Switzerland"',
	"de-de":						'"de-de", "German", "Germany"',
	"de-li":						'"de-li", "German", "Liechtenstein"',
	"de-lu":						'"de-lu", "German", "Luxembourg"',
	"de-na":						'"de-na", "German", "Namibia"',
	"de-at":						'"de-at", "German", "Austria"',
	"de-ch":						'"de-ch", "German", "Switzerland"',
	"de-de":						'"de-de", "German", "Germany"',
	"de-li":						'"de-li", "German", "Liechtenstein"',
	"de-lu":						'"de-lu", "German", "Luxembourg"',
	"dv-mv":						'"dv-mv", "Divehi", "Maldives"',
	"el":							'"el", "Greek"',
	"el-cy":						'"el-cy", "Greek", "Cyprus"',
	"el-gr":						'"el-gr", "Greek", "Greece"',
	"el-cy":						'"el-cy", "Greek", "Cyprus"',
	"el-gr":						'"el-gr", "Greek", "Greece"',
	"en":							'"en", "English"',
	"en-ag":						'"en-ag", "English", "Antigua and Barbuda"',
	"en-ai":						'"en-ai", "English", "Anguilla"',
	"en-as":						'"en-as", "English", "American Samoa"',
	"en-au":						'"en-au", "English", "Australia"',
	"en-bb":						'"en-bb", "English", "Barbados"',
	"en-bd":						'"en-bd", "English", "Bangladesh"',
	"en-bm":						'"en-bm", "English", "Bermuda"',
	"en-bs":						'"en-bs", "English", "The Bahamas"',
	"en-bw":						'"en-bw", "English", "Botswana"',
	"en-bz":						'"en-bz", "English", "Belize"',
	"en-ca":						'"en-ca", "English", "Canada"',
	"en-ck":						'"en-ck", "English", "Cook Islands"',
	"en-cm":						'"en-cm", "English", "Cameroon"',
	"en-cw":						'"en-cw", "English", "Curaçao"',
	"en-dm":						'"en-dm", "English", "Dominica"',
	"en-er":						'"en-er", "English", "Eritrea"',
	"en-fj":						'"en-fj", "English", "Fiji"',
	"en-fk":						'"en-fk", "English", "Falkland Islands"',
	"en-fm":						'"en-fm", "English", "Micronesia"',
	"en-gb":						'"en-gb", "English", "United Kingdom"',
	"en-gd":						'"en-gd", "English", "Grenada"',
	"en-gg":						'"en-gg", "English", "Guernsey"',
	"en-gh":						'"en-gh", "English", "Ghana"',
	"en-gi":						'"en-gi", "English", "Gibraltar"',
	"en-gm":						'"en-gm", "English", "The Gambia"',
	"en-gu":						'"en-gu", "English", "Guam"',
	"en-gy":						'"en-gy", "English", "Guyana"',
	"en-hk":						'"en-hk", "English", "Hong Kong"',
	"en-ie":						'"en-ie", "English", "Ireland"',
	"en-im":						'"en-im", "English", "Isle of Man"',
	"en-in":						'"en-in", "English", "India"',
	"en-je":						'"en-je", "English", "Jersey"',
	"en-jm":						'"en-jm", "English", "Jamaica"',
	"en-ke":						'"en-ke", "English", "Kenya"',
	"en-ki":						'"en-ki", "English", "Kiribati"',
	"en-kn":						'"en-kn", "English", "St. Kitts and Nevis"',
	"en-ky":						'"en-ky", "English", "Cayman Islands"',
	"en-lc":						'"en-lc", "English", "St. Lucia"',
	"en-lk":						'"en-lk", "English", "Sri Lanka"',
	"en-lr":						'"en-lr", "English", "Liberia"',
	"en-ls":						'"en-ls", "English", "Lesotho"',
	"en-mh":						'"en-mh", "English", "Marshall Islands"',
	"en-mp":						'"en-mp", "English", "Northern Mariana Islands"',
	"en-ms":						'"en-ms", "English", "Montserrat"',
	"en-mt":						'"en-mt", "English", "Malta"',
	"en-mu":						'"en-mu", "English", "Mauritius"',
	"en-mw":						'"en-mw", "English", "Malawi"',
	"en-my":						'"en-my", "English", "Malaysia"',
	"en-na":						'"en-na", "English", "Namibia"',
	"en-ng":						'"en-ng", "English", "Nigeria"',
	"en-nr":						'"en-nr", "English", "Nauru"',
	"en-nu":						'"en-nu", "English", "Niue"',
	"en-nz":						'"en-nz", "English", "New Zealand"',
	"en-pg":						'"en-pg", "English", "Papua New Guinea"',
	"en-ph":						'"en-ph", "English", "Philippines"',
	"en-pi":						'"en-pi", "English", "Pirate"',
	"en-pk":						'"en-pk", "English", "Pakistan"',
	"en-pn":						'"en-pn", "English", "Pitcairn Islands"',
	"en-pr":						'"en-pr", "English", "Puerto Rico"',
	"en-pw":						'"en-pw", "English", "Palau"',
	"en-rw":						'"en-rw", "English", "Rwanda"',
	"en-sb":						'"en-sb", "English", "Solomon Islands"',
	"en-sc":						'"en-sc", "English", "Seychelles"',
	"en-sd":						'"en-sd", "English", "Sudan"',
	"en-sg":						'"en-sg", "English", "Singapore"',
	"en-sh":						'"en-sh", "English", "Saint Helena"',
	"en-sl":						'"en-sl", "English", "Sierra Leone"',
	"en-so":						'"en-so", "English", "Somalia"',
	"en-ss":						'"en-ss", "English", "South Sudan"',
	"en-sz":						'"en-sz", "English", "Swaziland"',
	"en-tc":						'"en-tc", "English", "Turks and Caicos Islands"',
	"en-to":						'"en-to", "English", "Tonga"',
	"en-tt":						'"en-tt", "English", "Trinidad and Tobago"',
	"en-tv":						'"en-tv", "English", "Tuvalu"',
	"en-tz":						'"en-tz", "English", "Tanzania"',
	"en-ud":						'"en-ud", "English", "Upside Down"',
	"en-ug":						'"en-ug", "English", "Uganda"',
	"en-us":						'"en-us", "English", "United States"',
	"en-vc":						'"en-vc", "English", "St. Vincent and the Grenadines"',
	"en-vg":						'"en-vg", "English", "British Virgin Islands"',
	"en-vi":						'"en-vi", "English", "United States Virgin Islands"',
	"en-vu":						'"en-vu", "English", "Vanuatu"',
	"en-ws":						'"en-ws", "English", "Samoa"',
	"en-za":						'"en-za", "English", "South Africa"',
	"en-zm":						'"en-zm", "English", "Zambia"',
	"en-zw":						'"en-zw", "English", "Zimbabwe"',
	"en-au":						'"en-au", "English", "Australia"',
	"en-bz":						'"en-bz", "English", "Belize"',
	"en-ca":						'"en-ca", "English", "Canada"',
	"en-cb":						'"en-cb", "English", "Caribbean"',
	"en-gb":						'"en-gb", "English", "United Kingdom"',
	"en-ie":						'"en-ie", "English", "Ireland"',
	"en-in":						'"en-in", "English", "India"',
	"en-jm":						'"en-jm", "English", "Jamaica"',
	"en-mt":						'"en-mt", "English", "Malta"',
	"en-nz":						'"en-nz", "English", "New Zealand"',
	"en-ph":						'"en-ph", "English", "Philippines"',
	"en-sg":						'"en-sg", "English", "Singapore"',
	"en-tt":						'"en-tt", "English", "Trinidad and Tobago"',
	"en-us":						'"en-us", "English", "United States"',
	"en-za":						'"en-za", "English", "South Africa"',
	"en-zw":						'"en-zw", "English", "Zimbabwe"',
	"eo-eo":						'"eo-eo", "Esperanto", "Esperanto"',
	"es":							'"es", "Spanish"',
	"es-ar":						'"es-ar", "Spanish", "Argentina"',
	"es-bo":						'"es-bo", "Spanish", "Bolivia"',
	"es-cl":						'"es-cl", "Spanish", "Chile"',
	"es-co":						'"es-co", "Spanish", "Colombia"',
	"es-cr":						'"es-cr", "Spanish", "Costa Rica"',
	"es-cu":						'"es-cu", "Spanish", "Cuba"',
	"es-do":						'"es-do", "Spanish", "Dominican Republic"',
	"es-ec":						'"es-ec", "Spanish", "Ecuador"',
	"es-es":						'"es-es", "Spanish", "Spain"',
	"es-gi":						'"es-gi", "Spanish", "Gibraltar"',
	"es-gq":						'"es-gq", "Spanish", "Equatorial Guinea"',
	"es-gt":						'"es-gt", "Spanish", "Guatemala"',
	"es-hn":						'"es-hn", "Spanish", "Honduras"',
	"es-la":						'"es-la", "Spanish", "Spanish"',
	"es-mx":						'"es-mx", "Spanish", "Mexico"',
	"es-ni":						'"es-ni", "Spanish", "Nicaragua"',
	"es-pa":						'"es-pa", "Spanish", "Panama"',
	"es-pe":						'"es-pe", "Spanish", "Peru"',
	"es-pr":						'"es-pr", "Spanish", "Puerto Rico"',
	"es-py":						'"es-py", "Spanish", "Paraguay"',
	"es-sv":						'"es-sv", "Spanish", "El Salvador"',
	"es-us":						'"es-us", "Spanish", "United States"',
	"es-uy":						'"es-uy", "Spanish", "Uruguay"',
	"es-ve":						'"es-ve", "Spanish", "Venezuela"',
	"es-ar":						'"es-ar", "Spanish", "Argentina"',
	"es-bo":						'"es-bo", "Spanish", "Bolivia"',
	"es-cl":						'"es-cl", "Spanish", "Chile"',
	"es-co":						'"es-co", "Spanish", "Colombia"',
	"es-cr":						'"es-cr", "Spanish", "Costa Rica"',
	"es-do":						'"es-do", "Spanish", "Dominican Republic"',
	"es-ec":						'"es-ec", "Spanish", "Ecuador"',
	"es-es":						'"es-es", "Spanish", "Spain"',
	"es-gt":						'"es-gt", "Spanish", "Guatemala"',
	"es-hn":						'"es-hn", "Spanish", "Honduras"',
	"es-mx":						'"es-mx", "Spanish", "Mexico"',
	"es-ni":						'"es-ni", "Spanish", "Nicaragua"',
	"es-pa":						'"es-pa", "Spanish", "Panama"',
	"es-pe":						'"es-pe", "Spanish", "Peru"',
	"es-pr":						'"es-pr", "Spanish", "Puerto Rico"',
	"es-py":						'"es-py", "Spanish", "Paraguay"',
	"es-sv":						'"es-sv", "Spanish", "El Salvador"',
	"es-us":						'"es-us", "Spanish", "United States"',
	"es-uy":						'"es-uy", "Spanish", "Uruguay"',
	"es-ve":						'"es-ve", "Spanish", "Venezuela"',
	"et":							'"et", "Estonian"',
	"et-ee":						'"et-ee", "Estonian", "Estonia"',
	"eu-es":						'"eu-es", "Basque", "Spain"',
	"fa-ir":						'"fa-ir", "Farsi", "Iran"',
	"fb-lt":						'"fb-lt", "Leet Speak"',
	"fi":							'"fi", "Finnish"',
	"fi-fi":						'"fi-fi", "Finnish", "Finland"',
	"fo-fo":						'"fo-fo", "Faroese", "Faeroe Islands"',
	"fr":							'"fr", "French"',
	"fr-be":						'"fr-be", "French", "Belgium"',
	"fr-bf":						'"fr-bf", "French", "Burkina Faso"',
	"fr-bi":						'"fr-bi", "French", "Burundi"',
	"fr-bj":						'"fr-bj", "French", "Benin"',
	"fr-ca":						'"fr-ca", "French", "Canada"',
	"fr-cd":						'"fr-cd", "French", "Dem. Rep. Congo"',
	"fr-cf":						'"fr-cf", "French", "Central African Republic"',
	"fr-cg":						'"fr-cg", "French", "Congo"',
	"fr-ch":						'"fr-ch", "French", "Switzerland"',
	"fr-ci":						'"fr-ci", "French", "Côte d’Ivoire"',
	"fr-cm":						'"fr-cm", "French", "Cameroon"',
	"fr-dj":						'"fr-dj", "French", "Djibouti"',
	"fr-fr":						'"fr-fr", "French", "France"',
	"fr-ga":						'"fr-ga", "French", "Gabon"',
	"fr-gd":						'"fr-gd", "French", "Grenada"',
	"fr-gf":						'"fr-gf", "French", "French Guianna"',
	"fr-gn":						'"fr-gn", "French", "Guinea"',
	"fr-gp":						'"fr-gp", "French", "Guadeloupe"',
	"fr-gq":						'"fr-gq", "French", "Equatorial Guinea"',
	"fr-ht":						'"fr-ht", "French", "Haiti"',
	"fr-km":						'"fr-km", "French", "Comoros"',
	"fr-lc":						'"fr-lc", "French", "St. Lucia"',
	"fr-lu":						'"fr-lu", "French", "Luxembourg"',
	"fr-mc":						'"fr-mc", "French", "Monaco"',
	"fr-mf":						'"fr-mf", "French", "St. Martin (French part)"',
	"fr-mg":						'"fr-mg", "French", "Madagascar"',
	"fr-ml":						'"fr-ml", "French", "Mali"',
	"fr-mq":						'"fr-mq", "French", "Martinique"',
	"fr-mu":						'"fr-mu", "French", "Mauritius"',
	"fr-nc":						'"fr-nc", "French", "New Caledonia"',
	"fr-ne":						'"fr-ne", "French", "Niger"',
	"fr-pf":						'"fr-pf", "French", "French Polynesia"',
	"fr-pm":						'"fr-pm", "French", "Saint Pierre and Miquelon"',
	"fr-re":						'"fr-re", "French", "Réunion"',
	"fr-rw":						'"fr-rw", "French", "Rwanda"',
	"fr-sc":						'"fr-sc", "French", "Seychelles"',
	"fr-sn":						'"fr-sn", "French", "Senegal"',
	"fr-td":						'"fr-td", "French", "Chad"',
	"fr-tg":						'"fr-tg", "French", "Togo"',
	"fr-vu":						'"fr-vu", "French", "Vanuatu"',
	"fr-wf":						'"fr-wf", "French", "Wallis and Futuna"',
	"fr-yt":						'"fr-yt", "French", "Mayotte"',
	"fr-be":						'"fr-be", "French", "Belgium"',
	"fr-ca":						'"fr-ca", "French", "Canada"',
	"fr-ch":						'"fr-ch", "French", "Switzerland"',
	"fr-fr":						'"fr-fr", "French", "France"',
	"fr-lu":						'"fr-lu", "French", "Luxembourg"',
	"fr-mc":						'"fr-mc", "French", "Principality of Monaco"',
	"fy-nl":						'"fy-nl", "Frisian", "Netherlands"',
	"ga":							'"ga", "Irish"',
	"ga-gb":						'"ga-gb", "Irish", "United Kingdom"',
	"ga-ie":						'"ga-ie", "Irish", "Ireland"',
	"gl-es":						'"gl-es", "Galician", "Spain"',
	"gu-in":						'"gu-in", "Gujarati", "India"',
	"he-il":						'"he-il", "Hebrew", "Israel"',
	"hi-fj":						'"hi-fj", "Hindi", "Fiji"',
	"hi-in":						'"hi-in", "Hindi", "India"',
	"hi-pk":						'"hi-pk", "Hindi", "Pakistan"',
	"hi-in":						'"hi-in", "Hindi", "India"',
	// "hr": "Croatian",
	"hr-ba":						'"hr-ba", "Croatian", "Bosnia and Herzegovina"',
	"hr-hr":						'"hr-hr", "Croatian", "Croatia"',
	"hr-ba":						'"hr-ba", "Croatian", "Bosnia and Herzegovina"',
	"hr-hr":						'"hr-hr", "Croatian", "Croatia"',
	"hu":							'"hu", "Hungarian"',
	"hu-hu":						'"hu-hu", "Hungarian", "Hungary"',
	"hy-am":						'"hy-am", "Armenian", "Armenia"',
	"id-id":						'"id-id", "Indonesian", "Indonesia"',
	"in":							'"in", "Indonesian"',
	"in-id":						'"in-id", "Indonesian", "Indonesia"',
	"is":							'"is", "Icelandic"',
	"is-is":						'"is-is", "Icelandic", "Iceland"',
	"it":							'"it", "Italian"',
	"it-ch":						'"it-ch", "Italian", "Switzerland"',
	"it-it":						'"it-it", "Italian", "Italy"',
	"it-sm":						'"it-sm", "Italian", "San Marino"',
	"it-va":						'"it-va", "Italian", "Vatican City"',
	"it-ch":						'"it-ch", "Italian", "Switzerland"',
	"it-it":						'"it-it", "Italian", "Italy"',
	"iw":							'"iw", "Hebrew"',
	"iw-il":						'"iw-il", "Hebrew", "Israel"',
	"ja":							'"ja", "Japanese"',
	"ja-jp":						'"ja-jp", "Japanese", "Japan"',
	"ja-pw":						'"ja-pw", "Japanese", "Palau"',
	"ja-jp":						'"ja-jp", "Japanese", "Japan"',
	"ja-jp-jp-u-ca-japanese":		'"ja-jp-jp-u-ca-japanese", "Japanese", "Japan,JP"',
	"ka-ge":						'"ka-ge", "Georgian", "Georgia"',
	"kk-kz":						'"kk-kz", "Kazakh", "Kazakhstan"',
	"km-kh":						'"km-kh", "Khmer", "Cambodia"',
	"kn-in":						'"kn-in", "Kannada", "India"',
	"ko":							'"ko", "Korean"',
	"ko-kp":						'"ko-kp", "Korean", "DPRK"',
	"ko-kr":						'"ko-kr", "Korean", "South Korea"',
	"kok-in":						'"kok-in", "Konkani", "India"',
	"ku-tr":						'"ku-tr", "Kurdish", "Turkey"',
	"ky-kg":						'"ky-kg", "Kyrgyz", "Kyrgyzstan"',
	"la-va":						'"la-va", "Latin", "Vatican City"',
	"lo-la":						'"lo-la", "Lao", "Laos"',
	"lt":							'"lt", "Lithuanian"',
	"lt-lt":						'"lt-lt", "Lithuanian", "Lithuania"',
	"lv":							'"lv", "Latvian"',
	"lv-lv":						'"lv-lv", "Latvian", "Latvia"',
	"mi-nz":						'"mi-nz", "Maori", "New Zealand"',
	"mk":							'"mk", "Macedonian"',
	"mk-mk":						'"mk-mk", "Macedonian", "Macedonia"',
	"ml-in":						'"ml-in", "Malayalam", "India"',
	"mn-mn":						'"mn-mn", "Mongolian", "Mongolia"',
	"mr-in":						'"mr-in", "Marathi", "India"',
	"ms":							'"ms", "Malay"',
	"ms-bn":						'"ms-bn", "Malay", "Brunei"',
	"ms-id":						'"ms-id", "Malay", "Indonesia"',
	"ms-my":						'"ms-my", "Malay", "Malaysia"',
	"ms-sg":						'"ms-sg", "Malay", "Singapore"',
	"ms-bn":						'"ms-bn", "Malay", "Brunei Darussalam"',
	"ms-my":						'"ms-my", "Malay", "Malaysia"',
	"mt":							'"mt", "Maltese"',
	"mt-mt":						'"mt-mt", "Maltese", "Malta"',
	"nb-no":						'"nb-no", "Norwegian Bokmål", "Norway"',
	"ne-np":						'"ne-np", "Nepali", "Nepal"',
	"nl":							'"nl", "Dutch"',
	"nl-an":						'"nl-an", "Dutch", "Netherlands Antilles"',
	"nl-aw":						'"nl-aw", "Dutch", "Aruba"',
	"nl-be":						'"nl-be", "Dutch", "Belgium"',
	"nl-cw":						'"nl-cw", "Dutch", "Curaçao"',
	"nl-nl":						'"nl-nl", "Dutch", "Netherlands"',
	"nl-sr":						'"nl-sr", "Dutch", "Suriname"',
	"nl-sx":						'"nl-sx", "Dutch", "Sint Maarten (Dutch part)"',
	"nl-be":						'"nl-be", "Dutch", "Belgium"',
	"nl-nl":						'"nl-nl", "Dutch", "Netherlands"',
	"nn-no":						'"nn-no", "Norwegian Nynorsk", "Norway"',
	"no":							'"no", "Norwegian"',
	"no-no":						'"no-no", "Norwegian", "Norway"',
	"no-no-ny":						'"no-no-ny", "Norwegian", "Norway,Nynorsk"',
	"ns-za":						'"ns-za", "Northern Sotho", "South Africa"',
	"pa-in":						'"pa-in", "Punjabi", "India"',
	"pl":							'"pl", "Polish"',
	"pl-pl":						'"pl-pl", "Polish", "Poland"',
	"ps-af":						'"ps-af", "Pashto", "Afghanistan"',
	"ps-ar":						'"ps-ar", "Pashto", "Afghanistan"',
	"pt":							'"pt", "Portuguese"',
	"pt-ao":						'"pt-ao", "Portuguese", "Angola"',
	"pt-br":						'"pt-br", "Portuguese", "Brazil"',
	"pt-cv":						'"pt-cv", "Portuguese", "Cape Verde"',
	"pt-gq":						'"pt-gq", "Portuguese", "Equatorial Guinea"',
	"pt-gw":						'"pt-gw", "Portuguese", "Guinea-Bissau"',
	"pt-mo":						'"pt-mo", "Portuguese", "Macao"',
	"pt-mz":						'"pt-mz", "Portuguese", "Mozambique"',
	"pt-pt":						'"pt-pt", "Portuguese", "Portugal"',
	"pt-st":						'"pt-st", "Portuguese", "São Tomé and Principe"',
	"pt-tl":						'"pt-tl", "Portuguese", "Timor-Leste"',
	"pt-br":						'"pt-br", "Portuguese", "Brazil"',
	"pt-pt":						'"pt-pt", "Portuguese", "Portugal"',
	"qu-bo":						'"qu-bo", "Quechua", "Bolivia"',
	"qu-ec":						'"qu-ec", "Quechua", "Ecuador"',
	"qu-pe":						'"qu-pe", "Quechua", "Peru"',
	"ro":							'"ro", "Romanian"',
	"ro-md":						'"ro-md", "Romanian", "Moldova"',
	"ro-ro":						'"ro-ro", "Romanian", "Romania"',
	"ru":							'"ru", "Russian"',
	"ru-by":						'"ru-by", "Russian", "Belarus"',
	"ru-kg":						'"ru-kg", "Russian", "Kyrgyz Republic"',
	"ru-kz":						'"ru-kz", "Russian", "Kazakhstan"',
	"ru-ru":						'"ru-ru", "Russian", "Russia"',
	"ru-tj":						'"ru-tj", "Russian", "Tajikistan"',
	"ru-ru":						'"ru-ru", "Russian", "Russia"',
	"sa-in":						'"sa-in", "Sanskrit", "India"',
	"se-fi":						'"se-fi", "Sami", "Inari Finland"',
	"se-no":						'"se-no", "Sami", "Southern Norway"',
	"se-se":						'"se-se", "Sami", "Southern Sweden"',
	"sk":							'"sk", "Slovak"',
	"sk-cz":						'"sk-cz", "Slovak", "Czech Republic"',
	"sk-sk":						'"sk-sk", "Slovak", "Slovakia"',
	"sl":							'"sl", "Slovenian"',
	"sl-si":						'"sl-si", "Slovenian", "Slovenia"',
	"sq":							'"sq", "Albanian"',
	"sq-al":						'"sq-al", "Albanian", "Albania"',
	"sq-ks":						'"sq-ks", "Albanian", "Kosovo"',
	"sq-al":						'"sq-al", "Albanian", "Albania"',
	"sr":							'"sr", "Serbian"',
	"sr--latin":					'"sr--latin", "Serbian Latin"',
	"sr-ba":						'"sr-ba", "Serbian", "Bosnia and Herzegovina"',
	"sr-me":						'"sr-me", "Serbian", "Montenegro"',
	"sr-rs":						'"sr-rs", "Serbian", "Serbia"',
	"sr-ba":						'"sr-ba", "Serbian", "Bosnia and Herzegovina"',
	"sr-ba-latin":					'"sr-ba-latin", "Serbian Latin", "Bosnia and Herzegovina"',
	"sr-cs":						'"sr-cs", "Serbian", "Serbia and Montenegro"',
	"sr-me":						'"sr-me", "Serbian", "Montenegro"',
	"sr-me-latin":					'"sr-me-latin", "Serbian Latin", "Montenegro"',
	"sr-rs":						'"sr-rs", "Serbian", "Serbia"',
	"sr-rs-latin":					'"sr-rs-latin", "Serbian Latin", "Serbia"',
	"sr-sp":						'"sr-sp", "Serbian Cyrillic", "Serbia and Montenegro"',
	"sv":							'"sv", "Swedish"',
	"sv-fi":						'"sv-fi", "Swedish", "Finland"',
	"sv-se":						'"sv-se", "Swedish", "Sweden"',
	"sv-fi":						'"sv-fi", "Swedish", "Finland"',
	"sv-se":						'"sv-se", "Swedish", "Sweden"',
	"sw-ke":						'"sw-ke", "Swahili", "Kenya"',
	"syr-sy":						'"syr-sy", "Syriac", "Syria"',
	"ta-in":						'"ta-in", "Tamil", "India"',
	"te-in":						'"te-in", "Telugu", "India"',
	"th":							'"th", "Thai"',
	"th-th":						'"th-th", "Thai", "Thailand"',
	"th-th-th-u-nu-thai":			'"th-th-th-u-nu-thai", "Thai", "Thailand TH"',
	"tl-ph":						'"tl-ph", "Tagalog", "Philippines"',
	"tn-za":						'"tn-za", "Tswana", "South Africa"',
	"tr":							'"tr", "Turkish"',
	"tr-cy":						'"tr-cy", "Turkish", "Cyprus"',
	"tr-tr":						'"tr-tr", "Turkish", "Turkey"',
	"tt-ru":						'"tt-ru", "Tatar", "Russia"',
	"uk":							'"uk", "Ukrainian"',
	"uk-ua":						'"uk-ua", "Ukrainian", "Ukraine"',
	"ur-pk":						'"ur-pk", "Urdu", "Islamic Republic of Pakistan"',
	"uz-uz":						'"uz-uz", "Uzbek Cyrillic", "Uzbekistan"',
	"vi":							'"vi", "Vietnamese"',
	"vi-vn":						'"vi-vn", "Vietnamese", "Vietnam"',
	"xh-za":						'"xh-za", "Xhosa", "South Africa"',
	"zh":							'"zh", "Chinese"',
	"zh-cn":						'"zh-cn", "Chinese", "China"',
	"zh-hk":						'"zh-hk", "Chinese", "Hong Kong"',
	"zh-mo":						'"zh-mo", "Chinese", "Macao"',
	"zh-sg":						'"zh-sg", "Chinese", "Singapore"',
	"zh-tw":						'"zh-tw", "Chinese", "Taiwan"',
	"zh-cn":						'"zh-cn", "Chinese", "China"',
	"zh-hk":						'"zh-hk", "Chinese", "Hong Kong"',
	"zh-mo":						'"zh-mo", "Chinese", "Macau"',
	"zh-sg":						'"zh-sg", "Chinese", "Singapore"',
	"zh-tw":						'"zh-tw", "Chinese", "Taiwan"',
	"zu-za":						'"zu-za", "Zulu", "South Africa"'
};

// prettier-ignore
const iconsData = {
	"add-cell":					'"center", "excel", "grid", "squares", "table"',
	"add-column":				'"cell", "center", "excel", "grid", "squares", "table", "vertical"',
	"add-row":					'"cell", "squares", "grid", "table", "center", "horizontal", "excel"',
	"adjust":					'"circle", "half", "effects", "contrast", "settings", "editor"',
	"align-center":				'"texts", "lines", "editor"',
	"align-justify":			'"texts", "lines", "editor"',
	"align-left":				'"texts", "lines", "editor"',
	"align-right":				'"texts", "lines", "editor"',
	"analytics":				'"grow", "arrow", "increase", "bar", "data", "expand"',
	"angle-down":				'"arrow", "bottom", "chevron"',
	"angle-down-small":			'"arrow", "bottom", "chevron"',
	"angle-left":				'"arrow", "chevron"',
	"angle-left-small":			'"arrow", "chevron"',
	"angle-right":				'"arrow", "chevron"',
	"angle-right-small":		'"arrow", "chevron"',
	"angle-up":					'"arrow", "top", "chevron"',
	"angle-up-small":			'"arrow", "top", "chevron"',
	"announcement":				'"deprecated"',
	"api-lock":					'"security", "access", "login"',
	"api-web":					'"world", "globe"',
	"archive":					'"box", "stock"',
	"arrow-end":				'"right", "stop", "workflow"',
	"arrow-join":				'"branch", "combine", "down", "incorporate", "merge", "workflow"',
	"arrow-split":				'"down", "fork", "workflow"',
	"arrow-start":				'"right", "workflow"',
	"arrow-up-full":			'"circle", "upload", "workflow"',
	"arrow-xor":				'"down", "join", "workflow"',
	"asterisk":					'"*", "mandatory", "required"',
	"audio":					'"sound", "music", "note"',
	"autosize":					'"arrows", "box", "expand", "fullscreen", "resize"',
	"bars":						'"menu", "lines", "horizontal", "more"',
	"bell-full":				'"alert", "audio", "music", "notification", "sound"',
	"bell-off":					'"alert", "audio", "music", "notification", "sound"',
	"bell-on":					'"alert", "audio", "music", "notification", "sound"',
	"blogs":					'"journal"',
	"bold":						'"editor", "style", "texts"',
	"bolt":						'"bind", "mapping", "thunder", "trigger"',
	"bookmarks":				'"clip", "holder", "marker", "tag"',
	"box-container":			'"chest", "collection", "package"',
	"breadcrumb":				'"navigation", "path", "sequence", "steps"',
	"calendar":					'"agenda", "date", "days", "picker", "time"',
	"camera":					'"image", "photo", "picture"',
	"cards":					'"box", "grid", "rectangle", "squares"',
	"cards-full":				'"box", "grid", "rectangle", "squares"',
	"cards2":					'"box", "squares", "grid", "rectangle"',
	"caret-bottom":				'"arrow", "down"',
	"caret-bottom-l":			'"arrow", "down"',
	"caret-double":				'"arrow", "bottom", "double", "down", "select", "top", "up"',
	"caret-double-l":			'"arrow", "bottom", "double", "down", "select", "top", "up"',
	"caret-left":				'"arrow"',
	"caret-left-l":				'"arrow"',
	"caret-right":				'"arrow"',
	"caret-right-l":			'"arrow"',
	"caret-top":				'"arrow", "up"',
	"caret-top-l":				'"arrow", "up"',
	"categories":				'"product", "tag"',
	"chain-broken":				'"link"',
	"change":					'"arrows", "reload", "repeat", "update"',
	"check":					'"active", "approve", "boolean", "done", "select", "success"',
	"check-circle":				'"active", "approve", "boolean", "done", "select", "success"',
	"check-circle-full":		'"active", "approve", "boolean", "done", "select", "success"',
	"chip":						'"infrastructure", "processor", "technology"',
	"circle":					'"event", "workflow"',
	"code":						'"editor", "script", "text"',
	"cog":						'"change", "settings"',
	"color-picker":				'"bucket", "can", "drop", "hue", "paint"',
	"columns":					'"grid", "table"',
	"community":				'"people", "user"',
	"compress":					'"arrows", "decrease", "reduce", "resize", "small"',
	"control-panel":			'"change", "effects", "settings"',
	"custom-size":				'"arrows", "box", "increase", "sides"',
	"cut":						'"copy", "editor", "paste", "scissors", "text"',
	"change-list":				'"arrows", "box", "move", "update"',
	"date":						'"agenda", "calendar", "day", "picker", "time"',
	"diamond":					'"condition", "if", "gateway", "gem", "workflow"',
	"display":					'"computer", "monitor", "screen"',
	"display-content":			'"computer", "monitor", "screen"',
	"disk":						'"floppy disk", "save"',
	"decimal":					'"0", "number", "zero"',
	"desktop":					'"deprecated"',
	"diagram":					'"map", "schema", "structure"',
	"diary":					'"agenda", "book", "library"',
	"document":					'"file", "text"',
	"documents-and-media":		'"audio", "file", "music", "video"',
	"document-code":			'"file", "script"',
	"document-compressed":		'"file", "rar", "zip"',
	"document-default":			'"file"',
	"document-image":			'"file", "photo", "picture"',
	"document-multimedia":		'"audio", "file", "music", "play", "video"',
	"document-pdf":				'"file", "text"',
	"document-presentation":	'"file", "keynote", "powerpoint", "slide"',
	"document-table":			'"excel", "file", "spreadsheet"',
	"document-text":			'"file", "write"',
	"download":					'"arrow", "down"',
	"drop":						'"color", "hue", "paint", "picker"',
	"dynamic-data-list":		'"action", "active", "change", "grid", "reload", "thunder", "update"',
	"edit-layout":				'"grid", "structure"',
	"effects":					'"dots", "settings"',
	"ellipsis-h":				'"dots", "horizontal", "menu", "more"',
	"ellipsis-v":				'"dots", "menu", "more", "vertical"',
	"embed":					'"deprecated"',
	"envelope-open":			'"email", "message", "postal"',
	"exclamation-circle":		'"alert", "attention", "error", "validation"',
	"exclamation-full":			'"alert", "attention", "error", "validation"',
	"expand":					'"fullscreen", "increase"',
	"file-script":				'"code", "document"',
	"file-template":			'"document", "layout", "page", "structure"',
	"file-xsl":					'"document"',
	"filter":					'"order", "sort"',
	"flag-empty":				'"banner", "report"',
	"flag-full":				'"banner", "report"',
	"folder":					'"box", "container", "file"',
	"format":					'"editor", "paint", "style", "text"',
	"forms":					'"inputs", "layout", "list", "structure"',
	"full-size":				'"expand", "fullscreen", "increase"',
	"geolocation":				'"pin", "place"',
	"globe":					'"earth", "location", "web", "world"',
	"grid":						'"apps", "layout", "rectangle", "squares", "structure"',
	"h1":						'"editor", "heading", "text", "title"',
	"h2":						'"editor", "heading", "text", "title"',
	"hashtag":					'"mark", "number"',
	"heart":					'"emotion", "like", "love"',
	"hidden":					'"eye", "hide", "see", "show", "view"',
	"home":						'"house"',
	"horizontal-scroll":		'"arrows", "expand"',
	"hr":						'"line", "minus", "rectangle"',
	"import-export":			'"deprecated"',
	"indent-less":				'"align", "arrow", "editor", "right", "text"',
	"indent-more":				'"align", "arrow", "editor", "left", "text"',
	"info-book":				'"help", "library"',
	"info-circle-open":			'"help", "validation"',
	"information-live":			'"help", "instruction"',
	"integer":					'"10", "number"',
	"italic":					'"editor", "text"',
	"link":						'"chain", "connection"',
	"list":						'"order", "sequence"',
	"list-ol":					'"number", "order", "sequence"',
	"list-ul":					'"dots", "order", "sequence"',
	"live":						'"circle"',
	"lock":						'"access", "close", "security"',
	"lock-dots":				'"access", "close", "multiple", "security"',
	"logout":					'"log out", "off", "on", "sign", "sign out", "turn"',
	"magic":					'"effects", "select", "wand"',
	"mark-as-answer":			'"lines", "list", "question"',
	"mark-as-question":			'"lines", "list"',
	"merge":					'"branch", "combine", "incorporate"',
	"message":					'"chat", "discussion", "text", "word"',
	"message-boards":			'"chat", "discussion", "text", "word"',
	"mobile-landscape":			'"smartphone", "technology"',
	"mobile-portrait":			'"smartphone", "technology"',
	"moon":						'"light", "night"',
	"move":						'"arrows", "change", "position"',
	"move-folder":				'"change", "file", "location"',
	"myspace":					'"social"',
	"number":					'"counter", "order", "sequence"',
	"order-arrow-down":			'"bottom"',
	"order-arrow-up":			'"top"',
	"organizations":			'"connection", "multiple", "structure"',
	"page":						'"paper"',
	"page-template":			'"layout", "paper"',
	"paperclip":				'"attachment", "editor", "file"',
	"paragraph":				'"text", "editor"',
	"password-policies":		'"access", "login", "log in", "security", "user"',
	"paste":					'"copy", "duplicate"',
	"pause":					'"control", "multimedia", "play"',
	"pencil":					'"draft", "edit", "write"',
	"phone":					'"call", "contact"',
	"picture":					'"image", "photo"',
	"play":						'"control", "multimedia"',
	"plug":						'"connect", "electricity"',
	"plus":						'"add", "create", "new"',
	"plus-squares":				'"add", "create", "multiple", "new"',
	"polls":					'"bars", "results", "statistics"',
	"print":					'"paper"',
	"product-menu":				'"list", "navigation", "sidebar"',
	"product-menu-closed":		'"list", "navigation", "sidebar"',
	"product-menu-open":		'"list", "navigation", "sidebar"',
	"propagation":				'"arrows", "circle", "multiplication", "publish"',
	"pin":						'"fix"',
	"question-circle":			'"help", "mark"',
	"question-circle-full":		'"help", "mark"',
	"quote-left":				'"\\\"", "commas"',
	"quote-right":				'"\\\"", "commas"',
	"radio-button":				'"check", "circle", "off", "on"',
	"redo":						'"action", "arrow", "control", "editor", "right"',
	"reload":					'"change", "circle", "update"',
	"remove-style":				'"editor", "text"',
	"reply":					'"answer", "arrow", "left", "respond"',
	"repository":				'"connection", "folder"',
	"restore":					'"back", "history", "time"',
	"rss":						'"notification", "updates"',
	"rules":					'"condition"',
	"search":					'"inspect", "lens", "zoom"',
	"search-plus":				'"inspect", "lens", "zoom"',
	"select":					'"input", "multiple", "options"',
	"select-from-list":			'"input", "multiple", "options"',
	"separator":				'"divider", "group", "line"',
	"share":					'"social"',
	"sheets":					'"assets", "layers"',
	"shopping-cart":			'"buy", "commerce"',
	"shortcut":					'"external", "window"',
	"simple-circle":			'"dot", "point"',
	"simulation-menu":			'"target"',
	"simulation-menu-closed":	'"target"',
	"simulation-menu-open":		'"target"',
	"site-template":			'"compass", "navigation"',
	"sites":					'"compass", "navigation"',
	"social-facebook":			'"share"',
	"social-linkedin":			'"share"',
	"social-twitter":			'"share"',
	"spacer":					'"margin", "padding"',
	"square":					'"task", "workflow"',
	"staging":					'"changes", "circle", "loading"',
	"star":						'"favorite", "rating"',
	"star-half":				'"favorite", "rating"',
	"star-o":					'"favorite", "rating"',
	"sticky":					'"deprecated"',
	"strikethrough":			'"editor", "style", "text"',
	"subscript":				'"editor", "style", "text"',
	"suitcase":					'"business"',
	"sun":						'"day", "light"',
	"superscript":				'"editor", "style", "text"',
	"table":					'"column", "grid", "row"',
	"table2":					'"column", "grid", "row"',
	"tablet-landscape":			'"device", "mobile"',
	"tablet-portrait":			'"device", "mobile"',
	"tag":						'"category", "product"',
	"test":						'"experiment", "lab"',
	"text":						'"a", "editor"',
	"text-editor":				'"style"',
	"text-l":					'"a", "editor"',
	"thumbs-down-full":			'"dislike", "social"',
	"thumbs-down":				'"dislike", "social"',
	"thumbs-up-full":			'"like", "social"',
	"thumbs-up":				'"like", "social"',
	"time":						'"clock", "day", "hour"',
	"times":					'"cancel", "close", "x"',
	"times-circle":				'"remove", "x"',
	"transform":				'"editor", "image"',
	"trash":					'"bin", "recycle"',
	"twitter":					'"deprecated"',
	"underline":				'"editor", "style", "text"',
	"undo":						'"arrow", "back", "cancel", "control"',
	"unlock":					'"access", "login", "open", "security"',
	"unpin":					'"fix", "move"',
	"upload":					'"arrow", "top", "up"',
	"upload-multiple":			'"arrow", "top", "up"',
	"urgent":					'"deprecated"',
	"user":						'"client", "contact"',
	"user-plus":				'"add", "client", "create", "people"',
	"users":					'"client", "contacts", "people"',
	"vertical-scroll":			'"arrows", "expand"',
	"video":					'"multimedia", "play"',
	"view":						'"eye", "see", "show"',
	"vocabulary":				'"abc", "editor", "order", "text"',
	"warning":					'"alert", "attention", "exclamation", "validation"',
	"warning-full":				'"alert", "attention", "exclamation", "validation"',
	"web-content":				'"assets"',
	"wiki":						'"knowledge"',
	"wiki-page":				'"knowledge"',
	"workflow":					'"function", "progress"'
};
/* eslint-enable */

const iconsPath = path.join('static', 'images', 'icons', 'icons.svg');

const iconsFile = fs.readFileSync(iconsPath, 'utf8');
const symbolsArr = iconsFile.toString().match(/<symbol id="(.*)"\s/g);

function getId(str) {
	str = str.replace('<symbol id="', '');
	str = str.replace('" ', '');

	return str;
}

function buildJson(arr, aliasesMap) {
	let json = '[\n';

	for (let i = 0; i < arr.length; i++) {
		let aliases = aliasesMap[arr[i]];

		json += '    {\n';
		json += `        "name": "${arr[i]}",\n`;
		json += '        "aliases": [';

		if (!aliases) {
			aliases = '""';
		}

		json += `${aliases}]\n`;

		if (i === arr.length - 1) {
			json += '    }\n';
		} else {
			json += '    },\n';
		}
	}

	json += ']';

	return json;
}

const flagsArr = [];
const newIconsArr = [];

for (let i = 0; i < symbolsArr.length; i++) {
	const symbol = getId(symbolsArr[i]);

	if (flagsData[symbol]) {
		flagsArr.push(symbol);
	} else {
		newIconsArr.push(symbol);
	}
}

fs.writeFileSync(
	path.join(__dirname, 'static', 'js', 'flags-autogenerated.json'),
	buildJson(flagsArr, flagsData)
);

fs.writeFileSync(
	path.join(__dirname, 'static', 'js', 'icons-autogenerated.json'),
	buildJson(newIconsArr, iconsData)
);
