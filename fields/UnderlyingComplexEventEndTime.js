var invert = require('invert-obj');

function UnderlyingComplexEventEndTime (underlyingComplexEventEndTime) {
  this.message = underlyingComplexEventEndTime;
}

UnderlyingComplexEventEndTime.prototype.value = function () {
  return this.message;
};

UnderlyingComplexEventEndTime.Tag = '2058';

UnderlyingComplexEventEndTime.Type = 'UTCTIMEONLY';

module.exports = UnderlyingComplexEventEndTime;