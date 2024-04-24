

export function date() {

    const d = new Date();
    let day = d.getDay();
    const today = d.toLocaleDateString()
    let currentLang = localStorage.getItem('currentLang');

    let hour = d.getHours();
    let minutes = d.getMinutes();
    const dayStr = () => {
        switch (day) {
            case 1:
                return currentLang === "tr" ? "Pazartesi" : "Monday"
            case 2:
                return currentLang === "tr" ? "Salı" : "Tuesday"
            case 3:
                return currentLang === "tr" ? "Çarşamba" : "Wednesday"
            case 4:
                return currentLang === "tr" ? "Perşembe" : "Thursday"
            case 5:
                return currentLang === "tr" ? "Cuma" : "Friday"
            case 6:
                return currentLang === "tr" ? "Cumartesi" : "Saturday"
            case 7:
                return currentLang === "tr" ? "Pazar" : "Sunday"

            default:
                break;
        }
    }

    return today + ' , ' + hour + ":" + minutes
} 