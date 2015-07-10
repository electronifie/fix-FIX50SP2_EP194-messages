var invert = require('invert-obj');

function LegInstrmtAssignmentMethod (legInstrmtAssignmentMethod) {
  this.message = legInstrmtAssignmentMethod;
}

LegInstrmtAssignmentMethod.prototype.value = function () {
  return this.message;
};

LegInstrmtAssignmentMethod.Tag = '2147';

LegInstrmtAssignmentMethod.Type = 'CHAR';

module.exports = LegInstrmtAssignmentMethod;