import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user) {
    return res.json({
      message: "Пользователь уже существует",
    });
  }

  const salt = bcrypt.genSaltSync(10);
  const passwordHash = bcrypt.hashSync(password, salt);

  await User.create({ email: email, password: passwordHash });
  res.json({
    message: "Пользователь успешно создан",
  });
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
        message: "Доступ запрещен",
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
      message: "Вы авторизированны",
    });
  } catch (error) {
    res.json({
      message: "Доступ запрещен",
    });
  }
};

export const getme = async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    if (!user) {
      res.json({
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
      user,
      token,
    });
  } catch (error) {
    res.json({
      message: "Доступ закрыт",
    });
  }
};
