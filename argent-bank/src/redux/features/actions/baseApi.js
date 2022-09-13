import axios from "axios";
const Api_Url = process.env.REACT_APP_Base_Url_Server;

const instance = axios.create({
  baseURL: Api_Url,
});

export default instance;
