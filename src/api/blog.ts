import request from "@/utils/request";
import { BlogsResponseData } from "./type";
enum API {
  BLOGS_URL = "/blog/blogs",
}
export const getBlog = () => request.get<any, any>(API.BLOGS_URL);
