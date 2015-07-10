var invert = require('invert-obj');

function LegAdditionalTermConditionPrecedentBondIndicator (legAdditionalTermConditionPrecedentBondIndicator) {
  this.message = legAdditionalTermConditionPrecedentBondIndicator;
}

LegAdditionalTermConditionPrecedentBondIndicator.prototype.value = function () {
  return this.message;
};

LegAdditionalTermConditionPrecedentBondIndicator.Tag = '41336';

LegAdditionalTermConditionPrecedentBondIndicator.Type = 'BOOLEAN';

module.exports = LegAdditionalTermConditionPrecedentBondIndicator;