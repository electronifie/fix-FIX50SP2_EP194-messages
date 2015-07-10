var UnderlyingOptionExerciseDates = require('../components/UnderlyingOptionExerciseDates');
var UnderlyingOptionExerciseExpiration = require('../components/UnderlyingOptionExerciseExpiration');
var UnderlyingExerciseDesc = require('../fields/UnderlyingExerciseDesc');
var EncodedUnderlyingExerciseDescLen = require('../fields/EncodedUnderlyingExerciseDescLen');
var EncodedUnderlyingExerciseDesc = require('../fields/EncodedUnderlyingExerciseDesc');
var UnderlyingAutomaticExerciseIndicator = require('../fields/UnderlyingAutomaticExerciseIndicator');
var UnderlyingAutomaticExerciseThresholdRate = require('../fields/UnderlyingAutomaticExerciseThresholdRate');
var UnderlyingExerciseConfirmationMethod = require('../fields/UnderlyingExerciseConfirmationMethod');
var UnderlyingManualNoticeBusinessCenter = require('../fields/UnderlyingManualNoticeBusinessCenter');
var UnderlyingFallbackExerciseIndicator = require('../fields/UnderlyingFallbackExerciseIndicator');
var UnderlyingLimitedRightToConfirmIndicator = require('../fields/UnderlyingLimitedRightToConfirmIndicator');
var UnderlyingExerciseSplitTicketIndicator = require('../fields/UnderlyingExerciseSplitTicketIndicator');

function UnderlyingOptionExercise (underlyingOptionExercise) {
  this.message = underlyingOptionExercise;
}
/* component */
UnderlyingOptionExercise.prototype.underlyingOptionExerciseDates = function () {
  return this.message.groups[UnderlyingOptionExerciseDates.Tag]
    .map(function (underlyingOptionExerciseDates) {
      return new UnderlyingOptionExerciseDates(underlyingOptionExerciseDates);
  });
};

/* component */
UnderlyingOptionExercise.prototype.underlyingOptionExerciseExpiration = function () {
  return this.message.groups[UnderlyingOptionExerciseExpiration.Tag]
    .map(function (underlyingOptionExerciseExpiration) {
      return new UnderlyingOptionExerciseExpiration(underlyingOptionExerciseExpiration);
  });
};

/* field */
UnderlyingOptionExercise.prototype.underlyingExerciseDesc = function () {
  return new UnderlyingExerciseDesc(this.message.tags[UnderlyingExerciseDesc.Tag]);
};

/* field */
UnderlyingOptionExercise.prototype.encodedUnderlyingExerciseDescLen = function () {
  return new EncodedUnderlyingExerciseDescLen(this.message.tags[EncodedUnderlyingExerciseDescLen.Tag]);
};

/* field */
UnderlyingOptionExercise.prototype.encodedUnderlyingExerciseDesc = function () {
  return new EncodedUnderlyingExerciseDesc(this.message.tags[EncodedUnderlyingExerciseDesc.Tag]);
};

/* field */
UnderlyingOptionExercise.prototype.underlyingAutomaticExerciseIndicator = function () {
  return new UnderlyingAutomaticExerciseIndicator(this.message.tags[UnderlyingAutomaticExerciseIndicator.Tag]);
};

/* field */
UnderlyingOptionExercise.prototype.underlyingAutomaticExerciseThresholdRate = function () {
  return new UnderlyingAutomaticExerciseThresholdRate(this.message.tags[UnderlyingAutomaticExerciseThresholdRate.Tag]);
};

/* field */
UnderlyingOptionExercise.prototype.underlyingExerciseConfirmationMethod = function () {
  return new UnderlyingExerciseConfirmationMethod(this.message.tags[UnderlyingExerciseConfirmationMethod.Tag]);
};

/* field */
UnderlyingOptionExercise.prototype.underlyingManualNoticeBusinessCenter = function () {
  return new UnderlyingManualNoticeBusinessCenter(this.message.tags[UnderlyingManualNoticeBusinessCenter.Tag]);
};

/* field */
UnderlyingOptionExercise.prototype.underlyingFallbackExerciseIndicator = function () {
  return new UnderlyingFallbackExerciseIndicator(this.message.tags[UnderlyingFallbackExerciseIndicator.Tag]);
};

/* field */
UnderlyingOptionExercise.prototype.underlyingLimitedRightToConfirmIndicator = function () {
  return new UnderlyingLimitedRightToConfirmIndicator(this.message.tags[UnderlyingLimitedRightToConfirmIndicator.Tag]);
};

/* field */
UnderlyingOptionExercise.prototype.underlyingExerciseSplitTicketIndicator = function () {
  return new UnderlyingExerciseSplitTicketIndicator(this.message.tags[UnderlyingExerciseSplitTicketIndicator.Tag]);
};



UnderlyingOptionExercise.Tag = '41810';

module.exports = UnderlyingOptionExercise;