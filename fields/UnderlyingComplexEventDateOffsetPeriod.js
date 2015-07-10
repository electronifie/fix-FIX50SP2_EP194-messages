var invert = require('invert-obj');

function UnderlyingComplexEventDateOffsetPeriod (underlyingComplexEventDateOffsetPeriod) {
  this.message = underlyingComplexEventDateOffsetPeriod;
}

UnderlyingComplexEventDateOffsetPeriod.prototype.value = function () {
  return this.message;
};

UnderlyingComplexEventDateOffsetPeriod.Tag = '41741';

UnderlyingComplexEventDateOffsetPeriod.Type = 'INT';

module.exports = UnderlyingComplexEventDateOffsetPeriod;