var invert = require('invert-obj');

function LegComplexEventEndDate (legComplexEventEndDate) {
  this.message = legComplexEventEndDate;
}

LegComplexEventEndDate.prototype.value = function () {
  return this.message;
};

LegComplexEventEndDate.Tag = '2252';

LegComplexEventEndDate.Type = 'UTCTIMESTAMP';

module.exports = LegComplexEventEndDate;