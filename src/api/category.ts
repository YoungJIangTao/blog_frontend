import { baseUrl } from "./base";

export const getAllCategories = async () => {
  const response = await fetch(`${baseUrl}/category/all`);
  return await response.json();
};

interface IGetCategory {
  id: string;
}

export const geCategoryById = async ({ id }: IGetCategory) => {
  const response = await fetch(`${baseUrl}/category/${id}`);
  return await response.json();
};


interface IDeletedCategory {
  id: string;
}

export const deleteCategoryById = async ({ id }: IDeletedCategory) => {
  const response = await fetch(`${baseUrl}/category/${id}`, {
    method: "DELETE",
  });
  return await response.json();
};

interface IModifyCategory {
  id: string;
  name: string;
  createAt: string;
}

export const modifyCategoryById = async (data: IModifyCategory) => {
  const response = await fetch(`${baseUrl}/category/modify`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return await response.json();
};

interface IAddCategory {
  id: string;
  name: string;
}

export const addCategory = async (data: IAddCategory) => {
  const response = await fetch(`${baseUrl}/category/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return await response.json();
};
