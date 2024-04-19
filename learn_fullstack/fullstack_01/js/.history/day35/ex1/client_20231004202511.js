// định nghĩa các phương thức call Api.
export const clinet = {
  send: async (url, method = "GET", body = null) => {
    const options = {
      method,
      headers: {
        "content-type": "application/json",
      },
    };
    const response = await fetch(url, {});
  },
};
