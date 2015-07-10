var invert = require('invert-obj');

function UnderlyingComplexEventDateAdjusted (underlyingComplexEventDateAdjusted) {
  this.message = underlyingComplexEventDateAdjusted;
}

UnderlyingComplexEventDateAdjusted.prototype.value = function () {
  return this.message;
};

UnderlyingComplexEventDateAdjusted.Tag = '41745';

UnderlyingComplexEventDateAdjusted.Type = 'LOCALMKTDATE';

module.exports = UnderlyingComplexEventDateAdjusted;