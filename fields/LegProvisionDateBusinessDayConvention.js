var invert = require('invert-obj');

function LegProvisionDateBusinessDayConvention (legProvisionDateBusinessDayConvention) {
  this.message = legProvisionDateBusinessDayConvention;
}

LegProvisionDateBusinessDayConvention.prototype.value = function () {
  return this.message;
};

LegProvisionDateBusinessDayConvention.Tag = '40451';

LegProvisionDateBusinessDayConvention.Type = 'INT';

module.exports = LegProvisionDateBusinessDayConvention;