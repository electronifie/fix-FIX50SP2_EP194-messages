var NoOptionExerciseDates = require('../fields/NoOptionExerciseDates');
var OptionExerciseDate = require('../fields/OptionExerciseDate');
var OptionExerciseDateType = require('../fields/OptionExerciseDateType');

function OptionExerciseDateGrp (optionExerciseDateGrp) {
  this.message = optionExerciseDateGrp;
}

/* group */

/* field */
OptionExerciseDateGrp.prototype.optionExerciseDate = function () {
  return new OptionExerciseDate(this.message.tags[OptionExerciseDate.Tag]);
};

/* field */
OptionExerciseDateGrp.prototype.optionExerciseDateType = function () {
  return new OptionExerciseDateType(this.message.tags[OptionExerciseDateType.Tag]);
};

/* end group */

OptionExerciseDateGrp.Tag = '41137';

module.exports = OptionExerciseDateGrp;