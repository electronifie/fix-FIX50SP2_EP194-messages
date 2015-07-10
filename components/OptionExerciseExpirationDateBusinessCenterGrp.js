var NoOptionExerciseExpirationDateBusinessCenters = require('../fields/NoOptionExerciseExpirationDateBusinessCenters');
var OptionExerciseExpirationDateBusinessCenter = require('../fields/OptionExerciseExpirationDateBusinessCenter');

function OptionExerciseExpirationDateBusinessCenterGrp (optionExerciseExpirationDateBusinessCenterGrp) {
  this.message = optionExerciseExpirationDateBusinessCenterGrp;
}

/* group */

/* field */
OptionExerciseExpirationDateBusinessCenterGrp.prototype.optionExerciseExpirationDateBusinessCenter = function () {
  return new OptionExerciseExpirationDateBusinessCenter(this.message.tags[OptionExerciseExpirationDateBusinessCenter.Tag]);
};

/* end group */

OptionExerciseExpirationDateBusinessCenterGrp.Tag = '41140';

module.exports = OptionExerciseExpirationDateBusinessCenterGrp;