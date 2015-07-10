var invert = require('invert-obj');

function PublishTrdIndicator (publishTrdIndicator) {
  this.message = publishTrdIndicator;
}

PublishTrdIndicator.prototype.value = function () {
  return this.message;
};


PublishTrdIndicator.Keys = {
  DO_NOT_REPORT_TRADE: 'N',
  REPORT_TRADE: 'Y',
};

PublishTrdIndicator.Tag = '852';

PublishTrdIndicator.Type = 'BOOLEAN';

PublishTrdIndicator.Values = invert(PublishTrdIndicator.Keys);

module.exports = PublishTrdIndicator;