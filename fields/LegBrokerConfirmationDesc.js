var invert = require('invert-obj');

function LegBrokerConfirmationDesc (legBrokerConfirmationDesc) {
  this.message = legBrokerConfirmationDesc;
}

LegBrokerConfirmationDesc.prototype.value = function () {
  return this.message;
};

LegBrokerConfirmationDesc.Tag = '2500';

LegBrokerConfirmationDesc.Type = 'STRING';

module.exports = LegBrokerConfirmationDesc;