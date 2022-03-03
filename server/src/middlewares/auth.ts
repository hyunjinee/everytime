import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import User from "../models/user";

const protect = async (req: Request, res: Response, next: NextFunction) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // ! Get token from user
      token = req.headers.authorization.split(" ")[1];
      // ! Verify token
      const decoded: any = jwt.verify(token, process.env.JWT_SECRET as string);
      req.user = await User.findOne({ id: decoded.id });
      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("Not authorized");
    }
  }
  if (!token) {
    res.status(401);
    return res.status(401).json({ error: true, message: "Not authorized" });
  }
};

export default protect;
// export default (req: Request, res: Response, next: NextFunction) => {
//   let token = req.cookies.x_auth;
// User.findByToken(token, (err, user) => {
//   if (err) throw err
//   if (!user)
//     return res.json({
//       isAuth: false,
//       error: true,
//     })

//   req.user = user
//   req.token = token
//   next()
// })
// };
// (req, res, next) => {

//   if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
//     const token = req.headers.authorization.split(' ')[1];

//     const allowAll = true;
//     const allowedOrigins = ['http://localhost:3000', 'http://localhost:4200', 'http://www.resucitoapp.com'];
//     if (allowAll || allowedOrigins.indexOf(req.header('Origin')) > -1) {
//         if (allowAll) {
//           res.setHeader('Access-Control-Allow-Origin', '*');
//         } else {
//           res.setHeader('Access-Control-Allow-Origin', req.header('Origin'));
//         }
//         res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//         res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
//         res.setHeader('Access-Control-Allow-Credentials', true);
//     } else {
//         return res.status(401).json('Origen no permitido');
//     }

//     jwt.verify(token, 'my-secret', (err, payload) => {
//       if (!err) {
//         // confirm identity and check user permissions
//         req.payload = payload;
//         next();
//       } else {
//          return res.status(403).json(err);
//       }
//     });
//   } else {
//     return res.status(401).json('El token de acceso no es válido.');
//   }
// };
