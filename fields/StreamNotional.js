var invert = require('invert-obj');

function StreamNotional (streamNotional) {
  this.message = streamNotional;
}

StreamNotional.prototype.value = function () {
  return this.message;
};

StreamNotional.Tag = '40054';

StreamNotional.Type = 'AMT';

module.exports = StreamNotional;