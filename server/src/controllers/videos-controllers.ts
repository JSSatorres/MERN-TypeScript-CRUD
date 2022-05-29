import { RequestHandler } from "express";
import Video from "../models/videos-models";
import mongoose from "mongoose";

export const getVideos: RequestHandler = async (req, res, next) => {
  try {
    const videos = await Video.find().lean().exec();
    res.status(200).send({
      data: videos,
    });
  } catch (error) {
    next(error);
  }
};

export const getVideo: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  try {
    const videoToSearch = await Video.find({ _id: id })
      // .populate("songs", { songData: 1, songFile: 1, songImage: 1 })
      .lean()
      .exec();
    res.status(200).send({ videoToSearch });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const createVideos: RequestHandler = async (req, res, next) => {
  try {
    const { title, description, url } = req.body;
    const newVideo = await Video.create({ title, description, url });
    console.log(newVideo);
    res.json("create videos");
  } catch (error) {
    console.log(error);
    next(error);
  }
};
export const deleteVideos: RequestHandler = async (req, res, next) => {
  const { id } = req.params;

  try {
    const gitsRemove = await Video.findByIdAndDelete(id, { new: true })
      .lean()
      .exec();
    res.status(200).send({
      message: "OK delete",
    });
  } catch (err) {
    next(err);
  }
};
export const updateVideos: RequestHandler = async (req, res, next) => {
  console.log("tampoco entra el update");
  const { title, description, url } = req.body;
  const { id } = req.params;
  
  try {
    await Video.findOneAndUpdate(
      { _id: id },
      {
        $set: { title, description, url },
      },
      { new: true }
    );
    res.status(200).send({
      message: "OK update",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
