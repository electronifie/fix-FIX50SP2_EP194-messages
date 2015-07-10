var NoRequestingPartySubIDs = require('../fields/NoRequestingPartySubIDs');
var RequestingPartySubID = require('../fields/RequestingPartySubID');
var RequestingPartySubIDType = require('../fields/RequestingPartySubIDType');

function RequestingPartySubGrp (requestingPartySubGrp) {
  this.message = requestingPartySubGrp;
}

/* group */

/* field */
RequestingPartySubGrp.prototype.requestingPartySubId = function () {
  return new RequestingPartySubID(this.message.tags[RequestingPartySubID.Tag]);
};

/* field */
RequestingPartySubGrp.prototype.requestingPartySubIdtype = function () {
  return new RequestingPartySubIDType(this.message.tags[RequestingPartySubIDType.Tag]);
};

/* end group */

RequestingPartySubGrp.Tag = '1661';

module.exports = RequestingPartySubGrp;