var NoOptionExerciseExpirationDates = require('../fields/NoOptionExerciseExpirationDates');
var OptionExerciseExpirationDate = require('../fields/OptionExerciseExpirationDate');
var OptionExerciseExpirationDateType = require('../fields/OptionExerciseExpirationDateType');

function OptionExerciseExpirationDateGrp (optionExerciseExpirationDateGrp) {
  this.message = optionExerciseExpirationDateGrp;
}

/* group */

/* field */
OptionExerciseExpirationDateGrp.prototype.optionExerciseExpirationDate = function () {
  return new OptionExerciseExpirationDate(this.message.tags[OptionExerciseExpirationDate.Tag]);
};

/* field */
OptionExerciseExpirationDateGrp.prototype.optionExerciseExpirationDateType = function () {
  return new OptionExerciseExpirationDateType(this.message.tags[OptionExerciseExpirationDateType.Tag]);
};

/* end group */

OptionExerciseExpirationDateGrp.Tag = '41152';

module.exports = OptionExerciseExpirationDateGrp;