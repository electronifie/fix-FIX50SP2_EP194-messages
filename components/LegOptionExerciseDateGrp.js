var NoLegOptionExerciseDates = require('../fields/NoLegOptionExerciseDates');
var LegOptionExerciseDate = require('../fields/LegOptionExerciseDate');
var LegOptionExerciseDateType = require('../fields/LegOptionExerciseDateType');

function LegOptionExerciseDateGrp (legOptionExerciseDateGrp) {
  this.message = legOptionExerciseDateGrp;
}

/* group */

/* field */
LegOptionExerciseDateGrp.prototype.legOptionExerciseDate = function () {
  return new LegOptionExerciseDate(this.message.tags[LegOptionExerciseDate.Tag]);
};

/* field */
LegOptionExerciseDateGrp.prototype.legOptionExerciseDateType = function () {
  return new LegOptionExerciseDateType(this.message.tags[LegOptionExerciseDateType.Tag]);
};

/* end group */

LegOptionExerciseDateGrp.Tag = '41512';

module.exports = LegOptionExerciseDateGrp;