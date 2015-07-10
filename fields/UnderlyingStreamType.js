var invert = require('invert-obj');

function UnderlyingStreamType (underlyingStreamType) {
  this.message = underlyingStreamType;
}

UnderlyingStreamType.prototype.value = function () {
  return this.message;
};

UnderlyingStreamType.Tag = '40541';

UnderlyingStreamType.Type = 'INT';

module.exports = UnderlyingStreamType;