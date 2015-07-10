var invert = require('invert-obj');

function ProvisionDateAdjusted (provisionDateAdjusted) {
  this.message = provisionDateAdjusted;
}

ProvisionDateAdjusted.prototype.value = function () {
  return this.message;
};

ProvisionDateAdjusted.Tag = '40095';

ProvisionDateAdjusted.Type = 'LOCALMKTDATE';

module.exports = ProvisionDateAdjusted;