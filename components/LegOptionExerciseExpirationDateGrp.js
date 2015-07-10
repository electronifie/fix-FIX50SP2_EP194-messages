var NoLegOptionExerciseExpirationDates = require('../fields/NoLegOptionExerciseExpirationDates');
var LegOptionExerciseExpirationDate = require('../fields/LegOptionExerciseExpirationDate');
var LegOptionExerciseExpirationDateType = require('../fields/LegOptionExerciseExpirationDateType');

function LegOptionExerciseExpirationDateGrp (legOptionExerciseExpirationDateGrp) {
  this.message = legOptionExerciseExpirationDateGrp;
}

/* group */

/* field */
LegOptionExerciseExpirationDateGrp.prototype.legOptionExerciseExpirationDate = function () {
  return new LegOptionExerciseExpirationDate(this.message.tags[LegOptionExerciseExpirationDate.Tag]);
};

/* field */
LegOptionExerciseExpirationDateGrp.prototype.legOptionExerciseExpirationDateType = function () {
  return new LegOptionExerciseExpirationDateType(this.message.tags[LegOptionExerciseExpirationDateType.Tag]);
};

/* end group */

LegOptionExerciseExpirationDateGrp.Tag = '41527';

module.exports = LegOptionExerciseExpirationDateGrp;