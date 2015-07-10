var invert = require('invert-obj');

function AdditionalTermConditionPrecedentBondIndicator (additionalTermConditionPrecedentBondIndicator) {
  this.message = additionalTermConditionPrecedentBondIndicator;
}

AdditionalTermConditionPrecedentBondIndicator.prototype.value = function () {
  return this.message;
};

AdditionalTermConditionPrecedentBondIndicator.Tag = '40020';

AdditionalTermConditionPrecedentBondIndicator.Type = 'BOOLEAN';

module.exports = AdditionalTermConditionPrecedentBondIndicator;