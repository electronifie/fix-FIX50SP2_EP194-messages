var invert = require('invert-obj');

function TaxonomyType (taxonomyType) {
  this.message = taxonomyType;
}

TaxonomyType.prototype.value = function () {
  return this.message;
};


TaxonomyType.Keys = {
  ISIN_OR_ALTERNATE_INSTRUMENT_IDENTIFIER_PLUS_CFI: 'I',
  INTERIM_TAXONOMY: 'E',
};

TaxonomyType.Tag = '2375';

TaxonomyType.Type = 'CHAR';

TaxonomyType.Values = invert(TaxonomyType.Keys);

module.exports = TaxonomyType;