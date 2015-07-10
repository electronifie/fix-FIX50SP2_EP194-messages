var invert = require('invert-obj');

function UnderlyingOptionExerciseBusinessCenter (underlyingOptionExerciseBusinessCenter) {
  this.message = underlyingOptionExerciseBusinessCenter;
}

UnderlyingOptionExerciseBusinessCenter.prototype.value = function () {
  return this.message;
};

UnderlyingOptionExerciseBusinessCenter.Tag = '41821';

UnderlyingOptionExerciseBusinessCenter.Type = 'STRING';

module.exports = UnderlyingOptionExerciseBusinessCenter;