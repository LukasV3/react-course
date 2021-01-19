import axios from "axios";

const KEY = "AIzaSyDvSPZd_rKBY9iAbz7YFH_SRzL5BR7XBeQ";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
