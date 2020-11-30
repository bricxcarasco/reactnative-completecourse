import axios from "axios";

import Keys from "../config/keys";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization: `Bearer ${Keys.YELP_API_KEY}`,
  },
});
