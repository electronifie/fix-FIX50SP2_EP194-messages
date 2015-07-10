var NoComplexEventDateBusinessCenters = require('../fields/NoComplexEventDateBusinessCenters');
var ComplexEventDateBusinessCenter = require('../fields/ComplexEventDateBusinessCenter');

function ComplexEventDateBusinessCenterGrp (complexEventDateBusinessCenterGrp) {
  this.message = complexEventDateBusinessCenterGrp;
}

/* group */

/* field */
ComplexEventDateBusinessCenterGrp.prototype.complexEventDateBusinessCenter = function () {
  return new ComplexEventDateBusinessCenter(this.message.tags[ComplexEventDateBusinessCenter.Tag]);
};

/* end group */

ComplexEventDateBusinessCenterGrp.Tag = '41018';

module.exports = ComplexEventDateBusinessCenterGrp;