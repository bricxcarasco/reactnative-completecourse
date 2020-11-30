import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer l7tUx78j1nVaY1iP-hrV1j-h-TVMDUVrkxH74CLeVBqnvup34uUGsWu2En5ew-9Fp_ZAyQzG9434yqsWAJXfVU3y1ksOnypYq4i4wiqhz9DXelZltCBX9a4jkFPCX3Yx",
  },
});
