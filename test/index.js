const isRequire = require('../index');
const path = require('path')
const assert = require('assert');

const ists = () => {
    return !! (require.extensions && require.extensions['.ts'])
}

describe(`${(ists() ? 'typescript' : 'node')} env test`, function() {
    it('js file is ok', function() {
        assert.deepEqual(isRequire(path.resolve(__dirname, './fixture/china')), true)

    });
    it('directory index file is ok', function() {
        assert.deepEqual(isRequire(path.resolve(__dirname, './fixture/chinese')), true)
    });

    if (ists()) {
        it('typescript file should be truely', function() {
            assert.deepEqual(isRequire(path.resolve(__dirname, './fixture/zh')), true)
        });
    } else {
        it('typescript file should be falsely', function() {
            assert.deepEqual(isRequire(path.resolve(__dirname, './fixture/zh')), false)
        });
    }
});


