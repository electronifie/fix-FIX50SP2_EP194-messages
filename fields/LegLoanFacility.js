var invert = require('invert-obj');

function LegLoanFacility (legLoanFacility) {
  this.message = legLoanFacility;
}

LegLoanFacility.prototype.value = function () {
  return this.message;
};

LegLoanFacility.Tag = '2170';

LegLoanFacility.Type = 'INT';

module.exports = LegLoanFacility;