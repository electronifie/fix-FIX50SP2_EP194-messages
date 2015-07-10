var invert = require('invert-obj');

function LegEventMonthYear (legEventMonthYear) {
  this.message = legEventMonthYear;
}

LegEventMonthYear.prototype.value = function () {
  return this.message;
};

LegEventMonthYear.Tag = '2341';

LegEventMonthYear.Type = 'MONTHYEAR';

module.exports = LegEventMonthYear;