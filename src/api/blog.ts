import request from "@/utils/request";
enum API {
  BLOGS_URL = "/blog/blogs",
  GET_COMMENT_URL = "/comment",
  POST_COMMENT_URL = "/comment",
  GET_MOMENTS_URL = "",
}
export const getBlog = () => request.get<any, any>(API.BLOGS_URL);

export const POSTComment = (data: any) =>
  request.post<any, any>(API.POST_COMMENT_URL, data);

export const GetComment = (data: any) =>
  request.get<any, any>(API.GET_COMMENT_URL, ...data);
export const getMoments = (id: any) =>
  request.get<any, any>(`${API.GET_COMMENT_URL}/blog?id=${id}`);
