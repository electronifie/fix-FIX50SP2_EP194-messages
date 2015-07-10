var invert = require('invert-obj');

function LegProvisionDateBusinessCenter (legProvisionDateBusinessCenter) {
  this.message = legProvisionDateBusinessCenter;
}

LegProvisionDateBusinessCenter.prototype.value = function () {
  return this.message;
};

LegProvisionDateBusinessCenter.Tag = '40452';

LegProvisionDateBusinessCenter.Type = 'STRING';

module.exports = LegProvisionDateBusinessCenter;