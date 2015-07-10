var invert = require('invert-obj');

function SettlDisruptionProvision (settlDisruptionProvision) {
  this.message = settlDisruptionProvision;
}

SettlDisruptionProvision.prototype.value = function () {
  return this.message;
};


SettlDisruptionProvision.Keys = {
  NEGOTIATION: '1',
  CANCELLATION_AND_PAYMENT: '2',
};

SettlDisruptionProvision.Tag = '2143';

SettlDisruptionProvision.Type = 'INT';

SettlDisruptionProvision.Values = invert(SettlDisruptionProvision.Keys);

module.exports = SettlDisruptionProvision;