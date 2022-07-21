
import {saveEmployee,getEmloyee} from "../controler/control.js";
import express from "express";

const router = express.Router();


router.post("/saveEmployee", saveEmployee);
router.get("/getEmployee",getEmloyee);

export default router;