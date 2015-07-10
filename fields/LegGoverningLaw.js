var invert = require('invert-obj');

function LegGoverningLaw (legGoverningLaw) {
  this.message = legGoverningLaw;
}

LegGoverningLaw.prototype.value = function () {
  return this.message;
};

LegGoverningLaw.Tag = '2507';

LegGoverningLaw.Type = 'STRING';

module.exports = LegGoverningLaw;