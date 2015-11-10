var invert = require('invert-obj');

function AssetSubClass (assetSubClass) {
  this.message = assetSubClass;
}

AssetSubClass.prototype.value = function () {
  return this.message;
};


AssetSubClass.Keys = {
  'SINGLE_CURRENCY': '1',
  'CROSS_CURRENCY': '2',
  'BASKET_FOR_MULTI_CURRENCY_': '3',
  'SINGLE_NAME': '4',
  'CREDIT_INDEX': '5',
  'INDEX_TRANCHE': '6',
  'CREDIT_BASKET': '7',
  'EXOTIC': '8',
  'COMMON': '9',
  'PREFERRED': '10',
  'EQUITY_INDEX': '11',
  'EQUITY_BASKET': '12',
  'METALS': '13',
  'BULLION': '14',
  'ENERGY': '15',
  'COMMODITY_INDEX': '16',
  'AGRICULTURAL': '17',
  'ENVIRONMENTAL': '18',
  'FREIGHT': '19',
  'GOVERNMENT': '20',
  'AGENCY': '21',
  'CORPORATE': '22',
  'FINANCING': '23',
  'MONEY_MARKET': '24',
  'MORTGAGE': '25',
  'MUNICIPAL': '26',
  'MUTUAL_FUND': '27',
  'COLLECTIVE_INVESTMENT_VEHICLE': '28',
  'INVESTMENT_PROGRAM': '29',
  'SPECIALIZED_ACCOUNT_PROGRAM': '30',
  'TERM_LOAN': '31',
  'BRIDGE_LOAN': '32',
  'LETTER_OF_CREDIT': '33',
};

AssetSubClass.Tag = '1939';

AssetSubClass.Type = 'INT';

AssetSubClass.Values = invert(AssetSubClass.Keys);

module.exports = AssetSubClass;