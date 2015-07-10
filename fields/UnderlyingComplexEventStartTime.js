var invert = require('invert-obj');

function UnderlyingComplexEventStartTime (underlyingComplexEventStartTime) {
  this.message = underlyingComplexEventStartTime;
}

UnderlyingComplexEventStartTime.prototype.value = function () {
  return this.message;
};

UnderlyingComplexEventStartTime.Tag = '2057';

UnderlyingComplexEventStartTime.Type = 'UTCTIMEONLY';

module.exports = UnderlyingComplexEventStartTime;