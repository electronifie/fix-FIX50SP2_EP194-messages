var NoUnderlyingOptionExerciseExpirationDates = require('../fields/NoUnderlyingOptionExerciseExpirationDates');
var UnderlyingOptionExerciseExpirationDate = require('../fields/UnderlyingOptionExerciseExpirationDate');
var UnderlyingOptionExerciseExpirationDateType = require('../fields/UnderlyingOptionExerciseExpirationDateType');

function UnderlyingOptionExerciseExpirationDateGrp (underlyingOptionExerciseExpirationDateGrp) {
  this.message = underlyingOptionExerciseExpirationDateGrp;
}

/* group */

/* field */
UnderlyingOptionExerciseExpirationDateGrp.prototype.underlyingOptionExerciseExpirationDate = function () {
  return new UnderlyingOptionExerciseExpirationDate(this.message.tags[UnderlyingOptionExerciseExpirationDate.Tag]);
};

/* field */
UnderlyingOptionExerciseExpirationDateGrp.prototype.underlyingOptionExerciseExpirationDateType = function () {
  return new UnderlyingOptionExerciseExpirationDateType(this.message.tags[UnderlyingOptionExerciseExpirationDateType.Tag]);
};

/* end group */

UnderlyingOptionExerciseExpirationDateGrp.Tag = '41856';

module.exports = UnderlyingOptionExerciseExpirationDateGrp;