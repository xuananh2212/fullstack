import { config } from "./config.js";
import { client } from "./client.js";

const { SERVER_AUTH_API } = config;
console.log(SERVER_AUTH_API);

client.setUrl(SERVER_AUTH_API);
console.log(client);
