var invert = require('invert-obj');

function LegOptionExerciseExpirationDateBusinessCenter (legOptionExerciseExpirationDateBusinessCenter) {
  this.message = legOptionExerciseExpirationDateBusinessCenter;
}

LegOptionExerciseExpirationDateBusinessCenter.prototype.value = function () {
  return this.message;
};

LegOptionExerciseExpirationDateBusinessCenter.Tag = '41516';

LegOptionExerciseExpirationDateBusinessCenter.Type = 'STRING';

module.exports = LegOptionExerciseExpirationDateBusinessCenter;