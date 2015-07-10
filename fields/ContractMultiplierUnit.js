var invert = require('invert-obj');

function ContractMultiplierUnit (contractMultiplierUnit) {
  this.message = contractMultiplierUnit;
}

ContractMultiplierUnit.prototype.value = function () {
  return this.message;
};


ContractMultiplierUnit.Keys = {
  SHARES: '0',
  HOURS: '1',
  DAYS: '2',
};

ContractMultiplierUnit.Tag = '1435';

ContractMultiplierUnit.Type = 'INT';

ContractMultiplierUnit.Values = invert(ContractMultiplierUnit.Keys);

module.exports = ContractMultiplierUnit;