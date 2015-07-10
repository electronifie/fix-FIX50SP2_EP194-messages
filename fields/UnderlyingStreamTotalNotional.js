var invert = require('invert-obj');

function UnderlyingStreamTotalNotional (underlyingStreamTotalNotional) {
  this.message = underlyingStreamTotalNotional;
}

UnderlyingStreamTotalNotional.prototype.value = function () {
  return this.message;
};

UnderlyingStreamTotalNotional.Tag = '42023';

UnderlyingStreamTotalNotional.Type = 'QTY';

module.exports = UnderlyingStreamTotalNotional;