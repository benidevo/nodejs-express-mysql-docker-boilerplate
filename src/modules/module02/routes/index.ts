import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello From Module 02");
});

export default router;
