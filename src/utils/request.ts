import axios from "axios";
const request = axios.create({
  //基础路径URL配置
  baseURL: `${process.env.NEXT_PUBLIC_API}`,
  //五秒未响应提示
  timeout: 5000,
});
export default request;
