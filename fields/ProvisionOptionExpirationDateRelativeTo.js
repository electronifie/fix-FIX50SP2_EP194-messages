var invert = require('invert-obj');

function ProvisionOptionExpirationDateRelativeTo (provisionOptionExpirationDateRelativeTo) {
  this.message = provisionOptionExpirationDateRelativeTo;
}

ProvisionOptionExpirationDateRelativeTo.prototype.value = function () {
  return this.message;
};

ProvisionOptionExpirationDateRelativeTo.Tag = '40148';

ProvisionOptionExpirationDateRelativeTo.Type = 'INT';

module.exports = ProvisionOptionExpirationDateRelativeTo;