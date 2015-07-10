var invert = require('invert-obj');

function ProvisionOptionExpirationTime (provisionOptionExpirationTime) {
  this.message = provisionOptionExpirationTime;
}

ProvisionOptionExpirationTime.prototype.value = function () {
  return this.message;
};

ProvisionOptionExpirationTime.Tag = '40153';

ProvisionOptionExpirationTime.Type = 'LOCALMKTTIME';

module.exports = ProvisionOptionExpirationTime;