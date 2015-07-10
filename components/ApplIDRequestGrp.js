var NoApplIDs = require('../fields/NoApplIDs');
var NestedParties = require('../components/NestedParties');
var RefApplID = require('../fields/RefApplID');
var RefApplReqID = require('../fields/RefApplReqID');
var ApplBegSeqNum = require('../fields/ApplBegSeqNum');
var ApplEndSeqNum = require('../fields/ApplEndSeqNum');

function ApplIDRequestGrp (applIdrequestGrp) {
  this.message = applIdrequestGrp;
}

/* group */

/* component */
ApplIDRequestGrp.prototype.nestedParties = function () {
  return this.message.groups[NestedParties.Tag]
    .map(function (nestedParties) {
      return new NestedParties(nestedParties);
  });
};

/* field */
ApplIDRequestGrp.prototype.refApplId = function () {
  return new RefApplID(this.message.tags[RefApplID.Tag]);
};

/* field */
ApplIDRequestGrp.prototype.refApplReqId = function () {
  return new RefApplReqID(this.message.tags[RefApplReqID.Tag]);
};

/* field */
ApplIDRequestGrp.prototype.applBegSeqNum = function () {
  return new ApplBegSeqNum(this.message.tags[ApplBegSeqNum.Tag]);
};

/* field */
ApplIDRequestGrp.prototype.applEndSeqNum = function () {
  return new ApplEndSeqNum(this.message.tags[ApplEndSeqNum.Tag]);
};

/* end group */

ApplIDRequestGrp.Tag = '1351';

module.exports = ApplIDRequestGrp;