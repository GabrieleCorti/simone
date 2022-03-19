const allLanguageRat = [
  {
    language: "Catalan",
    symbol: "ca",
    text: "rata",
  },
  {
    language: "English",
    symbol: "en",
    text: "rat",
  },
  {
    language: "Czech",
    symbol: "cs",
    text: "krysa",
  },
  {
    language: "Estonian",
    symbol: "et",
    text: "rott",
  },
  {
    language: "German",
    symbol: "de",
    text: "Ratte",
  },
  {
    language: "Lithuanian",
    symbol: "lt",
    text: "žiurkė",
  },
  {
    language: "Norwegian",
    symbol: "no",
    text: "rotte",
  },
  {
    language: "Russian",
    symbol: "ru",
    text: "крыса",
  },
  {
    language: "Spanish",
    symbol: "es",
    text: "rata",
  },
  {
    language: "Telugu",
    symbol: "te",
    text: "ఎలుక",
  },
  {
    language: "Urdu",
    symbol: "ur",
    text: "چوہا",
  },
  {
    language: "Arabic",
    symbol: "ar",
    text: "فأر",
  },
  {
    language: "Chinese Simplified",
    symbol: "zh-cn",
    text: "鼠",
  },
  {
    language: "Danish",
    symbol: "da",
    text: "rotte",
  },
  {
    language: "Filipino",
    symbol: "tl",
    text: "daga",
  },
  {
    language: "Greek",
    symbol: "el",
    text: "αρουραίος",
  },
  {
    language: "Japanese",
    symbol: "ja",
    text: "ねずみ",
  },
  {
    language: "Malay",
    symbol: "ms",
    text: "tikus",
  },
  {
    language: "Polish",
    symbol: "pl",
    text: "szczur",
  },
  {
    language: "Serbian",
    symbol: "sr",
    text: "пацов",
  },
  {
    language: "Swedish",
    symbol: "sv",
    text: "råtta",
  },
  {
    language: "Thai",
    symbol: "th",
    text: "หนู",
  },
  {
    language: "Bengali",
    symbol: "bn",
    text: "ইঁদুর",
  },
  {
    language: "Chinese Traditional",
    symbol: "zh-tw",
    text: "鼠",
  },
  {
    language: "Dutch",
    symbol: "nl",
    text: "Rat",
  },
  {
    language: "Finnish",
    symbol: "fi",
    text: "rotta",
  },
  {
    language: "Hebrew",
    symbol: "iw",
    text: "עכברוש",
  },
  {
    language: "Korean",
    symbol: "ko",
    text: "쥐",
  },
  {
    language: "Malayalam",
    symbol: "ml",
    text: "എലി",
  },
  {
    language: "Portuguese",
    symbol: "pt",
    text: "ratazana",
  },
  {
    language: "Slovak",
    symbol: "sk",
    text: "potkan",
  },
  {
    language: "Tajik",
    symbol: "tg",
    text: "каламуш",
  },
  {
    language: "Turkish",
    symbol: "tr",
    text: "fare",
  },
  {
    language: "Vietnamese",
    symbol: "vi",
    text: "con chuột",
  },
  {
    language: "Bulgarian",
    symbol: "bg",
    text: "плъх",
  },
  {
    language: "Croatian",
    symbol: "hr",
    text: "štakor",
  },
  {
    language: "Esperanto",
    symbol: "eo",
    text: "rato",
  },
  {
    language: "French",
    symbol: "fr",
    text: "rat",
  },
  {
    language: "Indonesian",
    symbol: "id",
    text: "tikus",
  },
  {
    language: "Latvian",
    symbol: "lv",
    text: "žurka",
  },
  {
    language: "Marathi",
    symbol: "mr",
    text: "उंदीर",
  },
  {
    language: "Romanian",
    symbol: "ro",
    text: "şobolan",
  },
  {
    language: "Slovenian",
    symbol: "sl",
    text: "podgana",
  },
  {
    language: "Tamil",
    symbol: "ta",
    text: "எலி",
  },
  {
    language: "Ukrainian",
    symbol: "uk",
    text: "щур",
  },
  {
    language: "Afrikaans",
    symbol: "af",
    text: "rot",
  },
  {
    language: "Azerbaijani",
    symbol: "az",
    text: "siçovul",
  },
  {
    language: "Cebuano",
    symbol: "ceb",
    text: "ilaga",
  },
  {
    language: "Galician",
    symbol: "gl",
    text: "rata",
  },
  {
    language: "Hausa",
    symbol: "ha",
    text: "bera",
  },
  {
    language: "Hungarian",
    symbol: "hu",
    text: "patkány",
  },
  {
    language: "Javanese",
    symbol: "jw",
    text: "tikus",
  },
  {
    language: "Kurdish",
    symbol: "ku",
    text: "cirdon",
  },
  {
    language: "Luxembourgish",
    symbol: "lb",
    text: "rat",
  },
  {
    language: "Maori",
    symbol: "mi",
    text: "kiore",
  },
  {
    language: "Pashto",
    symbol: "ps",
    text: "موږک",
  },
  {
    language: "Sesotho",
    symbol: "st",
    text: "rat",
  },
  {
    language: "Somali",
    symbol: "so",
    text: "jiir",
  },
  {
    language: "Welsh",
    symbol: "cy",
    text: "Llygoden Fawr",
  },
  {
    language: "Zulu",
    symbol: "zu",
    text: "igundane",
  },
  {
    language: "Albanian",
    symbol: "sq",
    text: "miu",
  },
  {
    language: "Basque",
    symbol: "eu",
    text: "arratoia",
  },
  {
    language: "Chichewa",
    symbol: "ny",
    text: "makoswe",
  },
  {
    language: "Georgian",
    symbol: "ka",
    text: "ვირთხა",
  },
  {
    language: "Hawaiian",
    symbol: "haw",
    text: "ʻiole",
  },
  {
    language: "Icelandic",
    symbol: "is",
    text: "rotta",
  },
  {
    language: "Kannada",
    symbol: "kn",
    text: "ಇಲಿ",
  },
  {
    language: "Kyrgyz",
    symbol: "ky",
    text: "келемиш",
  },
  {
    language: "Macedonian",
    symbol: "mk",
    text: "стаорец",
  },
  {
    language: "Mongolian",
    symbol: "mn",
    text: "харх",
  },
  {
    language: "Persian",
    symbol: "fa",
    text: "موش صحرایی",
  },
  {
    language: "Shona",
    symbol: "sn",
    text: "rat",
  },
  {
    language: "Sundanese",
    symbol: "su",
    text: "beurit",
  },
  {
    language: "Xhosa",
    symbol: "xh",
    text: "impuku",
  },
  {
    language: "Amharic",
    symbol: "am",
    text: "አይጥ",
  },
  {
    language: "Belarusian",
    symbol: "be",
    text: "пацук",
  },
  {
    language: "Corsican",
    symbol: "co",
    text: "ratu",
  },
  {
    language: "Gujarati",
    symbol: "gu",
    text: "ઉંદર",
  },
  {
    language: "Hindi",
    symbol: "hi",
    text: "चूहा",
  },
  {
    language: "Igbo",
    symbol: "ig",
    text: "oke",
  },
  {
    language: "Kazakh",
    symbol: "kk",
    text: "егеуқұйрық",
  },
  {
    language: "Lao",
    symbol: "lo",
    text: "ໜູ",
  },
  {
    language: "Malagasy",
    symbol: "mg",
    text: "voalavo",
  },
  {
    language: "Myanmar",
    symbol: "my",
    text: "ကြွက်",
  },
  {
    language: "Samoan",
    symbol: "sm",
    text: "isumu",
  },
  {
    language: "Sindhi",
    symbol: "sd",
    text: "چوڙو",
  },
  {
    language: "Swahili",
    symbol: "sw",
    text: "panya",
  },
  {
    language: "Yiddish",
    symbol: "yi",
    text: "שטשור",
  },
  {
    language: "Armenian",
    symbol: "hy",
    text: "առնետ",
  },
  {
    language: "Bosnian",
    symbol: "bs",
    text: "pacov",
  },
  {
    language: "Frisian",
    symbol: "fy",
    text: "Rôt",
  },
  {
    language: "Haitian Creole",
    symbol: "ht",
    text: "Rat",
  },
  {
    language: "Hmong",
    symbol: "hmn",
    text: "Rat",
  },
  {
    language: "Irish",
    symbol: "ga",
    text: "Rat",
  },
  {
    language: "Khmer",
    symbol: "km",
    text: "កណ្តុរ",
  },
  {
    language: "Latin",
    symbol: "la",
    text: "Rat",
  },
  {
    language: "Maltese",
    symbol: "mt",
    text: "Far",
  },
  {
    language: "Nepali",
    symbol: "ne",
    text: "मुसा",
  },
  {
    language: "Scots Gaelic",
    symbol: "gd",
    text: "Rat",
  },
  {
    language: "Sinhala",
    symbol: "si",
    text: "මීයා",
  },
  {
    language: "Uzbek",
    symbol: "uz",
    text: "Kalamush",
  },
  {
    language: "Yoruba",
    symbol: "yo",
    text: "Eku",
  },
];
//102 lingue
const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const btn = document.getElementById("getRatto");
const textRatto = document.getElementById("ratto");
const linguaRatto = document.getElementById("rattoLingua");

btn.addEventListener("click", () => {
  const oggettRatto =
    allLanguageRat[randomIntFromInterval(0, allLanguageRat.length - 1)];
  textRatto.innerText = "";
  textRatto.innerText = oggettRatto.text;
  linguaRatto.innerText = "";
  linguaRatto.innerText = oggettRatto.language;
});
