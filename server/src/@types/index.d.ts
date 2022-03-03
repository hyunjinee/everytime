export {};

declare global {
  namespace Express {
    interface Request {
      user?: import("../models/user").default;
    }
  }
}
// https://blog.doitreviews.com/development/2020-03-26-extend-express-request-type-in-typescript/
// export {} 가 external module로 만들어주는 역할을 합니다.
// global을 사용할 경우 User를 import 할 수 없게된다. 이럴때는 interface안에서 바로 import
// 하는 방식을 사용합니다.
