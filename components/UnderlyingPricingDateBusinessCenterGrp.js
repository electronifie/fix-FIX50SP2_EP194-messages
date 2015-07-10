var NoUnderlyingPricingDateBusinessCenters = require('../fields/NoUnderlyingPricingDateBusinessCenters');
var UnderlyingPricingDateBusinessCenter = require('../fields/UnderlyingPricingDateBusinessCenter');

function UnderlyingPricingDateBusinessCenterGrp (underlyingPricingDateBusinessCenterGrp) {
  this.message = underlyingPricingDateBusinessCenterGrp;
}

/* group */

/* field */
UnderlyingPricingDateBusinessCenterGrp.prototype.underlyingPricingDateBusinessCenter = function () {
  return new UnderlyingPricingDateBusinessCenter(this.message.tags[UnderlyingPricingDateBusinessCenter.Tag]);
};

/* end group */

UnderlyingPricingDateBusinessCenterGrp.Tag = '41947';

module.exports = UnderlyingPricingDateBusinessCenterGrp;