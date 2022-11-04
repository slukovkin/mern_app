import Post from "../models/Post.js";
import User from "../models/User.js";

export const addPost = async (req, res) => {
  const { title, description } = req.body;
  const user = await User.findById(req.userId);
  if (!user) {
    return res.json({
      message: "Создание поста запрещено. Авторизируйтесь пожалуйста",
    });
  }

  const post = await Post.create({
    title: title,
    description: description,
    user: user,
  });
  if (!post) {
    return res.json({
      message: "Ошибка создания поста",
    });
  }
  res.json({
    message: "Пост успешно создан",
  });
};

export const updatePost = async (req, res) => {};

export const getPost = async (req, res) => {
  const { title, description } = req.body;
  const post = await Post.findOne({ title });

  if (!post) {
    return res.json({
      message: "Пост не найден",
    });
  }
  const user = post.user

  res.json({
    title,
    description,
    user,
    message: "Пост найден",
  });
};

export const getAllPosts = async (req, res) => {};

export const deletePost = async (req, res) => {};
