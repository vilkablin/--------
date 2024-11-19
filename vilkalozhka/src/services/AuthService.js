import { API_URL } from "../config/config";

const AuthService = {
  async signup(data) {
    const response = await fetch(`${API_URL}/api/auth/signup`, {
      method: "POST",
      headers: {
        "Accept": 'application/json',
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();

    return [response, responseData];
  },
  
  async signin(data) {
    const response = await fetch(`${API_URL}/api/auth/signin`, {
      method: "POST",
      headers: {
        "Accept": 'application/json',
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();

    return [response, responseData];
  },

  async logout(data) {
    const response = await fetch(`${API_URL}/api/auth/logout`,{
      method: "DELETE",
      headers:{
        "Authorization": `${data.token}`,
      },
    });

    const responseData = await response.json();

    return [response, responseData];
  }
};

export default AuthService;
