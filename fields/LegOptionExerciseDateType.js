var invert = require('invert-obj');

function LegOptionExerciseDateType (legOptionExerciseDateType) {
  this.message = legOptionExerciseDateType;
}

LegOptionExerciseDateType.prototype.value = function () {
  return this.message;
};

LegOptionExerciseDateType.Tag = '41514';

LegOptionExerciseDateType.Type = 'INT';

module.exports = LegOptionExerciseDateType;