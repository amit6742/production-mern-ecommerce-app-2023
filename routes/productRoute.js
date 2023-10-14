import express from "express";
import { isAdmin, requireSighIn } from "./../middlewares/authMiddleware.js";
import {
  brainTreePaymentController,
  braintreeTokenController,
  createProductController,
  deleteProductController,
  getProductController,
  getSingleProductController,
  productCategoryController,
  productCountController,
  productFiltersController,
  productListController,
  productPhotoController,
  realtedProductController,
  searchProductController,
  updateProductController,
} from "../controllers/ProductController.js";
import formidable from "express-formidable";
const router = express.Router();

// routes

router.post(
  "/create-product",
  requireSighIn,
  isAdmin,
  formidable(),
  createProductController
);

router.put(
  "/update-product/:pid",
  requireSighIn,
  isAdmin,
  formidable(),
  updateProductController
);

// get products
router.get("/get-product", getProductController);

// single products

router.get("/get-product/:slug", getSingleProductController);

// get photo

router.get("/product-photo/:pid", productPhotoController);

// delete product
router.delete("/delete-product/:pid", deleteProductController);

// filter product
router.post('/product-filters', productFiltersController)

// product count
router.get('/product-count', productCountController)

// product per-page
router.get('/product-list/:page', productListController)

// search product
router.get('/search/:keyword', searchProductController)

// similar product
router.get('/related-product/:pid/:cid',realtedProductController)

// category wise product

router.get('/product-category/:slug',productCategoryController)

// payment route

// token
router.get('/braintree/token', braintreeTokenController)

// payments
router.post('/braintree/payment', requireSighIn, brainTreePaymentController)


export default router;
