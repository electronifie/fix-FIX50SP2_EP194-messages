var invert = require('invert-obj');

function StrategyLinkID (strategyLinkId) {
  this.message = strategyLinkId;
}

StrategyLinkID.prototype.value = function () {
  return this.message;
};

StrategyLinkID.Tag = '1851';

StrategyLinkID.Type = 'STRING';

module.exports = StrategyLinkID;