var invert = require('invert-obj');

function UnderlyingSettlRatePostponementSurvey (underlyingSettlRatePostponementSurvey) {
  this.message = underlyingSettlRatePostponementSurvey;
}

UnderlyingSettlRatePostponementSurvey.prototype.value = function () {
  return this.message;
};

UnderlyingSettlRatePostponementSurvey.Tag = '40662';

UnderlyingSettlRatePostponementSurvey.Type = 'BOOLEAN';

module.exports = UnderlyingSettlRatePostponementSurvey;