import axios from "axios";
import { errorMessage } from "./notifications";
// axios.defaults.baseURL = 'https://64651a5b228bd07b35426720.mockapi.io';
axios.defaults.baseURL = "http://localhost:3000";

export const fetchDishes = async (page, shop) => {
  try {
    const response = await axios.get(`/${shop}?page=${page}`);
    return response.data;

    // console.log(response.data);
  } catch (error) {
    errorMessage("Something wrong. Try again.");
    throw new Error("Something wrong. Try again.");
  }
};

export const addOrder = async (order) => {
  try {
    const response = await axios.post(`/user`, order);
    return response.data;

    // console.log(response.data);
  } catch (error) {
    errorMessage("Something wrong. Try again.");
    throw new Error("Something wrong. Try again.");
  }
};
