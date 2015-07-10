var invert = require('invert-obj');

function UnderlyingConstituentWeight (underlyingConstituentWeight) {
  this.message = underlyingConstituentWeight;
}

UnderlyingConstituentWeight.prototype.value = function () {
  return this.message;
};

UnderlyingConstituentWeight.Tag = '1988';

UnderlyingConstituentWeight.Type = 'FLOAT';

module.exports = UnderlyingConstituentWeight;