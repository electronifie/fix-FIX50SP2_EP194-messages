var invert = require('invert-obj');

function NoLegStreamTerminationDateBusinessCenters (noLegStreamTerminationDateBusinessCenters) {
  this.message = noLegStreamTerminationDateBusinessCenters;
}

NoLegStreamTerminationDateBusinessCenters.prototype.value = function () {
  return this.message;
};

NoLegStreamTerminationDateBusinessCenters.Tag = '40943';

NoLegStreamTerminationDateBusinessCenters.Type = 'NUMINGROUP';

module.exports = NoLegStreamTerminationDateBusinessCenters;