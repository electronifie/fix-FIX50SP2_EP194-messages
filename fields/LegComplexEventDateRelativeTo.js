var invert = require('invert-obj');

function LegComplexEventDateRelativeTo (legComplexEventDateRelativeTo) {
  this.message = legComplexEventDateRelativeTo;
}

LegComplexEventDateRelativeTo.prototype.value = function () {
  return this.message;
};

LegComplexEventDateRelativeTo.Tag = '41390';

LegComplexEventDateRelativeTo.Type = 'INT';

module.exports = LegComplexEventDateRelativeTo;