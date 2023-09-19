import Cookies from "js-cookie";

export const updateCookies = (value, cookiesName, key, subKey) => {
    if (value) {
        let storedCookies = JSON.parse(Cookies.get(cookiesName));

        if (subKey) {
            storedCookies[key][subKey] = value;
        } else {
            storedCookies[key] = value;
        }
        
        Cookies.set(cookiesName, JSON.stringify(storedCookies));
    }
};