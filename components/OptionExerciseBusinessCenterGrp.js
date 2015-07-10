var NoOptionExerciseBusinessCenters = require('../fields/NoOptionExerciseBusinessCenters');
var OptionExerciseBusinessCenter = require('../fields/OptionExerciseBusinessCenter');

function OptionExerciseBusinessCenterGrp (optionExerciseBusinessCenterGrp) {
  this.message = optionExerciseBusinessCenterGrp;
}

/* group */

/* field */
OptionExerciseBusinessCenterGrp.prototype.optionExerciseBusinessCenter = function () {
  return new OptionExerciseBusinessCenter(this.message.tags[OptionExerciseBusinessCenter.Tag]);
};

/* end group */

OptionExerciseBusinessCenterGrp.Tag = '41116';

module.exports = OptionExerciseBusinessCenterGrp;