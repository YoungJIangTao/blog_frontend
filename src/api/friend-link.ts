import { baseUrl } from "./base";

export const getAllFriendLinks = async () => {
  const response = await fetch(`${baseUrl}/friend_link/all`);
  return await response.json();
};

interface IDeletedFriendLink {
  id: string;
}

export const deleteFriendLinkById = async ({ id }: IDeletedFriendLink) => {
  const response = await fetch(`${baseUrl}/friend_link/${id}`, {
    method: "DELETE",
  });

  return await response.json();
};
