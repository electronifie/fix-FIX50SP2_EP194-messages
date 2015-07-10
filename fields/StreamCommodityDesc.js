var invert = require('invert-obj');

function StreamCommodityDesc (streamCommodityDesc) {
  this.message = streamCommodityDesc;
}

StreamCommodityDesc.prototype.value = function () {
  return this.message;
};

StreamCommodityDesc.Tag = '41255';

StreamCommodityDesc.Type = 'STRING';

module.exports = StreamCommodityDesc;