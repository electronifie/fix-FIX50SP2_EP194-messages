var invert = require('invert-obj');

function LegPaymentStreamInflationPublicationSource (legPaymentStreamInflationPublicationSource) {
  this.message = legPaymentStreamInflationPublicationSource;
}

LegPaymentStreamInflationPublicationSource.prototype.value = function () {
  return this.message;
};

LegPaymentStreamInflationPublicationSource.Tag = '40355';

LegPaymentStreamInflationPublicationSource.Type = 'STRING';

module.exports = LegPaymentStreamInflationPublicationSource;