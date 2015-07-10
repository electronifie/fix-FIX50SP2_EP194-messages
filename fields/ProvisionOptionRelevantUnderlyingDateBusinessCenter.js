var invert = require('invert-obj');

function ProvisionOptionRelevantUnderlyingDateBusinessCenter (provisionOptionRelevantUnderlyingDateBusinessCenter) {
  this.message = provisionOptionRelevantUnderlyingDateBusinessCenter;
}

ProvisionOptionRelevantUnderlyingDateBusinessCenter.prototype.value = function () {
  return this.message;
};

ProvisionOptionRelevantUnderlyingDateBusinessCenter.Tag = '40157';

ProvisionOptionRelevantUnderlyingDateBusinessCenter.Type = 'STRING';

module.exports = ProvisionOptionRelevantUnderlyingDateBusinessCenter;