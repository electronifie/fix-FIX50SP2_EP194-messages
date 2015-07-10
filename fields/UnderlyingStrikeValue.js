var invert = require('invert-obj');

function UnderlyingStrikeValue (underlyingStrikeValue) {
  this.message = underlyingStrikeValue;
}

UnderlyingStrikeValue.prototype.value = function () {
  return this.message;
};

UnderlyingStrikeValue.Tag = '2022';

UnderlyingStrikeValue.Type = 'FLOAT';

module.exports = UnderlyingStrikeValue;