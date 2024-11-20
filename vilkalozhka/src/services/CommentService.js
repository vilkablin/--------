import { API_URL, TOKEN_STORAGE_KEY } from "../config/config";

const CommentService = {
  async getCommentsByRecipe(id) {
    const response = await fetch(`${API_URL}/api/comments/recipe/${id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          localStorage.getItem(TOKEN_STORAGE_KEY) ?? ""
        }`,
      },
    });

    const data = await response.json();

    return [response, data];
  },

  async createComment({ recipeId, text }) {
    const token = localStorage.getItem(TOKEN_STORAGE_KEY) ?? "";

    const response = await fetch(`${API_URL}/api/comments/create`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        comment: text,
        recipe_id: Number(recipeId),
      }),
    });

    const data = await response.json();

    return [response, data];
  },

  async deleteComment(id) {
    const token = localStorage.getItem(TOKEN_STORAGE_KEY) ?? "";

    const response = await fetch(`${API_URL}/api/comments/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    return [response, data];
  },
};

export default CommentService;
