var invert = require('invert-obj');

function IOIQualifier (ioiqualifier) {
  this.message = ioiqualifier;
}

IOIQualifier.prototype.value = function () {
  return this.message;
};


IOIQualifier.Keys = {
  'ALL_OR_NONE': 'A',
  'MARKET_ON_CLOSE': 'B',
  'AT_THE_CLOSE': 'C',
  'VWAP': 'D',
  'IN_TOUCH_WITH': 'I',
  'LIMIT': 'L',
  'MORE_BEHIND': 'M',
  'AT_THE_OPEN': 'O',
  'TAKING_A_POSITION': 'P',
  'AT_THE_MARKET': 'Q',
  'READY_TO_TRADE': 'R',
  'INVENTORY_OR_PORTFOLIO_SHOWN': 'S',
  'THROUGH_THE_DAY': 'T',
  'VERSUS': 'V',
  'INDICATION_WORKING_AWAY': 'W',
  'CROSSING_OPPORTUNITY': 'X',
  'AT_THE_MIDPOINT': 'Y',
  'PRE_OPEN': 'Z',
  'AXE': 'E',
  'AXE_ON_BID': 'F',
  'AXE_ON_OFFER': 'G',
};

IOIQualifier.Tag = '104';

IOIQualifier.Type = 'CHAR';

IOIQualifier.Values = invert(IOIQualifier.Keys);

module.exports = IOIQualifier;