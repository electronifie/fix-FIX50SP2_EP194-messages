var invert = require('invert-obj');

function ImpliedMarketIndicator (impliedMarketIndicator) {
  this.message = impliedMarketIndicator;
}

ImpliedMarketIndicator.prototype.value = function () {
  return this.message;
};


ImpliedMarketIndicator.Keys = {
  NOT_IMPLIED: '0',
  IMPLIED_IN_THE_EXISTENCE_OF_A_MULTI_LEG_INSTRUMENT_IS_IMPLIED_BY_THE_LEGS_OF_THAT_INSTRUMENT: '1',
  IMPLIED_OUT_THE_EXISTENCE_OF_THE_UNDERLYING_LEGS_ARE_IMPLIED_BY_THE_MULTI_LEG_INSTRUMENT: '2',
  BOTH_IMPLIED_IN_AND_IMPLIED_OUT: '3',
};

ImpliedMarketIndicator.Tag = '1144';

ImpliedMarketIndicator.Type = 'INT';

ImpliedMarketIndicator.Values = invert(ImpliedMarketIndicator.Keys);

module.exports = ImpliedMarketIndicator;