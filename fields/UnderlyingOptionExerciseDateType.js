var invert = require('invert-obj');

function UnderlyingOptionExerciseDateType (underlyingOptionExerciseDateType) {
  this.message = underlyingOptionExerciseDateType;
}

UnderlyingOptionExerciseDateType.prototype.value = function () {
  return this.message;
};

UnderlyingOptionExerciseDateType.Tag = '41843';

UnderlyingOptionExerciseDateType.Type = 'INT';

module.exports = UnderlyingOptionExerciseDateType;