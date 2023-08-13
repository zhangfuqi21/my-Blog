export interface ResponseData {
  code: number;
  message: string;
}
export interface BlogsResponseData extends ResponseData {
  data: {
    list: [];
  };
}
