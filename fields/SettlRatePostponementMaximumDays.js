var invert = require('invert-obj');

function SettlRatePostponementMaximumDays (settlRatePostponementMaximumDays) {
  this.message = settlRatePostponementMaximumDays;
}

SettlRatePostponementMaximumDays.prototype.value = function () {
  return this.message;
};

SettlRatePostponementMaximumDays.Tag = '40086';

SettlRatePostponementMaximumDays.Type = 'INT';

module.exports = SettlRatePostponementMaximumDays;