import User from "../models/User.js";
import bcrypt from "bcrypt";

export const createUser = async (req, res) => {
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

export const getUser = async (req, res) => {
  const email = req.body.email;
  const user = await User.findOne({ email });
  try {
    res.json(user);
  } catch (error) {
    res.json({
      message: "Ошибка запроса пользователя",
    });
  }
};

export const getAllUser = async (req, res) => {
  const user = await User.find(req.body)
  res.json(user)
}

export const deleteUser = async (req, res) => {
  const email = req.body.email;
  const user = await User.findOne({ email });
  if (!user){
    return res.json({
      message: "Ошибка запроса пользователя"
    })
  }
  try {
    await User.deleteOne(user)
    res.json('Пользователь удален')
  } catch (error) {
    res.json({
      message: "Ошибка запроса пользователя",
    });
  }

  
}
