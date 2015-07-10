var invert = require('invert-obj');

function ExerciseSplitTicketIndicator (exerciseSplitTicketIndicator) {
  this.message = exerciseSplitTicketIndicator;
}

ExerciseSplitTicketIndicator.prototype.value = function () {
  return this.message;
};

ExerciseSplitTicketIndicator.Tag = '41115';

ExerciseSplitTicketIndicator.Type = 'BOOLEAN';

module.exports = ExerciseSplitTicketIndicator;