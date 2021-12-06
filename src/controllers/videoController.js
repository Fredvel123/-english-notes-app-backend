const Videos = require('../models/videosSchema');

const createNewVideo = async (req, res) => {
  const video = new Videos(req.body);
  const newVideo = await video.save()
  res.json(newVideo);
}

const getAllVideos = async (req, res) => {
  const allVideos = await Videos.find();
  res.json(allVideos);
}

const getVideoById = async (req, res) => {
  const {id} = req.params;
  const video = await Videos.findById(id);
  res.json(video);
}

const removeVideoById = async (req, res) => {
  const {id} = req.params;
  const video = await Videos.findByIdAndDelete(id);
  res.json(video);
}

const updateVideoById = async (req, res) => {
  const {id} = req.params;
  const video = await Videos.findByIdAndUpdate(id, req.body);
  res.json(video);
}


module.exports = {
  createNewVideo,
  getAllVideos,
  updateVideoById,
  removeVideoById,
  getVideoById
}