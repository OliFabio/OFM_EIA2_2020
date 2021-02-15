"use strict";
var firework;
(function (firework) {
    class Client {
        // tslint:disable-next-line: no-empty
        constructor() {
            this.apiUrl = firework.herokuUrl;
        }
        async getAllRockets() {
            let settings = this.getHeaderSettings();
            try {
                const fetchResponse = await fetch(this.apiUrl + "rockets", settings);
                const data = await fetchResponse.json();
                return data;
            }
            catch (e) {
                throw Error(e);
            }
        }
        async deleteRocket(id) {
            let settings = this.getHeaderSettings("DELETE");
            try {
                const fetchResponse = await fetch(this.apiUrl + "rocket/" + id, settings);
                const data = await fetchResponse.json();
                return data;
            }
            catch (e) {
                throw Error(e);
            }
        }
        async postRocket(rockets) {
            let settings = this.getHeaderSettings("POST");
            try {
                const fetchResponse = await fetch(this.apiUrl + "rockets", {
                    method: "POST",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(rockets)
                });
                const data = await fetchResponse.json();
                return data;
            }
            catch (e) {
                throw Error(e);
            }
        }
        getHeaderSettings(methodType = "GET", body) {
            switch (methodType) {
                case "POST":
                    return {
                        method: methodType,
                        headers: {
                            "Accept": "application/json",
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(body)
                    };
                    break;
                default:
                    return {
                        method: methodType,
                        headers: {
                            "Accept": "application/json",
                            "Content-Type": "application/json"
                        }
                    };
            }
        }
    }
    firework.Client = Client;
})(firework || (firework = {}));
//# sourceMappingURL=api.js.map