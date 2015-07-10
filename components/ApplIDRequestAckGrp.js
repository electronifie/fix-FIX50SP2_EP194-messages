var NoApplIDs = require('../fields/NoApplIDs');
var NestedParties = require('../components/NestedParties');
var RefApplID = require('../fields/RefApplID');
var RefApplReqID = require('../fields/RefApplReqID');
var ApplBegSeqNum = require('../fields/ApplBegSeqNum');
var ApplEndSeqNum = require('../fields/ApplEndSeqNum');
var RefApplLastSeqNum = require('../fields/RefApplLastSeqNum');
var ApplResponseError = require('../fields/ApplResponseError');

function ApplIDRequestAckGrp (applIdrequestAckGrp) {
  this.message = applIdrequestAckGrp;
}

/* group */

/* component */
ApplIDRequestAckGrp.prototype.nestedParties = function () {
  return this.message.groups[NestedParties.Tag]
    .map(function (nestedParties) {
      return new NestedParties(nestedParties);
  });
};

/* field */
ApplIDRequestAckGrp.prototype.refApplId = function () {
  return new RefApplID(this.message.tags[RefApplID.Tag]);
};

/* field */
ApplIDRequestAckGrp.prototype.refApplReqId = function () {
  return new RefApplReqID(this.message.tags[RefApplReqID.Tag]);
};

/* field */
ApplIDRequestAckGrp.prototype.applBegSeqNum = function () {
  return new ApplBegSeqNum(this.message.tags[ApplBegSeqNum.Tag]);
};

/* field */
ApplIDRequestAckGrp.prototype.applEndSeqNum = function () {
  return new ApplEndSeqNum(this.message.tags[ApplEndSeqNum.Tag]);
};

/* field */
ApplIDRequestAckGrp.prototype.refApplLastSeqNum = function () {
  return new RefApplLastSeqNum(this.message.tags[RefApplLastSeqNum.Tag]);
};

/* field */
ApplIDRequestAckGrp.prototype.applResponseError = function () {
  return new ApplResponseError(this.message.tags[ApplResponseError.Tag]);
};

/* end group */

ApplIDRequestAckGrp.Tag = '1351';

module.exports = ApplIDRequestAckGrp;