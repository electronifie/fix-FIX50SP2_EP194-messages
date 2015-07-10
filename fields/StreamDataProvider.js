var invert = require('invert-obj');

function StreamDataProvider (streamDataProvider) {
  this.message = streamDataProvider;
}

StreamDataProvider.prototype.value = function () {
  return this.message;
};

StreamDataProvider.Tag = '41264';

StreamDataProvider.Type = 'STRING';

module.exports = StreamDataProvider;