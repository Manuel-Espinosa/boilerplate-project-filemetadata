const express = require('express');
const multer = require('multer');
const router = express.Router();
const controllers = require('./controllers');

const upload = multer({ dest: 'uploads/' });

router.post('/api/fileanalyse', upload.single('upfile'), controllers.fileAnalyse);


module.exports = router;
