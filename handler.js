const { startNoise } = require('./noiseGenerator');
var request = require('request');
var sleep = require('system-sleep');

const handle = address => {
  for (let port = 0; port <= 65535; port++) {
    sleep(100);
    request
      .get(`http://${address}:${port}/`)
      .on('response', function(response) {
        console.log(`received response ${response}`);
        startNoise(address, port);
      });
  }
};

module.exports = {
  handle
};
