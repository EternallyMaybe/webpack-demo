const fs = require('fs');

function fromJSONFile(filename) {
    return (req, res) => {
        const data = fs.readFileSync(`mocker/json/${filename}.json`).toString();
        const json = JSON.parse(data);
        return res.json(json);
    };
}

const proxy = {
    'GET /api/index': fromJSONFile('index')
}

module.exports = proxy;