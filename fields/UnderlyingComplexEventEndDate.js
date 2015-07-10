var invert = require('invert-obj');

function UnderlyingComplexEventEndDate (underlyingComplexEventEndDate) {
  this.message = underlyingComplexEventEndDate;
}

UnderlyingComplexEventEndDate.prototype.value = function () {
  return this.message;
};

UnderlyingComplexEventEndDate.Tag = '2055';

UnderlyingComplexEventEndDate.Type = 'UTCTIMESTAMP';

module.exports = UnderlyingComplexEventEndDate;