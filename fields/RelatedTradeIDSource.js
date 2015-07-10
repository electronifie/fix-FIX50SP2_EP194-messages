var invert = require('invert-obj');

function RelatedTradeIDSource (relatedTradeIdsource) {
  this.message = relatedTradeIdsource;
}

RelatedTradeIDSource.prototype.value = function () {
  return this.message;
};


RelatedTradeIDSource.Keys = {
  NON_FIX_SOURCE: '0',
  TRADE_ID: '1',
  SECONDARY_TRADE_ID: '2',
  TRADE_REPORT_ID: '3',
  FIRM_TRADE_ID: '4',
  SECONDARY_FIRM_TRADE_ID: '5',
  REGULATORY_TRADE_ID: '6',
};

RelatedTradeIDSource.Tag = '1857';

RelatedTradeIDSource.Type = 'INT';

RelatedTradeIDSource.Values = invert(RelatedTradeIDSource.Keys);

module.exports = RelatedTradeIDSource;