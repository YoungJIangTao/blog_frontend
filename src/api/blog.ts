import { baseUrl } from "./base";

export const getAllArticles = async () => {
  const response = await fetch(`${baseUrl}/article/all`);
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
