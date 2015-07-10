var invert = require('invert-obj');

function LegOptionExerciseEarliestDayType (legOptionExerciseEarliestDayType) {
  this.message = legOptionExerciseEarliestDayType;
}

LegOptionExerciseEarliestDayType.prototype.value = function () {
  return this.message;
};

LegOptionExerciseEarliestDayType.Tag = '41494';

LegOptionExerciseEarliestDayType.Type = 'INT';

module.exports = LegOptionExerciseEarliestDayType;