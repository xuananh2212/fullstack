//Định nghĩa các phương thức call api
import { config } from "./config.js";
const { SERVER_API } = config;

export const client = {
  serverApi: SERVER_API,

  setUrl: function (url) {
    this.serverApi = url;
  },

  send: async function (url, method = "GET", body = null, token = null) {
    url = `${this.serverApi}${url}`;

    const headers = {
      "Content-Type": "application/json",
    };
    const options = {
      method,
      headers,
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
