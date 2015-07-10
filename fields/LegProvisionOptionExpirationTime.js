var invert = require('invert-obj');

function LegProvisionOptionExpirationTime (legProvisionOptionExpirationTime) {
  this.message = legProvisionOptionExpirationTime;
}

LegProvisionOptionExpirationTime.prototype.value = function () {
  return this.message;
};

LegProvisionOptionExpirationTime.Tag = '40506';

LegProvisionOptionExpirationTime.Type = 'LOCALMKTTIME';

module.exports = LegProvisionOptionExpirationTime;