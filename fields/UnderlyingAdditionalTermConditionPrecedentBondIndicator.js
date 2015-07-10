var invert = require('invert-obj');

function UnderlyingAdditionalTermConditionPrecedentBondIndicator (underlyingAdditionalTermConditionPrecedentBondIndicator) {
  this.message = underlyingAdditionalTermConditionPrecedentBondIndicator;
}

UnderlyingAdditionalTermConditionPrecedentBondIndicator.prototype.value = function () {
  return this.message;
};

UnderlyingAdditionalTermConditionPrecedentBondIndicator.Tag = '42037';

UnderlyingAdditionalTermConditionPrecedentBondIndicator.Type = 'BOOLEAN';

module.exports = UnderlyingAdditionalTermConditionPrecedentBondIndicator;