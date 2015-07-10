var invert = require('invert-obj');

function UnderlyingProvisionDateBusinessDayConvention (underlyingProvisionDateBusinessDayConvention) {
  this.message = underlyingProvisionDateBusinessDayConvention;
}

UnderlyingProvisionDateBusinessDayConvention.prototype.value = function () {
  return this.message;
};

UnderlyingProvisionDateBusinessDayConvention.Tag = '42152';

UnderlyingProvisionDateBusinessDayConvention.Type = 'INT';

module.exports = UnderlyingProvisionDateBusinessDayConvention;