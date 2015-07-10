var invert = require('invert-obj');

function NoUnderlyingAdditionalTerms (noUnderlyingAdditionalTerms) {
  this.message = noUnderlyingAdditionalTerms;
}

NoUnderlyingAdditionalTerms.prototype.value = function () {
  return this.message;
};

NoUnderlyingAdditionalTerms.Tag = '42036';

NoUnderlyingAdditionalTerms.Type = 'NUMINGROUP';

module.exports = NoUnderlyingAdditionalTerms;