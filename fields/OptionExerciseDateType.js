var invert = require('invert-obj');

function OptionExerciseDateType (optionExerciseDateType) {
  this.message = optionExerciseDateType;
}

OptionExerciseDateType.prototype.value = function () {
  return this.message;
};


OptionExerciseDateType.Keys = {
  UNADJUSTED: '0',
  ADJUSTED: '1',
};

OptionExerciseDateType.Tag = '41139';

OptionExerciseDateType.Type = 'INT';

OptionExerciseDateType.Values = invert(OptionExerciseDateType.Keys);

module.exports = OptionExerciseDateType;