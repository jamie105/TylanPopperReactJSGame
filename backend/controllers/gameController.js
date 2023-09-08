const Score = require('../models/Score');

exports.getScore = async (req, res) => {
  try {
    const scores = await Score.find().sort({ score: -1 }).limit(10);
    res.json(scores);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateScore = async (req, res) => {
  const { name, score } = req.body;
  const newScore = new Score({ name, score });
  try {
    await newScore.save();
    res.status(201).json(newScore);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
