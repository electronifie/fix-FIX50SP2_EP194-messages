var invert = require('invert-obj');

function DerivativeContractMultiplierUnit (derivativeContractMultiplierUnit) {
  this.message = derivativeContractMultiplierUnit;
}

DerivativeContractMultiplierUnit.prototype.value = function () {
  return this.message;
};

DerivativeContractMultiplierUnit.Tag = '1438';

DerivativeContractMultiplierUnit.Type = 'INT';

module.exports = DerivativeContractMultiplierUnit;