var invert = require('invert-obj');

function UnderlyingExerciseSplitTicketIndicator (underlyingExerciseSplitTicketIndicator) {
  this.message = underlyingExerciseSplitTicketIndicator;
}

UnderlyingExerciseSplitTicketIndicator.prototype.value = function () {
  return this.message;
};

UnderlyingExerciseSplitTicketIndicator.Tag = '41819';

UnderlyingExerciseSplitTicketIndicator.Type = 'BOOLEAN';

module.exports = UnderlyingExerciseSplitTicketIndicator;