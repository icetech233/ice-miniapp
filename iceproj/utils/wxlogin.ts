
export interface LoginData {
  errcode: Number
  openid: String
  session_key: String
  unionid : String
  // 可以根据实际返回结果添加更多字段
}

export interface LoginResponse {
  code : Number
  msg: String // "success"
  data: LoginData
}
 