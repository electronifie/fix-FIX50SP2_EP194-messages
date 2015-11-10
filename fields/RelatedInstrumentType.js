var invert = require('invert-obj');

function RelatedInstrumentType (relatedInstrumentType) {
  this.message = relatedInstrumentType;
}

RelatedInstrumentType.prototype.value = function () {
  return this.message;
};


RelatedInstrumentType.Keys = {
  'HEDGES_FOR_INSTRUMENT': '1',
  'UNDERLIER': '2',
  'EQUITY_EQUIVALENT': '3',
  'NEAREST_EXCHANGE_TRADED_CONTRACT': '4',
};

RelatedInstrumentType.Tag = '1648';

RelatedInstrumentType.Type = 'INT';

RelatedInstrumentType.Values = invert(RelatedInstrumentType.Keys);

module.exports = RelatedInstrumentType;