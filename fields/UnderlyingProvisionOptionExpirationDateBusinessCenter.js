var invert = require('invert-obj');

function UnderlyingProvisionOptionExpirationDateBusinessCenter (underlyingProvisionOptionExpirationDateBusinessCenter) {
  this.message = underlyingProvisionOptionExpirationDateBusinessCenter;
}

UnderlyingProvisionOptionExpirationDateBusinessCenter.prototype.value = function () {
  return this.message;
};

UnderlyingProvisionOptionExpirationDateBusinessCenter.Tag = '42187';

UnderlyingProvisionOptionExpirationDateBusinessCenter.Type = 'STRING';

module.exports = UnderlyingProvisionOptionExpirationDateBusinessCenter;