var invert = require('invert-obj');

function LegProvisionType (legProvisionType) {
  this.message = legProvisionType;
}

LegProvisionType.prototype.value = function () {
  return this.message;
};

LegProvisionType.Tag = '40449';

LegProvisionType.Type = 'INT';

module.exports = LegProvisionType;