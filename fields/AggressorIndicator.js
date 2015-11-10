var invert = require('invert-obj');

function AggressorIndicator (aggressorIndicator) {
  this.message = aggressorIndicator;
}

AggressorIndicator.prototype.value = function () {
  return this.message;
};


AggressorIndicator.Keys = {
  'ORDER_INITIATOR_IS_AGGRESSOR': 'Y',
  'ORDER_INITIATOR_IS_PASSIVE': 'N',
};

AggressorIndicator.Tag = '1057';

AggressorIndicator.Type = 'BOOLEAN';

AggressorIndicator.Values = invert(AggressorIndicator.Keys);

module.exports = AggressorIndicator;