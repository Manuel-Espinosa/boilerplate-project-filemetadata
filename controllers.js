exports.fileAnalyse = (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }

    const { originalname, mimetype, size } = req.file;

    res.json({
        name: originalname,
        type: mimetype,
        size: size
    });
};
