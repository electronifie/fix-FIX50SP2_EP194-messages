var invert = require('invert-obj');

function ComplexEventEndTime (complexEventEndTime) {
  this.message = complexEventEndTime;
}

ComplexEventEndTime.prototype.value = function () {
  return this.message;
};

ComplexEventEndTime.Tag = '1496';

ComplexEventEndTime.Type = 'UTCTIMEONLY';

module.exports = ComplexEventEndTime;