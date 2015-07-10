var invert = require('invert-obj');

function UnderlyingStreamPaySide (underlyingStreamPaySide) {
  this.message = underlyingStreamPaySide;
}

UnderlyingStreamPaySide.prototype.value = function () {
  return this.message;
};

UnderlyingStreamPaySide.Tag = '40543';

UnderlyingStreamPaySide.Type = 'INT';

module.exports = UnderlyingStreamPaySide;