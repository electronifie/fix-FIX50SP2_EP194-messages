var invert = require('invert-obj');

function UnderlyingProvisionDateUnadjusted (underlyingProvisionDateUnadjusted) {
  this.message = underlyingProvisionDateUnadjusted;
}

UnderlyingProvisionDateUnadjusted.prototype.value = function () {
  return this.message;
};

UnderlyingProvisionDateUnadjusted.Tag = '42151';

UnderlyingProvisionDateUnadjusted.Type = 'LOCALMKTDATE';

module.exports = UnderlyingProvisionDateUnadjusted;