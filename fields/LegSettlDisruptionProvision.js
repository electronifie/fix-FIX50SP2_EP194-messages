var invert = require('invert-obj');

function LegSettlDisruptionProvision (legSettlDisruptionProvision) {
  this.message = legSettlDisruptionProvision;
}

LegSettlDisruptionProvision.prototype.value = function () {
  return this.message;
};

LegSettlDisruptionProvision.Tag = '2213';

LegSettlDisruptionProvision.Type = 'INT';

module.exports = LegSettlDisruptionProvision;