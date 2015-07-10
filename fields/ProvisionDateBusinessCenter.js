var invert = require('invert-obj');

function ProvisionDateBusinessCenter (provisionDateBusinessCenter) {
  this.message = provisionDateBusinessCenter;
}

ProvisionDateBusinessCenter.prototype.value = function () {
  return this.message;
};

ProvisionDateBusinessCenter.Tag = '40094';

ProvisionDateBusinessCenter.Type = 'STRING';

module.exports = ProvisionDateBusinessCenter;