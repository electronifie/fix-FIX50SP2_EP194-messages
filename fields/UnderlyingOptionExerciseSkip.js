var invert = require('invert-obj');

function UnderlyingOptionExerciseSkip (underlyingOptionExerciseSkip) {
  this.message = underlyingOptionExerciseSkip;
}

UnderlyingOptionExerciseSkip.prototype.value = function () {
  return this.message;
};

UnderlyingOptionExerciseSkip.Tag = '41834';

UnderlyingOptionExerciseSkip.Type = 'INT';

module.exports = UnderlyingOptionExerciseSkip;