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
};
