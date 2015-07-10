var invert = require('invert-obj');

function RegulatoryTradeIDSource (regulatoryTradeIdsource) {
  this.message = regulatoryTradeIdsource;
}

RegulatoryTradeIDSource.prototype.value = function () {
  return this.message;
};

RegulatoryTradeIDSource.Tag = '1905';

RegulatoryTradeIDSource.Type = 'STRING';

module.exports = RegulatoryTradeIDSource;