export const validateMimeType = (fileName) => {
    const allowedFileTypes = ['image/jpeg', 'image/png', 'image/svg', 'image/svg+xml'];
    if (allowedFileTypes.includes(fileName)) {
        return true;
    }
    return false;
};
//# sourceMappingURL=validate_mimetype.utils.js.map