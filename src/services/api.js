import axios from "axios";
import { errorMessage } from "./notifications";

axios.defaults.baseURL = "https://food-delivery-test.onrender.com";

export const fetchDishes = async (page, shop) => {
  try {
    const response = await axios.get(`/${shop}?page=${page}`);
    return response.data;
  } catch (error) {
    errorMessage("Something wrong. Try again.");
    throw new Error("Something wrong. Try again.");
  }
};

export const addOrder = async (order) => {
  try {
    const response = await axios.post(`/user`, order);
    return response.data;
  } catch (error) {
    errorMessage("Something wrong. Try again.");
    throw new Error("Something wrong. Try again.");
  }
};
