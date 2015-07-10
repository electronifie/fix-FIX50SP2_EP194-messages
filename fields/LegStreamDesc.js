var invert = require('invert-obj');

function LegStreamDesc (legStreamDesc) {
  this.message = legStreamDesc;
}

LegStreamDesc.prototype.value = function () {
  return this.message;
};

LegStreamDesc.Tag = '40243';

LegStreamDesc.Type = 'STRING';

module.exports = LegStreamDesc;