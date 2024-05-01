import axios from "axios";

export default axios.create({
  baseURL:
    "https://951e-2409-40d1-6-a785-195d-b96b-821b-1779.ngrok-free.app/",
    // "http://localhost:3500",

  headers: { "Content-Type": "application/json" },
});
