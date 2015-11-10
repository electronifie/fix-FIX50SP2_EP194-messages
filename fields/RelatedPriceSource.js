var invert = require('invert-obj');

function RelatedPriceSource (relatedPriceSource) {
  this.message = relatedPriceSource;
}

RelatedPriceSource.prototype.value = function () {
  return this.message;
};


RelatedPriceSource.Keys = {
  'NBB': '1',
  'NBO': '2',
};

RelatedPriceSource.Tag = '1821';

RelatedPriceSource.Type = 'INT';

RelatedPriceSource.Values = invert(RelatedPriceSource.Keys);

module.exports = RelatedPriceSource;