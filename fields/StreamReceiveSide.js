var invert = require('invert-obj');

function StreamReceiveSide (streamReceiveSide) {
  this.message = streamReceiveSide;
}

StreamReceiveSide.prototype.value = function () {
  return this.message;
};

StreamReceiveSide.Tag = '40053';

StreamReceiveSide.Type = 'INT';

module.exports = StreamReceiveSide;