var invert = require('invert-obj');

function DeskType (deskType) {
  this.message = deskType;
}

DeskType.prototype.value = function () {
  return this.message;
};


DeskType.Keys = {
  AGENCY: 'A',
  ARBITRAGE: 'AR',
  BLOCK_TRADING: 'B',
  CONVERTIBLE_DESK: 'C',
  CENTRAL_RISK_BOOKS: 'CR',
  DERIVATIVES: 'D',
  EQUITY_CAPITAL_MARKETS: 'EC',
  INTERNATIONAL: 'IN',
  INSTITUTIONAL: 'IS',
  OTHER: 'O',
  PREFERRED_TRADING: 'PF',
  PROPRIETARY: 'PR',
  PROGRAM_TRADING: 'PT',
  SALES: 'S',
  SWAPS: 'SW',
  TRADING_DESK_OR_SYSTEM_NON_MARKET_MAKER: 'T',
  TREASURY: 'TR',
};

DeskType.Tag = '1033';

DeskType.Type = 'STRING';

DeskType.Values = invert(DeskType.Keys);

module.exports = DeskType;