var invert = require('invert-obj');

function RelativeValue (relativeValue) {
  this.message = relativeValue;
}

RelativeValue.prototype.value = function () {
  return this.message;
};

RelativeValue.Tag = '2531';

RelativeValue.Type = 'FLOAT';

module.exports = RelativeValue;