var invert = require('invert-obj');

function RateSourceReferemcePageHeading (rateSourceReferemcePageHeading) {
  this.message = rateSourceReferemcePageHeading;
}

RateSourceReferemcePageHeading.prototype.value = function () {
  return this.message;
};

RateSourceReferemcePageHeading.Tag = '2412';

RateSourceReferemcePageHeading.Type = 'STRING';

module.exports = RateSourceReferemcePageHeading;