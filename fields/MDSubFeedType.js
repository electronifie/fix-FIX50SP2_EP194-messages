var invert = require('invert-obj');

function MDSubFeedType (mdsubFeedType) {
  this.message = mdsubFeedType;
}

MDSubFeedType.prototype.value = function () {
  return this.message;
};

MDSubFeedType.Tag = '1683';

MDSubFeedType.Type = 'STRING';

module.exports = MDSubFeedType;