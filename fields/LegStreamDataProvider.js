var invert = require('invert-obj');

function LegStreamDataProvider (legStreamDataProvider) {
  this.message = legStreamDataProvider;
}

LegStreamDataProvider.prototype.value = function () {
  return this.message;
};

LegStreamDataProvider.Tag = '41661';

LegStreamDataProvider.Type = 'STRING';

module.exports = LegStreamDataProvider;