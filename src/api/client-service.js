import axios from "axios";

export function getUsers() {
  return axios.get("http://localhost:3000/users", {
    headers: { "Access-Control-Allow-Origin": "*" },
  });
}
