var invert = require('invert-obj');

function LegEndDate (legEndDate) {
  this.message = legEndDate;
}

LegEndDate.prototype.value = function () {
  return this.message;
};

LegEndDate.Tag = '2506';

LegEndDate.Type = 'LOCALMKTDATE';

module.exports = LegEndDate;