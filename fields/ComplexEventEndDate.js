var invert = require('invert-obj');

function ComplexEventEndDate (complexEventEndDate) {
  this.message = complexEventEndDate;
}

ComplexEventEndDate.prototype.value = function () {
  return this.message;
};

ComplexEventEndDate.Tag = '1493';

ComplexEventEndDate.Type = 'UTCTIMESTAMP';

module.exports = ComplexEventEndDate;