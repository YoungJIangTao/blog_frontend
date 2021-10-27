import { baseUrl } from "./base";

export const getAllCategories = async () => {
  const response = await fetch(`${baseUrl}/category/all`);
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
