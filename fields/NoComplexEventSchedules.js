var invert = require('invert-obj');

function NoComplexEventSchedules (noComplexEventSchedules) {
  this.message = noComplexEventSchedules;
}

NoComplexEventSchedules.prototype.value = function () {
  return this.message;
};

NoComplexEventSchedules.Tag = '41031';

NoComplexEventSchedules.Type = 'NUMINGROUP';

module.exports = NoComplexEventSchedules;