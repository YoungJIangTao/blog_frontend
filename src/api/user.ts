import { baseUrl } from "./base";

export const getAllUsers = async () => {
    const response = await fetch(`${baseUrl}/admin/user/all`);
    return await response.json();
}


export const getUserById = async ({ id }: any) => {
    const response = await fetch(`${baseUrl}/admin/user/all`);
    const data = await response.json();
    const user = data.data.filter((d: any) => d.id == id)
    return user[0];
}


interface IAddUser {
    id: string;
    password: string;
    username: string;
}

export const addUser = async (data: IAddUser) => {
    const response = await fetch(`${baseUrl}/admin/user/add`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    return await response.json();
};

interface IModifyUser {
    id: string;
    password: string;
    username: string;
    createTime: string;
}

export const modifyUser = async (data: IModifyUser) => {
    const response = await fetch(`${baseUrl}/admin/user/modify`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    return await response.json();
};


interface IDeletedUser {
    id: string;
}

export const deleteUserById = async ({ id }: IDeletedUser) => {
    const response = await fetch(`${baseUrl}/admin/user/${id}`, {
        method: "DELETE",
    });

    return await response.json();
};
