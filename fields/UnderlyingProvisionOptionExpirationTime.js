var invert = require('invert-obj');

function UnderlyingProvisionOptionExpirationTime (underlyingProvisionOptionExpirationTime) {
  this.message = underlyingProvisionOptionExpirationTime;
}

UnderlyingProvisionOptionExpirationTime.prototype.value = function () {
  return this.message;
};

UnderlyingProvisionOptionExpirationTime.Tag = '42140';

UnderlyingProvisionOptionExpirationTime.Type = 'LOCALMKTTIME';

module.exports = UnderlyingProvisionOptionExpirationTime;