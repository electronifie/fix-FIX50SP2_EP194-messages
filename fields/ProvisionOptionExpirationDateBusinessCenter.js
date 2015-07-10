var invert = require('invert-obj');

function ProvisionOptionExpirationDateBusinessCenter (provisionOptionExpirationDateBusinessCenter) {
  this.message = provisionOptionExpirationDateBusinessCenter;
}

ProvisionOptionExpirationDateBusinessCenter.prototype.value = function () {
  return this.message;
};

ProvisionOptionExpirationDateBusinessCenter.Tag = '40147';

ProvisionOptionExpirationDateBusinessCenter.Type = 'STRING';

module.exports = ProvisionOptionExpirationDateBusinessCenter;