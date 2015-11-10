var invert = require('invert-obj');

function InstrmtAssignmentMethod (instrmtAssignmentMethod) {
  this.message = instrmtAssignmentMethod;
}

InstrmtAssignmentMethod.prototype.value = function () {
  return this.message;
};


InstrmtAssignmentMethod.Keys = {
  'PRO_RATA': 'P',
  'RANDOM': 'R',
};

InstrmtAssignmentMethod.Tag = '1049';

InstrmtAssignmentMethod.Type = 'CHAR';

InstrmtAssignmentMethod.Values = invert(InstrmtAssignmentMethod.Keys);

module.exports = InstrmtAssignmentMethod;