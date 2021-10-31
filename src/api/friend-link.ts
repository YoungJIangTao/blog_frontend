import { baseUrl } from "./base";

export const getAllFriendLinks = async () => {
  const response = await fetch(`${baseUrl}/friend_link/all`);
  return await response.json();
};

interface IGetFriendLink {
  id: string;
}

export const getFriendLinkById = async ({ id }: IGetFriendLink) => {
  const response = await fetch(`${baseUrl}/friend_link/${id}`);
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

interface IModifyFriendLink {
  id: string;
  url: string;
  name: string;
  createAt: string;
}

export const modifyFriendLinkById = async (data: IModifyFriendLink) => {
  const response = await fetch(`${baseUrl}/friend_link/modify`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return await response.json();
};

interface IAddFriendLink {
  id: string;
  url: string;
  name: string;
}

export const addFriendLink = async (data: IAddFriendLink) => {
  const response = await fetch(`${baseUrl}/friend_link/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return await response.json();
};
