var NoAsgnReqs = require('../fields/NoAsgnReqs');
var Parties = require('../components/Parties');
var StrmAsgnRptInstrmtGrp = require('../components/StrmAsgnRptInstrmtGrp');

function StrmAsgnRptGrp (strmAsgnRptGrp) {
  this.message = strmAsgnRptGrp;
}

/* group */

/* component */
StrmAsgnRptGrp.prototype.parties = function () {
  return this.message.groups[Parties.Tag]
    .map(function (parties) {
      return new Parties(parties);
  });
};

/* component */
StrmAsgnRptGrp.prototype.strmAsgnRptInstrmtGrp = function () {
  return this.message.groups[StrmAsgnRptInstrmtGrp.Tag]
    .map(function (strmAsgnRptInstrmtGrp) {
      return new StrmAsgnRptInstrmtGrp(strmAsgnRptInstrmtGrp);
  });
};

/* end group */

StrmAsgnRptGrp.Tag = '1499';

module.exports = StrmAsgnRptGrp;