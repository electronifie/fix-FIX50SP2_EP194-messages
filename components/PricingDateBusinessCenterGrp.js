var NoPricingDateBusinessCenters = require('../fields/NoPricingDateBusinessCenters');
var PricingDateBusinessCenter = require('../fields/PricingDateBusinessCenter');

function PricingDateBusinessCenterGrp (pricingDateBusinessCenterGrp) {
  this.message = pricingDateBusinessCenterGrp;
}

/* group */

/* field */
PricingDateBusinessCenterGrp.prototype.pricingDateBusinessCenter = function () {
  return new PricingDateBusinessCenter(this.message.tags[PricingDateBusinessCenter.Tag]);
};

/* end group */

PricingDateBusinessCenterGrp.Tag = '41230';

module.exports = PricingDateBusinessCenterGrp;