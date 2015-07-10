var invert = require('invert-obj');

function UnderlyingSettlRatePostponementMaximumDays (underlyingSettlRatePostponementMaximumDays) {
  this.message = underlyingSettlRatePostponementMaximumDays;
}

UnderlyingSettlRatePostponementMaximumDays.prototype.value = function () {
  return this.message;
};

UnderlyingSettlRatePostponementMaximumDays.Tag = '40660';

UnderlyingSettlRatePostponementMaximumDays.Type = 'INT';

module.exports = UnderlyingSettlRatePostponementMaximumDays;