var invert = require('invert-obj');

function StreamCommodityAltID (streamCommodityAltId) {
  this.message = streamCommodityAltId;
}

StreamCommodityAltID.prototype.value = function () {
  return this.message;
};

StreamCommodityAltID.Tag = '41278';

StreamCommodityAltID.Type = 'STRING';

module.exports = StreamCommodityAltID;