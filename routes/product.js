import express from "express";
const router = express.Router();
import {
  getAllProducts,
  getProductById,
  deleteProductById,
  addProducts,
  updateProductById,
} from "../helpers.js";

router.get("/", async (req, res) => {
  const { category, rating } = req.query;

  if (req.query.rating) {
    req.query.rating = +req.query.rating;
  }
  const product = await getAllProducts(req);

  res.send(product);
});

router.post("/", async (req, res) => {
  const newProduct = req.body;

  const result = await addProducts(newProduct);

  res.send(result);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  console.log(req.params, id);
  const product = await getProductById(id);
  // const product=products.find((pd)=>pd.id==id)

  res.send(product);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  const product = await deleteProductById(id);
  res.send(product);
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updateProduct = req.body;
  console.log(updateProduct);
  const result = await updateProductById(id, updateProduct);
  res.send(result);
});

export const productsRouter = router;
