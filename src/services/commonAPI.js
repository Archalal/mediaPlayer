import axios from "axios";
import baseURL from "./baseURL";


const commonAPI = async (httpMethod, endpoints, requestBody) => {
  const requestedConfig = {
    method: httpMethod,
    url: baseURL + endpoints,
    data: requestBody
  };
  return await axios(requestedConfig).
  then((res)=>{
   
    
    return res
  })
  .catch((err)=>{
    
    return err
  })
};
export default commonAPI