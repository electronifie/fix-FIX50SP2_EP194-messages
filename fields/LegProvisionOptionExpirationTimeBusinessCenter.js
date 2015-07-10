var invert = require('invert-obj');

function LegProvisionOptionExpirationTimeBusinessCenter (legProvisionOptionExpirationTimeBusinessCenter) {
  this.message = legProvisionOptionExpirationTimeBusinessCenter;
}

LegProvisionOptionExpirationTimeBusinessCenter.prototype.value = function () {
  return this.message;
};

LegProvisionOptionExpirationTimeBusinessCenter.Tag = '40507';

LegProvisionOptionExpirationTimeBusinessCenter.Type = 'STRING';

module.exports = LegProvisionOptionExpirationTimeBusinessCenter;