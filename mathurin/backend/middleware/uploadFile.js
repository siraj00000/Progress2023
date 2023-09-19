const multer = require('multer')

const upload = multer({
    dest: './uploads/',
    limits: {
        files: 1 // limit to one file
    }
});

module.exports = upload