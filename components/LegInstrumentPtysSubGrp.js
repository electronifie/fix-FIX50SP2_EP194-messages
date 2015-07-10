var NoLegInstrumentPartySubIDs = require('../fields/NoLegInstrumentPartySubIDs');
var LegInstrumentPartySubID = require('../fields/LegInstrumentPartySubID');
var LegInstrumentPartySubIDType = require('../fields/LegInstrumentPartySubIDType');

function LegInstrumentPtysSubGrp (legInstrumentPtysSubGrp) {
  this.message = legInstrumentPtysSubGrp;
}

/* group */

/* field */
LegInstrumentPtysSubGrp.prototype.legInstrumentPartySubId = function () {
  return new LegInstrumentPartySubID(this.message.tags[LegInstrumentPartySubID.Tag]);
};

/* field */
LegInstrumentPtysSubGrp.prototype.legInstrumentPartySubIdtype = function () {
  return new LegInstrumentPartySubIDType(this.message.tags[LegInstrumentPartySubIDType.Tag]);
};

/* end group */

LegInstrumentPtysSubGrp.Tag = '2258';

module.exports = LegInstrumentPtysSubGrp;