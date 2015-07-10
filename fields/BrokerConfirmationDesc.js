var invert = require('invert-obj');

function BrokerConfirmationDesc (brokerConfirmationDesc) {
  this.message = brokerConfirmationDesc;
}

BrokerConfirmationDesc.prototype.value = function () {
  return this.message;
};

BrokerConfirmationDesc.Tag = '1966';

BrokerConfirmationDesc.Type = 'STRING';

module.exports = BrokerConfirmationDesc;