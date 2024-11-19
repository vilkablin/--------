import { API_URL } from "../config/config";

const UserService = {
  async getUserInfo(token) {
    const response = await fetch(`${API_URL}/api/user/account`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`
      },
    });

    const responseData = await response.json();

    return [response, responseData];
  },
};

export default UserService;
