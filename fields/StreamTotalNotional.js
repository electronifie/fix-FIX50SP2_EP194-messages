var invert = require('invert-obj');

function StreamTotalNotional (streamTotalNotional) {
  this.message = streamTotalNotional;
}

StreamTotalNotional.prototype.value = function () {
  return this.message;
};

StreamTotalNotional.Tag = '41310';

StreamTotalNotional.Type = 'QTY';

module.exports = StreamTotalNotional;