import axios from "axios";

export const login = async (
  username: string,
  password: string
): Promise<any> => {
  try {
    const response = await axios.post("http://118.69.196.120:6001/api/login", {
      username,
      password,
    });

    return response.data;
  } catch (error) {
    console.error("Error during login: ", error);
    throw new Error("Failed to login");
  }
};
