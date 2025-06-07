const api = {
  //api de user
  createUser: "http://localhost:3000/zapateria/users/createUser",
  getUser: "http://localhost:3000/zapateria/users/getUser",
  deleteUser: "http://localhost:3000/zapateria/users/deleteUser",
  updateUser: "http://localhost:3000/zapateria/users/updateUser",

  //api de login
  loginUser: "http://localhost:3000/zapateria/login/loginuser",

  //api de comentarios
  createComments: "http://localhost:3000/zapateria/comments/createComments",
  getComments: "http://localhost:3000/zapateria/comments/getComments",

  //api cartera
  createWallet: "http://localhost:3000/zapateria/wallet/createWallet",
  getWalletByID: "http://localhost:3000/zapateria/wallet/getWalletByID",
  getUpdateWallet: "http://localhost:3000/zapateria/wallet/updateWallet",

  //api product
  createProduct: "http://localhost:3000/zapateria/product/createProduct",
  getAllProduct: "http://localhost:3000/zapateria/product/getProduct",
};

export default api;
