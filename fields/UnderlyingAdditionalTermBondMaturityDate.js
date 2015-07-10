var invert = require('invert-obj');

function UnderlyingAdditionalTermBondMaturityDate (underlyingAdditionalTermBondMaturityDate) {
  this.message = underlyingAdditionalTermBondMaturityDate;
}

UnderlyingAdditionalTermBondMaturityDate.prototype.value = function () {
  return this.message;
};

UnderlyingAdditionalTermBondMaturityDate.Tag = '42030';

UnderlyingAdditionalTermBondMaturityDate.Type = 'LOCALMKTDATE';

module.exports = UnderlyingAdditionalTermBondMaturityDate;