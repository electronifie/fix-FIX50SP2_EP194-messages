var invert = require('invert-obj');

function LegContractMultiplierUnit (legContractMultiplierUnit) {
  this.message = legContractMultiplierUnit;
}

LegContractMultiplierUnit.prototype.value = function () {
  return this.message;
};

LegContractMultiplierUnit.Tag = '1436';

LegContractMultiplierUnit.Type = 'INT';

module.exports = LegContractMultiplierUnit;