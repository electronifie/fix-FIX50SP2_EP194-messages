var invert = require('invert-obj');

function UnderlyingProvisionOptionExpirationDateRelativeTo (underlyingProvisionOptionExpirationDateRelativeTo) {
  this.message = underlyingProvisionOptionExpirationDateRelativeTo;
}

UnderlyingProvisionOptionExpirationDateRelativeTo.prototype.value = function () {
  return this.message;
};

UnderlyingProvisionOptionExpirationDateRelativeTo.Tag = '42135';

UnderlyingProvisionOptionExpirationDateRelativeTo.Type = 'INT';

module.exports = UnderlyingProvisionOptionExpirationDateRelativeTo;