var NoUnderlyingOptionExerciseDates = require('../fields/NoUnderlyingOptionExerciseDates');
var UnderlyingOptionExerciseDate = require('../fields/UnderlyingOptionExerciseDate');
var UnderlyingOptionExerciseDateType = require('../fields/UnderlyingOptionExerciseDateType');

function UnderlyingOptionExerciseDateGrp (underlyingOptionExerciseDateGrp) {
  this.message = underlyingOptionExerciseDateGrp;
}

/* group */

/* field */
UnderlyingOptionExerciseDateGrp.prototype.underlyingOptionExerciseDate = function () {
  return new UnderlyingOptionExerciseDate(this.message.tags[UnderlyingOptionExerciseDate.Tag]);
};

/* field */
UnderlyingOptionExerciseDateGrp.prototype.underlyingOptionExerciseDateType = function () {
  return new UnderlyingOptionExerciseDateType(this.message.tags[UnderlyingOptionExerciseDateType.Tag]);
};

/* end group */

UnderlyingOptionExerciseDateGrp.Tag = '41841';

module.exports = UnderlyingOptionExerciseDateGrp;