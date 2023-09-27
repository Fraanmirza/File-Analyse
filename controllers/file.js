const fileInput = (req, res) => {
  try {
    const { originalname, mimetype, size } = req.file

    res.status(200).json({
      name: originalname,
      type: mimetype,
      size: size,
    })
  } catch (error) {
    console.log(error)
  }
}

module.exports = fileInput
