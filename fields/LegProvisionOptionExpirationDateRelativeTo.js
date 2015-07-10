var invert = require('invert-obj');

function LegProvisionOptionExpirationDateRelativeTo (legProvisionOptionExpirationDateRelativeTo) {
  this.message = legProvisionOptionExpirationDateRelativeTo;
}

LegProvisionOptionExpirationDateRelativeTo.prototype.value = function () {
  return this.message;
};

LegProvisionOptionExpirationDateRelativeTo.Tag = '40501';

LegProvisionOptionExpirationDateRelativeTo.Type = 'INT';

module.exports = LegProvisionOptionExpirationDateRelativeTo;