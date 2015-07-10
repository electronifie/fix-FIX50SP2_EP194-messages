var invert = require('invert-obj');

function ComplexEventStartTime (complexEventStartTime) {
  this.message = complexEventStartTime;
}

ComplexEventStartTime.prototype.value = function () {
  return this.message;
};

ComplexEventStartTime.Tag = '1495';

ComplexEventStartTime.Type = 'UTCTIMEONLY';

module.exports = ComplexEventStartTime;