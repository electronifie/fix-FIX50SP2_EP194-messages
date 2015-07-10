var invert = require('invert-obj');

function LegObligationType (legObligationType) {
  this.message = legObligationType;
}

LegObligationType.prototype.value = function () {
  return this.message;
};

LegObligationType.Tag = '2155';

LegObligationType.Type = 'STRING';

module.exports = LegObligationType;