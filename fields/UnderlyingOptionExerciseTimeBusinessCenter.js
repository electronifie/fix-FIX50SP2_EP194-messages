var invert = require('invert-obj');

function UnderlyingOptionExerciseTimeBusinessCenter (underlyingOptionExerciseTimeBusinessCenter) {
  this.message = underlyingOptionExerciseTimeBusinessCenter;
}

UnderlyingOptionExerciseTimeBusinessCenter.prototype.value = function () {
  return this.message;
};

UnderlyingOptionExerciseTimeBusinessCenter.Tag = '41840';

UnderlyingOptionExerciseTimeBusinessCenter.Type = 'STRING';

module.exports = UnderlyingOptionExerciseTimeBusinessCenter;