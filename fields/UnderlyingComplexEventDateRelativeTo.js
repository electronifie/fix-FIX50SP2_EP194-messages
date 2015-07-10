var invert = require('invert-obj');

function UnderlyingComplexEventDateRelativeTo (underlyingComplexEventDateRelativeTo) {
  this.message = underlyingComplexEventDateRelativeTo;
}

UnderlyingComplexEventDateRelativeTo.prototype.value = function () {
  return this.message;
};

UnderlyingComplexEventDateRelativeTo.Tag = '41740';

UnderlyingComplexEventDateRelativeTo.Type = 'INT';

module.exports = UnderlyingComplexEventDateRelativeTo;