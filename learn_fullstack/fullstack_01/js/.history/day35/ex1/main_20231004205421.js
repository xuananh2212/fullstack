import { config } from "./config.js";
import { clinet } from "./client.js";
const { SEVER_API } = config;
console.log(SEVER_API);

const getPosts = async () => {
  const { response, data } = await clinet.get(`/posts`);
  console.log(response);
  console.log(data);
};

getPosts();
