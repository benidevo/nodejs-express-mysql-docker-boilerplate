import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.send("Hello From Module 01");
});

export default router