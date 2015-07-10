var invert = require('invert-obj');

function NoUnderlyingComplexEventSchedules (noUnderlyingComplexEventSchedules) {
  this.message = noUnderlyingComplexEventSchedules;
}

NoUnderlyingComplexEventSchedules.prototype.value = function () {
  return this.message;
};

NoUnderlyingComplexEventSchedules.Tag = '41750';

NoUnderlyingComplexEventSchedules.Type = 'NUMINGROUP';

module.exports = NoUnderlyingComplexEventSchedules;