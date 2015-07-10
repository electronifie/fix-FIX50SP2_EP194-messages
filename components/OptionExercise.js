var OptionExerciseDates = require('../components/OptionExerciseDates');
var OptionExerciseExpiration = require('../components/OptionExerciseExpiration');
var ExerciseDesc = require('../fields/ExerciseDesc');
var EncodedExerciseDescLen = require('../fields/EncodedExerciseDescLen');
var EncodedExerciseDesc = require('../fields/EncodedExerciseDesc');
var AutomaticExerciseIndicator = require('../fields/AutomaticExerciseIndicator');
var AutomaticExerciseThresholdRate = require('../fields/AutomaticExerciseThresholdRate');
var ExerciseConfirmationMethod = require('../fields/ExerciseConfirmationMethod');
var ManualNoticeBusinessCenter = require('../fields/ManualNoticeBusinessCenter');
var FallbackExerciseIndicator = require('../fields/FallbackExerciseIndicator');
var LimitedRightToConfirmIndicator = require('../fields/LimitedRightToConfirmIndicator');
var ExerciseSplitTicketIndicator = require('../fields/ExerciseSplitTicketIndicator');

function OptionExercise (optionExercise) {
  this.message = optionExercise;
}
/* component */
OptionExercise.prototype.optionExerciseDates = function () {
  return this.message.groups[OptionExerciseDates.Tag]
    .map(function (optionExerciseDates) {
      return new OptionExerciseDates(optionExerciseDates);
  });
};

/* component */
OptionExercise.prototype.optionExerciseExpiration = function () {
  return this.message.groups[OptionExerciseExpiration.Tag]
    .map(function (optionExerciseExpiration) {
      return new OptionExerciseExpiration(optionExerciseExpiration);
  });
};

/* field */
OptionExercise.prototype.exerciseDesc = function () {
  return new ExerciseDesc(this.message.tags[ExerciseDesc.Tag]);
};

/* field */
OptionExercise.prototype.encodedExerciseDescLen = function () {
  return new EncodedExerciseDescLen(this.message.tags[EncodedExerciseDescLen.Tag]);
};

/* field */
OptionExercise.prototype.encodedExerciseDesc = function () {
  return new EncodedExerciseDesc(this.message.tags[EncodedExerciseDesc.Tag]);
};

/* field */
OptionExercise.prototype.automaticExerciseIndicator = function () {
  return new AutomaticExerciseIndicator(this.message.tags[AutomaticExerciseIndicator.Tag]);
};

/* field */
OptionExercise.prototype.automaticExerciseThresholdRate = function () {
  return new AutomaticExerciseThresholdRate(this.message.tags[AutomaticExerciseThresholdRate.Tag]);
};

/* field */
OptionExercise.prototype.exerciseConfirmationMethod = function () {
  return new ExerciseConfirmationMethod(this.message.tags[ExerciseConfirmationMethod.Tag]);
};

/* field */
OptionExercise.prototype.manualNoticeBusinessCenter = function () {
  return new ManualNoticeBusinessCenter(this.message.tags[ManualNoticeBusinessCenter.Tag]);
};

/* field */
OptionExercise.prototype.fallbackExerciseIndicator = function () {
  return new FallbackExerciseIndicator(this.message.tags[FallbackExerciseIndicator.Tag]);
};

/* field */
OptionExercise.prototype.limitedRightToConfirmIndicator = function () {
  return new LimitedRightToConfirmIndicator(this.message.tags[LimitedRightToConfirmIndicator.Tag]);
};

/* field */
OptionExercise.prototype.exerciseSplitTicketIndicator = function () {
  return new ExerciseSplitTicketIndicator(this.message.tags[ExerciseSplitTicketIndicator.Tag]);
};



OptionExercise.Tag = '41106';

module.exports = OptionExercise;