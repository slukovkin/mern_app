import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    const salt = bcrypt.genSaltSync(10);
    const passwordHash = bcrypt.hashSync(password, salt);

    const newUser = await User.create({ email: email, password: passwordHash });
    res.json(newUser);
  } else {
    res.json({
      message: "Ошибка при создании пользователя",
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    
    if (!user) {
      return res.json({
        message: "Пользователь не найден",
      });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.json({
        message: "Доступ закрыт",
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
      { expiresIn: "30d" }
    );

    res.json({
      token,
      user,
      message: "Вы авторизованы",
    });
  } catch (error) {
    res.json({
      message: "Ошибка авторизации",
    });
  }
};

export const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.userId);

    if (!user) {
      return res.json({
        message: "Пользователь не найден",
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
      { expiresIn: "30d" }
    );

    res.json({
      user,
      token,
    });
  } catch (error) {
    res.json({
      message: "Ошибка авторизации",
    });
  }
};
