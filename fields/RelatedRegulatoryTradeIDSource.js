var invert = require('invert-obj');

function RelatedRegulatoryTradeIDSource (relatedRegulatoryTradeIdsource) {
  this.message = relatedRegulatoryTradeIdsource;
}

RelatedRegulatoryTradeIDSource.prototype.value = function () {
  return this.message;
};

RelatedRegulatoryTradeIDSource.Tag = '2103';

RelatedRegulatoryTradeIDSource.Type = 'STRING';

module.exports = RelatedRegulatoryTradeIDSource;