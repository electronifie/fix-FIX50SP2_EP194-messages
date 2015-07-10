var invert = require('invert-obj');

function SettlType (settlType) {
  this.message = settlType;
}

SettlType.prototype.value = function () {
  return this.message;
};


SettlType.Keys = {
  REGULAR_FX_SPOT_SETTLEMENT: '0',
  CASH: '1',
  NEXT_DAY: '2',
  T_2: '3',
  T_3: '4',
  T_4: '5',
  FUTURE: '6',
  WHEN_AND_IF_ISSUED: '7',
  SELLERS_OPTION: '8',
  T_5: '9',
  BROKEN_DATE: 'B',
  FX_SPOT_NEXT_SETTLEMENT: 'C',
};

SettlType.Tag = '63';

SettlType.Type = 'STRING';

SettlType.Values = invert(SettlType.Keys);

module.exports = SettlType;