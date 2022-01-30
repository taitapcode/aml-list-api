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
    const reqData = req.body;
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
    const updateData = await DataModel.findOneAndUpdate({ _id: reqData._id }, reqData, {
      new: true,
    });

    res.status(200).json(updateData);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

export const deleteData = async (req, res) => {
  try {
    const reqId = req.body._id;
    const deleteData = await DataModel.findOneAndDelete({ _id: reqId }, { new: true });

    res.status(200).send(deleteData);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};
