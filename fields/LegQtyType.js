var invert = require('invert-obj');

function LegQtyType (legQtyType) {
  this.message = legQtyType;
}

LegQtyType.prototype.value = function () {
  return this.message;
};

LegQtyType.Tag = '1591';

LegQtyType.Type = 'INT';

module.exports = LegQtyType;