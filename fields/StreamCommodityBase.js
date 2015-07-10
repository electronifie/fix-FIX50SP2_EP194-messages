var invert = require('invert-obj');

function StreamCommodityBase (streamCommodityBase) {
  this.message = streamCommodityBase;
}

StreamCommodityBase.prototype.value = function () {
  return this.message;
};

StreamCommodityBase.Tag = '41251';

StreamCommodityBase.Type = 'STRING';

module.exports = StreamCommodityBase;