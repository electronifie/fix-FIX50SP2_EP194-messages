var invert = require('invert-obj');

function RiskInstrumentMultiplier (riskInstrumentMultiplier) {
  this.message = riskInstrumentMultiplier;
}

RiskInstrumentMultiplier.prototype.value = function () {
  return this.message;
};

RiskInstrumentMultiplier.Tag = '1558';

RiskInstrumentMultiplier.Type = 'FLOAT';

module.exports = RiskInstrumentMultiplier;