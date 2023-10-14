import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
  updateProfileController,
  getOrdersController,
  getAllOrdersController,
  orderStatusController,
} from "../controllers/authController.js";
import { isAdmin, requireSighIn } from "../middlewares/authMiddleware.js";
import { updateProductController } from "../controllers/ProductController.js";
// router object
const router = express.Router();

// routing
// registration || method post
router.post("/register", registerController);
// LOGIN || post
router.post("/login", loginController);

//  forgot password || post
router.post("/forgot-password", forgotPasswordController);

// test route
router.get("/test", requireSighIn, isAdmin, testController);

// protected user  route auth

router.get("/user-auth", requireSighIn, (req, res) => {
  res.status(200).send({ ok: true });
});

// protected Admin  route auth
router.get("/admin-auth", requireSighIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

// update  profile

router.put("/profile", requireSighIn, updateProfileController);

// order
router.get("/orders", requireSighIn, getOrdersController);

//  all order
router.get("/all-orders", requireSighIn, isAdmin, getAllOrdersController);

// order status update
router.put(
  "/order-status/:orderId",
  requireSighIn,
  isAdmin,
  orderStatusController
);

export default router;
