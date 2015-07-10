var invert = require('invert-obj');

function UnderlyingLoanFacility (underlyingLoanFacility) {
  this.message = underlyingLoanFacility;
}

UnderlyingLoanFacility.prototype.value = function () {
  return this.message;
};

UnderlyingLoanFacility.Tag = '1999';

UnderlyingLoanFacility.Type = 'INT';

module.exports = UnderlyingLoanFacility;