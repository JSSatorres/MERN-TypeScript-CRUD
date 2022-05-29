import {  Router} from "express";

const videoRouter = Router();

videoRouter.get('/videos', (req, res) => {
    res.json({"videos":"hii"})
})

export default videoRouter;
