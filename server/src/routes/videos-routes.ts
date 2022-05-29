import {  Router} from "express";
import {getVideos, getVideo, createVideos, deleteVideos,updateVideos} from "../controllers/videos-controllers"

const videoRouter = Router();

videoRouter.get('/videos', getVideos)
videoRouter.get('/videos/:id', getVideo)
videoRouter.post('/videos', createVideos)
videoRouter.delete('/videos/:id', deleteVideos)
videoRouter.patch('/videos/:id', updateVideos)

export default videoRouter;
