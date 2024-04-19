// định nghĩa các phương thức call Api.
import { config } from "./config.js";
const { SERVER_API } = config;
export const clinet = {
  serverApi: SERVER_API,
  setUrl: function (url) {
    this.serverApi = url;
  },
  send: async (url, method = "GET", body = null) => {
    url = `${this.serverApi}${url}`;
    const options = {
      method,
      headers: {
        "content-type": "application/json",
      },
    };
    if (body !== null) {
      options.body = JSON.stringify(body);
    }
    const response = await fetch(url, options);
    const data = await response.json();
    return { response, data };
  },
  get: function (url) {
    return this.send(url);
  },
  post: function (url, body = {}) {
    return this.send(url, "POST", body);
  },
  put: function (url, body = {}) {
    return this.send(url, "PUT", body);
  },
  patch: function (url, body = {}) {
    return this.send(url, "PATCH", body);
  },
  delete: function (url) {
    return this.send(url, "DELETE");
  },
};
