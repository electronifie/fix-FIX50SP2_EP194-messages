var invert = require('invert-obj');

function LegComplexEventEndTime (legComplexEventEndTime) {
  this.message = legComplexEventEndTime;
}

LegComplexEventEndTime.prototype.value = function () {
  return this.message;
};

LegComplexEventEndTime.Tag = '2247';

LegComplexEventEndTime.Type = 'UTCTIMEONLY';

module.exports = LegComplexEventEndTime;