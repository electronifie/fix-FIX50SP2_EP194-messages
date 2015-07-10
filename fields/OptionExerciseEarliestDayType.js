var invert = require('invert-obj');

function OptionExerciseEarliestDayType (optionExerciseEarliestDayType) {
  this.message = optionExerciseEarliestDayType;
}

OptionExerciseEarliestDayType.prototype.value = function () {
  return this.message;
};

OptionExerciseEarliestDayType.Tag = '41119';

OptionExerciseEarliestDayType.Type = 'INT';

module.exports = OptionExerciseEarliestDayType;