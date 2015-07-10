var invert = require('invert-obj');

function UnderlyingStreamNotional (underlyingStreamNotional) {
  this.message = underlyingStreamNotional;
}

UnderlyingStreamNotional.prototype.value = function () {
  return this.message;
};

UnderlyingStreamNotional.Tag = '40545';

UnderlyingStreamNotional.Type = 'AMT';

module.exports = UnderlyingStreamNotional;