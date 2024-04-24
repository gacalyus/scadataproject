exports.standartRegex = Object.freeze({
    gsm: /^5\d{9}$/,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    iban: /TR[a-zA-Z0-9]{2}\s?\d{4}\s?\d[a-zA-Z0-9]{3}\s?(?:[a-zA-Z0-9]{4}\s?){3}[a-zA-Z0-9]{2}\s?/,
    password:
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?\d)(?=.*?[/!#%*()_+=:;,.?-]).{6,16}$/,
});