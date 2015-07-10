var invert = require('invert-obj');

function LegComplexEventStartDate (legComplexEventStartDate) {
  this.message = legComplexEventStartDate;
}

LegComplexEventStartDate.prototype.value = function () {
  return this.message;
};

LegComplexEventStartDate.Tag = '2251';

LegComplexEventStartDate.Type = 'UTCTIMESTAMP';

module.exports = LegComplexEventStartDate;