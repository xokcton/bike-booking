const Bicycle = require('../models/bicycle');

exports.getAll = async (_, res) => {
  try {
    const boards = await Bicycle.find().sort('-created_at');
    res.status(200).json(boards);
  } catch (error) {
    res.status(500).json(err);
  }
};

exports.create = async (req, res) => {
  try {
    const { name, type, color, wheel_size, price, description } = req.body;
    const bicycle = await Bicycle.create({
      name,
      type,
      color,
      wheel_size,
      price,
      description,
    });

    res.status(201).json(bicycle);
  } catch (error) {
    res.status(500).json(err);
  }
};

exports.update = async (req, res) => {
  try {
    const { bicycleId } = req.params;
    const { status } = req.body;

    const currentBicycle = await Bicycle.findById(bicycleId);

    if (!currentBicycle) return res.status(404).json('Bicycle not found');

    const bicycle = await Bicycle.findByIdAndUpdate(bicycleId, { $set: { status } });

    res.status(200).json(bicycle);
  } catch (error) {
    res.status(500).json(err);
  }
};

exports.delete = async (req, res) => {
  try {
    const { bicycleId } = req.params;
    const currentBicycle = await Bicycle.findById(bicycleId);

    await Bicycle.deleteOne({ _id: currentBicycle.id });

    res.status(200).json('deleted');
  } catch (error) {
    res.status(500).json(err);
  }
};
