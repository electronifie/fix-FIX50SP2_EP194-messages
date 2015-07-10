var invert = require('invert-obj');

function LegListMethod (legListMethod) {
  this.message = legListMethod;
}

LegListMethod.prototype.value = function () {
  return this.message;
};

LegListMethod.Tag = '2199';

LegListMethod.Type = 'INT';

module.exports = LegListMethod;