import { Router } from "express";
import module01Routes from "../modules/module01/routes";
import module02Routes from "../modules/module02/routes";

const router = Router();

router.use("/module01", module01Routes);
router.use("/module02", module02Routes);

export default router;
