const { predictUrl } = require("../services/mlService");

const checkUrl = async (req, res) => {
  try {
    const { url } = req.body;

    const result = await predictUrl(url);

    res.json(result);
  } catch (error) {
    res.status(500).json({
      message: "Error checking URL",
    });
  }
};

module.exports = {
  checkUrl,
};