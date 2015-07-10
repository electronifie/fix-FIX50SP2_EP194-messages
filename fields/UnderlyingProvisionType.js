var invert = require('invert-obj');

function UnderlyingProvisionType (underlyingProvisionType) {
  this.message = underlyingProvisionType;
}

UnderlyingProvisionType.prototype.value = function () {
  return this.message;
};

UnderlyingProvisionType.Tag = '42150';

UnderlyingProvisionType.Type = 'INT';

module.exports = UnderlyingProvisionType;