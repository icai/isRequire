function isRequire(m) {
    try {
        require.resolve(m);
        return true;
    }
    catch (e) {
        return false;
    }
}

module.exports = isRequire;

