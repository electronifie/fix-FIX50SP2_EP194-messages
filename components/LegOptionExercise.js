var LegOptionExerciseDates = require('../components/LegOptionExerciseDates');
var LegOptionExerciseExpiration = require('../components/LegOptionExerciseExpiration');
var LegExerciseDesc = require('../fields/LegExerciseDesc');
var EncodedLegExerciseDescLen = require('../fields/EncodedLegExerciseDescLen');
var EncodedLegExerciseDesc = require('../fields/EncodedLegExerciseDesc');
var LegAutomaticExerciseIndicator = require('../fields/LegAutomaticExerciseIndicator');
var LegAutomaticExerciseThresholdRate = require('../fields/LegAutomaticExerciseThresholdRate');
var LegExerciseConfirmationMethod = require('../fields/LegExerciseConfirmationMethod');
var LegManualNoticeBusinessCenter = require('../fields/LegManualNoticeBusinessCenter');
var LegFallbackExerciseIndicator = require('../fields/LegFallbackExerciseIndicator');
var LegLimitRightToConfirmIndicator = require('../fields/LegLimitRightToConfirmIndicator');
var LegExerciseSplitTicketIndicator = require('../fields/LegExerciseSplitTicketIndicator');

function LegOptionExercise (legOptionExercise) {
  this.message = legOptionExercise;
}
/* component */
LegOptionExercise.prototype.legOptionExerciseDates = function () {
  return this.message.groups[LegOptionExerciseDates.Tag]
    .map(function (legOptionExerciseDates) {
      return new LegOptionExerciseDates(legOptionExerciseDates);
  });
};

/* component */
LegOptionExercise.prototype.legOptionExerciseExpiration = function () {
  return this.message.groups[LegOptionExerciseExpiration.Tag]
    .map(function (legOptionExerciseExpiration) {
      return new LegOptionExerciseExpiration(legOptionExerciseExpiration);
  });
};

/* field */
LegOptionExercise.prototype.legExerciseDesc = function () {
  return new LegExerciseDesc(this.message.tags[LegExerciseDesc.Tag]);
};

/* field */
LegOptionExercise.prototype.encodedLegExerciseDescLen = function () {
  return new EncodedLegExerciseDescLen(this.message.tags[EncodedLegExerciseDescLen.Tag]);
};

/* field */
LegOptionExercise.prototype.encodedLegExerciseDesc = function () {
  return new EncodedLegExerciseDesc(this.message.tags[EncodedLegExerciseDesc.Tag]);
};

/* field */
LegOptionExercise.prototype.legAutomaticExerciseIndicator = function () {
  return new LegAutomaticExerciseIndicator(this.message.tags[LegAutomaticExerciseIndicator.Tag]);
};

/* field */
LegOptionExercise.prototype.legAutomaticExerciseThresholdRate = function () {
  return new LegAutomaticExerciseThresholdRate(this.message.tags[LegAutomaticExerciseThresholdRate.Tag]);
};

/* field */
LegOptionExercise.prototype.legExerciseConfirmationMethod = function () {
  return new LegExerciseConfirmationMethod(this.message.tags[LegExerciseConfirmationMethod.Tag]);
};

/* field */
LegOptionExercise.prototype.legManualNoticeBusinessCenter = function () {
  return new LegManualNoticeBusinessCenter(this.message.tags[LegManualNoticeBusinessCenter.Tag]);
};

/* field */
LegOptionExercise.prototype.legFallbackExerciseIndicator = function () {
  return new LegFallbackExerciseIndicator(this.message.tags[LegFallbackExerciseIndicator.Tag]);
};

/* field */
LegOptionExercise.prototype.legLimitRightToConfirmIndicator = function () {
  return new LegLimitRightToConfirmIndicator(this.message.tags[LegLimitRightToConfirmIndicator.Tag]);
};

/* field */
LegOptionExercise.prototype.legExerciseSplitTicketIndicator = function () {
  return new LegExerciseSplitTicketIndicator(this.message.tags[LegExerciseSplitTicketIndicator.Tag]);
};



LegOptionExercise.Tag = '41481';

module.exports = LegOptionExercise;