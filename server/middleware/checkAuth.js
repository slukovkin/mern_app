<<<<<<< HEAD
import jwt from "jsonwebtoken";

export const checkAuth = async (req, res, next) => {
  try {
    const token = (req.headers.authorization || "").replace(/Bearer\s?/, "");
    if (token) {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.userId = decoded.id;
      next();
    }
  } catch (error) {
    res.json({
      message: "Авторизируйтесь пожалуйста",
    });
  }
};
=======
import jwt from 'jsonwebtoken'

export const checkAuth = (req, res, next) => {
  const token = (req.headers.authorization || '').replace(/Bearer\s?/, '')

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      
      req.userId = decoded.id

      next()
      
    } catch (error) {
      res.json({
        message: "Доступ закрыт"
      })
    } 
  } else {
    res.json({
      message: "Доступ закрыт!"
    })
  }
}
>>>>>>> 566c155128a27f318737975d1e72d0121c0c9d82
