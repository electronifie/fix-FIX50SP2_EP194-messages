var invert = require('invert-obj');

function UnderlyingStreamReceiveSide (underlyingStreamReceiveSide) {
  this.message = underlyingStreamReceiveSide;
}

UnderlyingStreamReceiveSide.prototype.value = function () {
  return this.message;
};

UnderlyingStreamReceiveSide.Tag = '40544';

UnderlyingStreamReceiveSide.Type = 'INT';

module.exports = UnderlyingStreamReceiveSide;