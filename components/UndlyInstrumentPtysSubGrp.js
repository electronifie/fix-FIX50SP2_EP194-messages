var NoUndlyInstrumentPartySubIDs = require('../fields/NoUndlyInstrumentPartySubIDs');
var UnderlyingInstrumentPartySubID = require('../fields/UnderlyingInstrumentPartySubID');
var UnderlyingInstrumentPartySubIDType = require('../fields/UnderlyingInstrumentPartySubIDType');

function UndlyInstrumentPtysSubGrp (undlyInstrumentPtysSubGrp) {
  this.message = undlyInstrumentPtysSubGrp;
}

/* group */

/* field */
UndlyInstrumentPtysSubGrp.prototype.underlyingInstrumentPartySubId = function () {
  return new UnderlyingInstrumentPartySubID(this.message.tags[UnderlyingInstrumentPartySubID.Tag]);
};

/* field */
UndlyInstrumentPtysSubGrp.prototype.underlyingInstrumentPartySubIdtype = function () {
  return new UnderlyingInstrumentPartySubIDType(this.message.tags[UnderlyingInstrumentPartySubIDType.Tag]);
};

/* end group */

UndlyInstrumentPtysSubGrp.Tag = '1062';

module.exports = UndlyInstrumentPtysSubGrp;