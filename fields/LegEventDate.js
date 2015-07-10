var invert = require('invert-obj');

function LegEventDate (legEventDate) {
  this.message = legEventDate;
}

LegEventDate.prototype.value = function () {
  return this.message;
};

LegEventDate.Tag = '2061';

LegEventDate.Type = 'LOCALMKTDATE';

module.exports = LegEventDate;