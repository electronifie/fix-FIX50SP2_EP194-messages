var NoRelatedSym = require('../fields/NoRelatedSym');
var Instrument = require('../components/Instrument');
var SettlType = require('../fields/SettlType');
var MDEntrySize = require('../fields/MDEntrySize');
var MDStreamID = require('../fields/MDStreamID');

function StrmAsgnReqInstrmtGrp (strmAsgnReqInstrmtGrp) {
  this.message = strmAsgnReqInstrmtGrp;
}

/* group */

/* component */
StrmAsgnReqInstrmtGrp.prototype.instrument = function () {
  return this.message.groups[Instrument.Tag]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

/* field */
StrmAsgnReqInstrmtGrp.prototype.settlType = function () {
  return new SettlType(this.message.tags[SettlType.Tag]);
};

/* field */
StrmAsgnReqInstrmtGrp.prototype.mdentrySize = function () {
  return new MDEntrySize(this.message.tags[MDEntrySize.Tag]);
};

/* field */
StrmAsgnReqInstrmtGrp.prototype.mdstreamId = function () {
  return new MDStreamID(this.message.tags[MDStreamID.Tag]);
};

/* end group */

StrmAsgnReqInstrmtGrp.Tag = '146';

module.exports = StrmAsgnReqInstrmtGrp;