var invert = require('invert-obj');

function NoLegProvisionOptionRelevantUnderlyingDateBusinessCenters (noLegProvisionOptionRelevantUnderlyingDateBusinessCenters) {
  this.message = noLegProvisionOptionRelevantUnderlyingDateBusinessCenters;
}

NoLegProvisionOptionRelevantUnderlyingDateBusinessCenters.prototype.value = function () {
  return this.message;
};

NoLegProvisionOptionRelevantUnderlyingDateBusinessCenters.Tag = '40938';

NoLegProvisionOptionRelevantUnderlyingDateBusinessCenters.Type = 'NUMINGROUP';

module.exports = NoLegProvisionOptionRelevantUnderlyingDateBusinessCenters;