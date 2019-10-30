var request = require('request');

const startNoise = (address, port) => {
  function intervalFunc() {
    console.log(`requesting http://${address}:${port}/`);
    request.get(`http://${address}:${port}/`);
  }

  setInterval(intervalFunc, 100);
};

module.exports = {
  startNoise
};
