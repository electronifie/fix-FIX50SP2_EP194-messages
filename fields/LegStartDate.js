var invert = require('invert-obj');

function LegStartDate (legStartDate) {
  this.message = legStartDate;
}

LegStartDate.prototype.value = function () {
  return this.message;
};

LegStartDate.Tag = '2513';

LegStartDate.Type = 'LOCALMKTDATE';

module.exports = LegStartDate;