var invert = require('invert-obj');

function NoAdditionalTerms (noAdditionalTerms) {
  this.message = noAdditionalTerms;
}

NoAdditionalTerms.prototype.value = function () {
  return this.message;
};

NoAdditionalTerms.Tag = '40019';

NoAdditionalTerms.Type = 'NUMINGROUP';

module.exports = NoAdditionalTerms;