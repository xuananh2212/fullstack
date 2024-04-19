import { config } from "./config.js";
import { clinet } from "./client.js";
const { SEVER_API } = config;
console.log(SEVER_API);

const getPosrs = async () => {
  const { response, data } = await clinet.get(`${SEVER_API}/posts`);
  console.log(response);
  console.log(data);
};

getPosrs();
