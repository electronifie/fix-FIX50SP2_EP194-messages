var invert = require('invert-obj');

function UnderlyingContractMultiplierUnit (underlyingContractMultiplierUnit) {
  this.message = underlyingContractMultiplierUnit;
}

UnderlyingContractMultiplierUnit.prototype.value = function () {
  return this.message;
};

UnderlyingContractMultiplierUnit.Tag = '1437';

UnderlyingContractMultiplierUnit.Type = 'INT';

module.exports = UnderlyingContractMultiplierUnit;