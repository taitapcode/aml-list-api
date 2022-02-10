import DataModel from '../models/data.js';

export const getAll = async (req, res) => {
  try {
    const data = await DataModel.find();
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

export const addNew = async (req, res) => {
  try {
    const reqData = {
      name: req.body.name.trim(),
      link: req.body.link,
      imageURL: req.body.imageURL,
      type: req.body.type,
      status: req.body.status,
    };
    const newData = new DataModel(reqData);
    await newData.save();

    res.status(201).json(newData);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

export const updateData = async (req, res) => {
  try {
    const reqData = req.body;
    await DataModel.updateOne({ _id: reqData._id }, reqData);

    res.status(204).send();
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

export const deleteData = async (req, res) => {
  try {
    const reqId = req.body._id;
    await DataModel.deleteOne({ _id: reqId });

    res.status(204).send();
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};
