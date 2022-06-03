const Router = require("express");
const router = new Router();
const userRouter = require("./userRouter");
const fileRouter = require("./fileRouter");
const diskRouter = require("./diskRouter");

router.use("/auth", userRouter);
router.use("/files", fileRouter);
router.use("/disk", diskRouter);

module.exports = router;
