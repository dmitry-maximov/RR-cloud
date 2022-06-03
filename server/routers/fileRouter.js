const Router = require("express");
const router = new Router();
const authMiddleware = require("../middlewares/authMiddleware");
const fileController = require("../controllers/fileController");

router.post("", authMiddleware, fileController.createDirectory);
router.post("/upload", authMiddleware, fileController.uploadFile);
router.get("", authMiddleware, fileController.getFiles);
router.get("/download", authMiddleware, fileController.downloadFile);
router.get("/search", authMiddleware, fileController.searchFile);
router.delete("/", authMiddleware, fileController.deleteFile);
router.get("/favorit", authMiddleware, fileController.favoritFile);
router.post("/favorit", authMiddleware, fileController.setFavoritFile);

router.get("/basket", authMiddleware, fileController.basketFiles);
router.post("/basket", authMiddleware, fileController.changeBasketFile);
router.delete("/basket", authMiddleware, fileController.deleteBasketFile);

module.exports = router;
