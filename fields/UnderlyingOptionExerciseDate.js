var invert = require('invert-obj');

function UnderlyingOptionExerciseDate (underlyingOptionExerciseDate) {
  this.message = underlyingOptionExerciseDate;
}

UnderlyingOptionExerciseDate.prototype.value = function () {
  return this.message;
};

UnderlyingOptionExerciseDate.Tag = '41842';

UnderlyingOptionExerciseDate.Type = 'LOCALMKTDATE';

module.exports = UnderlyingOptionExerciseDate;