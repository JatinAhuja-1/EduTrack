import axios from "axios";

export default axios.create({
  baseURL:
    "https://6d0d-2409-40d1-8d-93a3-68d8-a694-3ada-e1ec.ngrok-free.app/",
    // "http://localhost:3500",

  headers: { "Content-Type": "application/json" },
});
