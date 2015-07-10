var invert = require('invert-obj');

function UnderlyingAssignmentMethod (underlyingAssignmentMethod) {
  this.message = underlyingAssignmentMethod;
}

UnderlyingAssignmentMethod.prototype.value = function () {
  return this.message;
};

UnderlyingAssignmentMethod.Tag = '2010';

UnderlyingAssignmentMethod.Type = 'CHAR';

module.exports = UnderlyingAssignmentMethod;