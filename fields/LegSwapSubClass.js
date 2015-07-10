var invert = require('invert-obj');

function LegSwapSubClass (legSwapSubClass) {
  this.message = legSwapSubClass;
}

LegSwapSubClass.prototype.value = function () {
  return this.message;
};

LegSwapSubClass.Tag = '2156';

LegSwapSubClass.Type = 'STRING';

module.exports = LegSwapSubClass;