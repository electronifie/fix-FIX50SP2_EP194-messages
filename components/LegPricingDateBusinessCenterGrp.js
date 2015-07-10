var NoLegPricingDateBusinessCenters = require('../fields/NoLegPricingDateBusinessCenters');
var LegPricingDateBusinessCenter = require('../fields/LegPricingDateBusinessCenter');

function LegPricingDateBusinessCenterGrp (legPricingDateBusinessCenterGrp) {
  this.message = legPricingDateBusinessCenterGrp;
}

/* group */

/* field */
LegPricingDateBusinessCenterGrp.prototype.legPricingDateBusinessCenter = function () {
  return new LegPricingDateBusinessCenter(this.message.tags[LegPricingDateBusinessCenter.Tag]);
};

/* end group */

LegPricingDateBusinessCenterGrp.Tag = '41607';

module.exports = LegPricingDateBusinessCenterGrp;