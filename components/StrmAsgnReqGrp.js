var NoAsgnReqs = require('../fields/NoAsgnReqs');
var Parties = require('../components/Parties');
var StrmAsgnReqInstrmtGrp = require('../components/StrmAsgnReqInstrmtGrp');

function StrmAsgnReqGrp (strmAsgnReqGrp) {
  this.message = strmAsgnReqGrp;
}

/* group */

/* component */
StrmAsgnReqGrp.prototype.parties = function () {
  return this.message.groups[Parties.Tag]
    .map(function (parties) {
      return new Parties(parties);
  });
};

/* component */
StrmAsgnReqGrp.prototype.strmAsgnReqInstrmtGrp = function () {
  return this.message.groups[StrmAsgnReqInstrmtGrp.Tag]
    .map(function (strmAsgnReqInstrmtGrp) {
      return new StrmAsgnReqInstrmtGrp(strmAsgnReqInstrmtGrp);
  });
};

/* end group */

StrmAsgnReqGrp.Tag = '1499';

module.exports = StrmAsgnReqGrp;