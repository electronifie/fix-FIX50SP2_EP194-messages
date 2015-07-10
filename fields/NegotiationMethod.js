var invert = require('invert-obj');

function NegotiationMethod (negotiationMethod) {
  this.message = negotiationMethod;
}

NegotiationMethod.prototype.value = function () {
  return this.message;
};


NegotiationMethod.Keys = {
  AUTO_SPOT: '0',
  NEGOTIATED_SPOT: '1',
  PHONE_SPOT: '2',
};

NegotiationMethod.Tag = '2115';

NegotiationMethod.Type = 'INT';

NegotiationMethod.Values = invert(NegotiationMethod.Keys);

module.exports = NegotiationMethod;