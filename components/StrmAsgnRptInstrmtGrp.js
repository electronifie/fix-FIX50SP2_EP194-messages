var NoRelatedSym = require('../fields/NoRelatedSym');
var Instrument = require('../components/Instrument');
var SettlType = require('../fields/SettlType');
var StreamAsgnType = require('../fields/StreamAsgnType');
var MDStreamID = require('../fields/MDStreamID');
var StreamAsgnRejReason = require('../fields/StreamAsgnRejReason');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');

function StrmAsgnRptInstrmtGrp (strmAsgnRptInstrmtGrp) {
  this.message = strmAsgnRptInstrmtGrp;
}

/* group */

/* component */
StrmAsgnRptInstrmtGrp.prototype.instrument = function () {
  return this.message.groups[Instrument.Tag]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

/* field */
StrmAsgnRptInstrmtGrp.prototype.settlType = function () {
  return new SettlType(this.message.tags[SettlType.Tag]);
};

/* field */
StrmAsgnRptInstrmtGrp.prototype.streamAsgnType = function () {
  return new StreamAsgnType(this.message.tags[StreamAsgnType.Tag]);
};

/* field */
StrmAsgnRptInstrmtGrp.prototype.mdstreamId = function () {
  return new MDStreamID(this.message.tags[MDStreamID.Tag]);
};

/* field */
StrmAsgnRptInstrmtGrp.prototype.streamAsgnRejReason = function () {
  return new StreamAsgnRejReason(this.message.tags[StreamAsgnRejReason.Tag]);
};

/* field */
StrmAsgnRptInstrmtGrp.prototype.text = function () {
  return new Text(this.message.tags[Text.Tag]);
};

/* field */
StrmAsgnRptInstrmtGrp.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[EncodedTextLen.Tag]);
};

/* field */
StrmAsgnRptInstrmtGrp.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[EncodedText.Tag]);
};

/* end group */

StrmAsgnRptInstrmtGrp.Tag = '146';

module.exports = StrmAsgnRptInstrmtGrp;