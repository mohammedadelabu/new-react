import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYjk5Y2FlNGU1NDU5YjdiMTY5MWIzMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzOTkxNjMyMiwiZXhwIjoxNjQwMTc1NTIyfQ.5rJ9PZOkNPKJx8Xnu3F0TDwREcMMjJXl1x5nMHY2PKI";
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

// const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
