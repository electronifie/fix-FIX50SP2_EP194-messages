var invert = require('invert-obj');

function SettlRatePostponementSurvey (settlRatePostponementSurvey) {
  this.message = settlRatePostponementSurvey;
}

SettlRatePostponementSurvey.prototype.value = function () {
  return this.message;
};

SettlRatePostponementSurvey.Tag = '40088';

SettlRatePostponementSurvey.Type = 'BOOLEAN';

module.exports = SettlRatePostponementSurvey;