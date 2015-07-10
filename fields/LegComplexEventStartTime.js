var invert = require('invert-obj');

function LegComplexEventStartTime (legComplexEventStartTime) {
  this.message = legComplexEventStartTime;
}

LegComplexEventStartTime.prototype.value = function () {
  return this.message;
};

LegComplexEventStartTime.Tag = '2204';

LegComplexEventStartTime.Type = 'UTCTIMEONLY';

module.exports = LegComplexEventStartTime;