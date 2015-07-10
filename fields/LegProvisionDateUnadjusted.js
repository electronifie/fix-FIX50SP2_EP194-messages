var invert = require('invert-obj');

function LegProvisionDateUnadjusted (legProvisionDateUnadjusted) {
  this.message = legProvisionDateUnadjusted;
}

LegProvisionDateUnadjusted.prototype.value = function () {
  return this.message;
};

LegProvisionDateUnadjusted.Tag = '40450';

LegProvisionDateUnadjusted.Type = 'LOCALMKTDATE';

module.exports = LegProvisionDateUnadjusted;