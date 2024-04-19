// định nghĩa các phương thức call Api.
export const clinet = {
  send: async (url, method = "GET", body = null) => {
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
  get:function (url) {
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
  delete: function(url) => {
    return this.send(url, "DELETE");
  },
};
