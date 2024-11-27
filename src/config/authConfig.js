export const MSAL_CONFIG = {
    auth: {
        clientId: "",
        authority: "",
        redirectUrl: ""
    },
    cache: {
        cacheLocation: "localStorage",
        storeAuthStateInCookie: true
    }
};

export const loginRequest = {
    scope: ["api://<API_CLIENT_ID>/<USER_IMPORSONATOR>"]
}