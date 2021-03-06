var invert = require('invert-obj');

function StrategyParameterType (strategyParameterType) {
  this.message = strategyParameterType;
}

StrategyParameterType.prototype.value = function () {
  return this.message;
};


StrategyParameterType.Keys = {
  'INT': '1',
  'LENGTH': '2',
  'NUMINGROUP': '3',
  'SEQNUM': '4',
  'TAGNUM': '5',
  'FLOAT': '6',
  'QTY': '7',
  'PRICE': '8',
  'PRICEOFFSET': '9',
  'AMT': '10',
  'PERCENTAGE': '11',
  'CHAR': '12',
  'BOOLEAN': '13',
  'STRING': '14',
  'MULTIPLECHARVALUE': '15',
  'CURRENCY': '16',
  'EXCHANGE': '17',
  'MONTHYEAR': '18',
  'UTCTIMESTAMP': '19',
  'UTCTIMEONLY': '20',
  'LOCALMKTDATE': '21',
  'UTCDATEONLY': '22',
  'DATA': '23',
  'MULTIPLESTRINGVALUE': '24',
  'COUNTRY': '25',
  'LANGUAGE': '26',
  'TZTIMEONLY': '27',
  'TZTIMESTAMP': '28',
  'TENOR': '29',
};

StrategyParameterType.Tag = '959';

StrategyParameterType.Type = 'INT';

StrategyParameterType.Values = invert(StrategyParameterType.Keys);

module.exports = StrategyParameterType;