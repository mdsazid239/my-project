// import axiosInstance from "./axios";

// export const getProducts = async () => {
//   const res = await axiosInstance.get("/products/");
//   return res.data;
// };

export const getProducts = async () => {
  const res = await axiosInstance.get("/products/");
  return res.data; // check karo ye array hai ya object
};