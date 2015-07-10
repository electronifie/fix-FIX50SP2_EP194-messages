var invert = require('invert-obj');

function UnderlyingComplexEventStartDate (underlyingComplexEventStartDate) {
  this.message = underlyingComplexEventStartDate;
}

UnderlyingComplexEventStartDate.prototype.value = function () {
  return this.message;
};

UnderlyingComplexEventStartDate.Tag = '2054';

UnderlyingComplexEventStartDate.Type = 'UTCTIMESTAMP';

module.exports = UnderlyingComplexEventStartDate;