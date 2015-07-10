var invert = require('invert-obj');

function LegSeniority (legSeniority) {
  this.message = legSeniority;
}

LegSeniority.prototype.value = function () {
  return this.message;
};

LegSeniority.Tag = '2150';

LegSeniority.Type = 'STRING';

module.exports = LegSeniority;