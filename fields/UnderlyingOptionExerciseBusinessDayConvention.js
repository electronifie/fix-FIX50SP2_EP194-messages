var invert = require('invert-obj');

function UnderlyingOptionExerciseBusinessDayConvention (underlyingOptionExerciseBusinessDayConvention) {
  this.message = underlyingOptionExerciseBusinessDayConvention;
}

UnderlyingOptionExerciseBusinessDayConvention.prototype.value = function () {
  return this.message;
};

UnderlyingOptionExerciseBusinessDayConvention.Tag = '41822';

UnderlyingOptionExerciseBusinessDayConvention.Type = 'INT';

module.exports = UnderlyingOptionExerciseBusinessDayConvention;