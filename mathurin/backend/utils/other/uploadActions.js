const fs = require('fs');

const removeTmp = (path) => {
    fs.unlinkSync(path);
};

const validateMimeType = (fileName) => {
    const allowedFileTypes = ['image/jpeg', 'image/png', 'image/svg'];
    if (allowedFileTypes.includes(fileName)) {
        return true;
    }

    return false;
};

module.exports = {
    removeTmp,
    validateMimeType
};