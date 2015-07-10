var invert = require('invert-obj');

function StreamCommoditySecurityID (streamCommoditySecurityId) {
  this.message = streamCommoditySecurityId;
}

StreamCommoditySecurityID.prototype.value = function () {
  return this.message;
};

StreamCommoditySecurityID.Tag = '41253';

StreamCommoditySecurityID.Type = 'STRING';

module.exports = StreamCommoditySecurityID;