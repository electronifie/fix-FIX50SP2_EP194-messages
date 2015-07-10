var invert = require('invert-obj');

function NoBusinessCenters (noBusinessCenters) {
  this.message = noBusinessCenters;
}

NoBusinessCenters.prototype.value = function () {
  return this.message;
};

NoBusinessCenters.Tag = '40278';

NoBusinessCenters.Type = 'NUMINGROUP';

module.exports = NoBusinessCenters;