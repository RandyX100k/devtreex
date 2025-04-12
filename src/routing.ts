import { Router } from "express";

const router = Router();


router.get('/',(req,res)=>{
    res.send('desde routing / index')
})


export default router;