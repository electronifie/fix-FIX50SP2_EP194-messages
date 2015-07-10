var invert = require('invert-obj');

function LegSettlRatePostponementMaximumDays (legSettlRatePostponementMaximumDays) {
  this.message = legSettlRatePostponementMaximumDays;
}

LegSettlRatePostponementMaximumDays.prototype.value = function () {
  return this.message;
};

LegSettlRatePostponementMaximumDays.Tag = '40903';

LegSettlRatePostponementMaximumDays.Type = 'INT';

module.exports = LegSettlRatePostponementMaximumDays;