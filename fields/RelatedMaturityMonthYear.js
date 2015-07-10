var invert = require('invert-obj');

function RelatedMaturityMonthYear (relatedMaturityMonthYear) {
  this.message = relatedMaturityMonthYear;
}

RelatedMaturityMonthYear.prototype.value = function () {
  return this.message;
};

RelatedMaturityMonthYear.Tag = '1653';

RelatedMaturityMonthYear.Type = 'MONTHYEAR';

module.exports = RelatedMaturityMonthYear;