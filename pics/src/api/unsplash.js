import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID pWhH0Hd4LBQ6OKSCrg6KVcQ_9rIgUkaD5tlYYMZBrAc",
  },
});
