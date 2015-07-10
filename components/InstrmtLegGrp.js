var NoLegs = require('../fields/NoLegs');
var InstrumentLeg = require('../components/InstrumentLeg');
var LegFinancingDetails = require('../components/LegFinancingDetails');

function InstrmtLegGrp (instrmtLegGrp) {
  this.message = instrmtLegGrp;
}

/* group */

/* component */
InstrmtLegGrp.prototype.instrumentLeg = function () {
  return this.message.groups[InstrumentLeg.Tag]
    .map(function (instrumentLeg) {
      return new InstrumentLeg(instrumentLeg);
  });
};

/* component */
InstrmtLegGrp.prototype.legFinancingDetails = function () {
  return this.message.groups[LegFinancingDetails.Tag]
    .map(function (legFinancingDetails) {
      return new LegFinancingDetails(legFinancingDetails);
  });
};

/* end group */

InstrmtLegGrp.Tag = '555';

module.exports = InstrmtLegGrp;