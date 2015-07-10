var invert = require('invert-obj');

function UnderlyingComplexEventDateUnadjusted (underlyingComplexEventDateUnadjusted) {
  this.message = underlyingComplexEventDateUnadjusted;
}

UnderlyingComplexEventDateUnadjusted.prototype.value = function () {
  return this.message;
};

UnderlyingComplexEventDateUnadjusted.Tag = '41739';

UnderlyingComplexEventDateUnadjusted.Type = 'LOCALMKTDATE';

module.exports = UnderlyingComplexEventDateUnadjusted;