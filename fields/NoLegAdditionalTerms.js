var invert = require('invert-obj');

function NoLegAdditionalTerms (noLegAdditionalTerms) {
  this.message = noLegAdditionalTerms;
}

NoLegAdditionalTerms.prototype.value = function () {
  return this.message;
};

NoLegAdditionalTerms.Tag = '41335';

NoLegAdditionalTerms.Type = 'NUMINGROUP';

module.exports = NoLegAdditionalTerms;