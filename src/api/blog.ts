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
  id: string | number | null;
}

export const addArticle = async ({ content, title, introduce, id }: AddArticle, categoryId: any) => {
  const response = await fetch(`${baseUrl}/article/add?categoryId=${categoryId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      introduce,
      content,
      title,
      id
    }),
  });

  return await response.json();
};

interface ModifyArticle {
  content: string;
  title: string;
  introduce: string;
  id: string | number | null;
}

export const modifyArticle = async ({ content, title, introduce, id }: ModifyArticle) => {
  const response = await fetch(`${baseUrl}/article/modify`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      introduce,
      content,
      title,
      id
    }),
  });

  return await response.json();
};


export const getBlogByCategory = async ({ categoryId }: any) => {
  const response = await fetch(`${baseUrl}//blog/article/category/${categoryId}`)
  return await response.json();
}