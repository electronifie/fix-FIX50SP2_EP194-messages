var invert = require('invert-obj');

function NoStreamTerminationDateBusinessCenters (noStreamTerminationDateBusinessCenters) {
  this.message = noStreamTerminationDateBusinessCenters;
}

NoStreamTerminationDateBusinessCenters.prototype.value = function () {
  return this.message;
};

NoStreamTerminationDateBusinessCenters.Tag = '40961';

NoStreamTerminationDateBusinessCenters.Type = 'NUMINGROUP';

module.exports = NoStreamTerminationDateBusinessCenters;