var invert = require('invert-obj');

function LegProvisionDateAdjusted (legProvisionDateAdjusted) {
  this.message = legProvisionDateAdjusted;
}

LegProvisionDateAdjusted.prototype.value = function () {
  return this.message;
};

LegProvisionDateAdjusted.Tag = '40453';

LegProvisionDateAdjusted.Type = 'LOCALMKTDATE';

module.exports = LegProvisionDateAdjusted;