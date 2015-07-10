var invert = require('invert-obj');

function ComplexEventStartDate (complexEventStartDate) {
  this.message = complexEventStartDate;
}

ComplexEventStartDate.prototype.value = function () {
  return this.message;
};

ComplexEventStartDate.Tag = '1492';

ComplexEventStartDate.Type = 'UTCTIMESTAMP';

module.exports = ComplexEventStartDate;