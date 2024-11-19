import { API_URL, TOKEN_STORAGE_KEY } from "../config/config";

const RecipeService = {
  async getRecipeByRecipeId(recipeId) {
    const response = await fetch(`${API_URL}/api/recipe/${recipeId}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    return [response, data];
  },
  async getWithPaginate({ page, limit }) {
    const token = localStorage.getItem(TOKEN_STORAGE_KEY);

    let headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };

    if (!!token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    const url = new URL(`${API_URL}/api/recipe/list`);

    const params = { page, limit };

    Object.keys(params).forEach((key) => {
      url.searchParams.append(key, params[key]);
    });

    const response = await fetch(url.toString(), {
      method: "GET",
      headers: headers,
    });

    const data = await response.json();

    return [response, data];
  },
};

export default RecipeService;
