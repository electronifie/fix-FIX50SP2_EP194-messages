var invert = require('invert-obj');

function ProvisionOptionExpirationTimeBusinessCenter (provisionOptionExpirationTimeBusinessCenter) {
  this.message = provisionOptionExpirationTimeBusinessCenter;
}

ProvisionOptionExpirationTimeBusinessCenter.prototype.value = function () {
  return this.message;
};

ProvisionOptionExpirationTimeBusinessCenter.Tag = '40154';

ProvisionOptionExpirationTimeBusinessCenter.Type = 'STRING';

module.exports = ProvisionOptionExpirationTimeBusinessCenter;