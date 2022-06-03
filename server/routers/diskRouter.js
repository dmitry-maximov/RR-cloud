const Router = require("express");
const router = new Router();
const authMiddleware = require("../middlewares/authMiddleware");
const diskController = require("../controllers/diskController");

router.get("", authMiddleware, diskController.getSpace);

module.exports = router;
