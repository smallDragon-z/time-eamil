// 在RESTful API 中，使用HTTP状态码来表示操作的成功与否以及失败的原因是一种标准做法。以下是一些常见的HTTP状态码，它们可用于表示不同的操作结果和错误情况：
// 200 OK：成功。通常用于GET请求，表示资源已被成功检索。
// 201 Created：成功创建。通常用于POST请求，表示资源已被成功创建。
// 204 No Content：成功，但没有响应体。通常用于DELETE请求，表示资源已被成功删除。
// 400 Bad Request：客户端请求错误。表示请求无效或包含无效参数。
// 401 Unauthorized：未经授权。表示需要用户身份验证或授权，但用户没有提供有效的凭据。
// 403 Forbidden：禁止访问。表示请求被服务器理解，但被拒绝执行。
// 404 Not Found：未找到。表示请求的资源不存在。
// 405 Method Not Allowed：方法不允许。表示请求的HTTP方法对指定的资源不适用。
// 409 Conflict：冲突。表示由于请求的状态与服务器上的资源冲突而无法完成请求。
// 422 Unprocessable Entity：请求格式正确，但由于语义错误而无法被服务器所理解。
// 500 Internal Server Error：服务器内部错误。表示服务器在执行请求时遇到了错误。
enum Code {
  success = 200,
  denied = 401,
  error = 500,
}

enum CodeMessage {
  success = '请求成功',
  denied = '未经授权',
  error = '服务器内部错误',
}

// 状态类型 只能是Code中所枚举的状态
type codeType = keyof typeof Code;

export { Code, codeType, CodeMessage };
