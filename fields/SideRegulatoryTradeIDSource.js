var invert = require('invert-obj');

function SideRegulatoryTradeIDSource (sideRegulatoryTradeIdsource) {
  this.message = sideRegulatoryTradeIdsource;
}

SideRegulatoryTradeIDSource.prototype.value = function () {
  return this.message;
};

SideRegulatoryTradeIDSource.Tag = '1973';

SideRegulatoryTradeIDSource.Type = 'STRING';

module.exports = SideRegulatoryTradeIDSource;