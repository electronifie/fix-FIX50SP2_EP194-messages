var invert = require('invert-obj');

function LegSettlRatePostponementSurvey (legSettlRatePostponementSurvey) {
  this.message = legSettlRatePostponementSurvey;
}

LegSettlRatePostponementSurvey.prototype.value = function () {
  return this.message;
};

LegSettlRatePostponementSurvey.Tag = '40905';

LegSettlRatePostponementSurvey.Type = 'BOOLEAN';

module.exports = LegSettlRatePostponementSurvey;