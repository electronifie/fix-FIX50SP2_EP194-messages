var invert = require('invert-obj');

function AllocRegulatoryTradeIDSource (allocRegulatoryTradeIdsource) {
  this.message = allocRegulatoryTradeIdsource;
}

AllocRegulatoryTradeIDSource.prototype.value = function () {
  return this.message;
};

AllocRegulatoryTradeIDSource.Tag = '1910';

AllocRegulatoryTradeIDSource.Type = 'STRING';

module.exports = AllocRegulatoryTradeIDSource;