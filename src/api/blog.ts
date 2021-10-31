import { baseUrl } from "./base";

export const getAllArticles = async () => {
  const response = await fetch(`${baseUrl}/article/all`);
  return await response.json();
};

interface IGetArticle {
  id: string;
}

export const getArticleById = async ({ id }: IGetArticle) => {
  const response = await fetch(`${baseUrl}/article/${id}`);
  return await response.json();
};

interface IDeletedArticle {
  id: string;
}

export const deleteArticleById = async ({ id }: IDeletedArticle) => {
  const response = await fetch(`${baseUrl}/article/${id}`, {
    method: "DELETE",
  });

  return await response.json();
};

interface AddArticle {
  content: string;
  title: string;
  introduce: string;
}

export const addArticle = async ({ content, title, introduce }: AddArticle) => {
  const response = await fetch(`${baseUrl}/article/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      introduce,
      content,
      title,
    }),
  });

  return await response.json();
};
