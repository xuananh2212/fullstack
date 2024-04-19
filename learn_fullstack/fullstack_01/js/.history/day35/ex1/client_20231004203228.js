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
  get: (url) => {
    return this.send(url);
  },
  post: (url, body = {}) => {
    return this.send(url, "POST", body);
  },
  put: (url, body = {}) => {
    return this.send(url, "PUT", body);
  },
  patch: (url, body = {}) => {
    return this.send(url, "PATCH", body);
  },
  delete: (url) => {
    return this.send(url, "DELETE");
  },
};
