var invert = require('invert-obj');

function LegProvisionOptionExpirationDateBusinessCenter (legProvisionOptionExpirationDateBusinessCenter) {
  this.message = legProvisionOptionExpirationDateBusinessCenter;
}

LegProvisionOptionExpirationDateBusinessCenter.prototype.value = function () {
  return this.message;
};

LegProvisionOptionExpirationDateBusinessCenter.Tag = '40500';

LegProvisionOptionExpirationDateBusinessCenter.Type = 'STRING';

module.exports = LegProvisionOptionExpirationDateBusinessCenter;