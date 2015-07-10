var invert = require('invert-obj');

function UnderlyingProvisionOptionExpirationTimeBusinessCenter (underlyingProvisionOptionExpirationTimeBusinessCenter) {
  this.message = underlyingProvisionOptionExpirationTimeBusinessCenter;
}

UnderlyingProvisionOptionExpirationTimeBusinessCenter.prototype.value = function () {
  return this.message;
};

UnderlyingProvisionOptionExpirationTimeBusinessCenter.Tag = '42141';

UnderlyingProvisionOptionExpirationTimeBusinessCenter.Type = 'STRING';

module.exports = UnderlyingProvisionOptionExpirationTimeBusinessCenter;