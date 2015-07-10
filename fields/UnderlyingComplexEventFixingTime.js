var invert = require('invert-obj');

function UnderlyingComplexEventFixingTime (underlyingComplexEventFixingTime) {
  this.message = underlyingComplexEventFixingTime;
}

UnderlyingComplexEventFixingTime.prototype.value = function () {
  return this.message;
};

UnderlyingComplexEventFixingTime.Tag = '41746';

UnderlyingComplexEventFixingTime.Type = 'LOCALMKTTIME';

module.exports = UnderlyingComplexEventFixingTime;