var invert = require('invert-obj');

function UnderlyingProvisionDateBusinessCenter (underlyingProvisionDateBusinessCenter) {
  this.message = underlyingProvisionDateBusinessCenter;
}

UnderlyingProvisionDateBusinessCenter.prototype.value = function () {
  return this.message;
};

UnderlyingProvisionDateBusinessCenter.Tag = '42191';

UnderlyingProvisionDateBusinessCenter.Type = 'STRING';

module.exports = UnderlyingProvisionDateBusinessCenter;