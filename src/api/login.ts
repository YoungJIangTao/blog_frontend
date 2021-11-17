import { baseUrl } from "./base";

interface ILogin {
  username: string;
  password: string;
}

// 这是一个意外, login是get请求. 写后端时写手抖了........懒得改了
export const login = async ({ username, password }: ILogin) => {
  const response = await fetch(
    `${baseUrl}/login?username=${username}&password=${password}`
  );
  return await response.json();
};

export const logout = async () => {
  const response = await fetch(`${baseUrl}/logout`);
  return await response.json();
};
