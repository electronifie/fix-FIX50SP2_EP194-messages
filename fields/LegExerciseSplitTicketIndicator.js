var invert = require('invert-obj');

function LegExerciseSplitTicketIndicator (legExerciseSplitTicketIndicator) {
  this.message = legExerciseSplitTicketIndicator;
}

LegExerciseSplitTicketIndicator.prototype.value = function () {
  return this.message;
};

LegExerciseSplitTicketIndicator.Tag = '41490';

LegExerciseSplitTicketIndicator.Type = 'BOOLEAN';

module.exports = LegExerciseSplitTicketIndicator;