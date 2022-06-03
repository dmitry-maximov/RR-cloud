const Router = require("express");
const userController = require("../controllers/userController");
const router = new Router();
const { body } = require("express-validator");
const authMiddleware = require("../middlewares/authMiddleware");

router.post(
  "/registration",
  body("email").isEmail().normalizeEmail(),
  body("password").isLength({ min: 5 }),
  body("name").trim().escape(),
  body("family").trim().escape(),
  body("login").not().isEmpty().trim().escape(),
  userController.registration
);
router.post(
  "/login",
  body("email").isEmail(),
  body("password").isLength({ min: 5 }),
  userController.login
);
router.post("/logout", userController.logout);

router.get("/activate/:link", userController.activate); // активация акк по ссылке
router.get("/refresh", userController.refresh); // перезапись, отправляем refresh получаем access и refresh tokens
router.put("", authMiddleware, userController.update);

module.exports = router;
