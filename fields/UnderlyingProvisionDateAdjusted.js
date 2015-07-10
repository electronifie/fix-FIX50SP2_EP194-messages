var invert = require('invert-obj');

function UnderlyingProvisionDateAdjusted (underlyingProvisionDateAdjusted) {
  this.message = underlyingProvisionDateAdjusted;
}

UnderlyingProvisionDateAdjusted.prototype.value = function () {
  return this.message;
};

UnderlyingProvisionDateAdjusted.Tag = '42153';

UnderlyingProvisionDateAdjusted.Type = 'LOCALMKTDATE';

module.exports = UnderlyingProvisionDateAdjusted;