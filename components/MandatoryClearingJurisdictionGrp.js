var NoMandatoryClearingJurisdictions = require('../fields/NoMandatoryClearingJurisdictions');
var MandatoryClearingJurisdiction = require('../fields/MandatoryClearingJurisdiction');

function MandatoryClearingJurisdictionGrp (mandatoryClearingJurisdictionGrp) {
  this.message = mandatoryClearingJurisdictionGrp;
}

/* group */

/* field */
MandatoryClearingJurisdictionGrp.prototype.mandatoryClearingJurisdiction = function () {
  return new MandatoryClearingJurisdiction(this.message.tags[MandatoryClearingJurisdiction.Tag]);
};

/* end group */

MandatoryClearingJurisdictionGrp.Tag = '41312';

module.exports = MandatoryClearingJurisdictionGrp;