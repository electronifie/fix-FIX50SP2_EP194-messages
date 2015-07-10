var invert = require('invert-obj');

function SettlRateFallbackReferencePage (settlRateFallbackReferencePage) {
  this.message = settlRateFallbackReferencePage;
}

SettlRateFallbackReferencePage.prototype.value = function () {
  return this.message;
};

SettlRateFallbackReferencePage.Tag = '40655';

SettlRateFallbackReferencePage.Type = 'STRING';

module.exports = SettlRateFallbackReferencePage;