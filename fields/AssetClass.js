var invert = require('invert-obj');

function AssetClass (assetClass) {
  this.message = assetClass;
}

AssetClass.prototype.value = function () {
  return this.message;
};


AssetClass.Keys = {
  INTEREST_RATE: '1',
  CURRENCY: '2',
  CREDIT: '3',
  EQUITY: '4',
  COMMODITY: '5',
  OTHER: '6',
  CASH: '7',
  DEBT: '8',
  FUND: '9',
  LOAN_FACILITY: '10',
};

AssetClass.Tag = '1938';

AssetClass.Type = 'INT';

AssetClass.Values = invert(AssetClass.Keys);

module.exports = AssetClass;