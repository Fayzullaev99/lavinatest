import md5 from "md5";
const url = process.env.REACT_APP_API_URL;

// Validation
export const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};
export const isValidName = (name) => name.length > 2


// API Functions
export const ApiFunction = async (method = "GET", path, body = "") => {
    if (path === '/signup') {
        const response = await fetch(`${url}${path}`, { method, body });
        const result = await response.json();
        return result;
    } else {
        const auth = JSON.parse(localStorage.getItem('auth'));
        const sign = md5(`${method}${path}${body}${auth?.data?.secret}`);
        const headers = new Headers({
            "Key": auth?.data?.key,
            "Sign": sign,
            "Content-Type": "application/json"
        });
        const options = { method, headers, redirect: 'follow' };
        if (method === "POST" || method === "PATCH") {
            options.body = body;
        }
        try {
            const response = await fetch(`${url}${path}`, options);
            const result = await response.json();
            return result;
        } catch (error) {
            console.log(error?.message);
        }
    }

}