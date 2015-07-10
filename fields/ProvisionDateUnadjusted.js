var invert = require('invert-obj');

function ProvisionDateUnadjusted (provisionDateUnadjusted) {
  this.message = provisionDateUnadjusted;
}

ProvisionDateUnadjusted.prototype.value = function () {
  return this.message;
};

ProvisionDateUnadjusted.Tag = '40092';

ProvisionDateUnadjusted.Type = 'LOCALMKTDATE';

module.exports = ProvisionDateUnadjusted;