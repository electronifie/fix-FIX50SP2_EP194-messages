var invert = require('invert-obj');

function UnderlyingStreamCommoditySecurityID (underlyingStreamCommoditySecurityId) {
  this.message = underlyingStreamCommoditySecurityId;
}

UnderlyingStreamCommoditySecurityID.prototype.value = function () {
  return this.message;
};

UnderlyingStreamCommoditySecurityID.Tag = '41966';

UnderlyingStreamCommoditySecurityID.Type = 'STRING';

module.exports = UnderlyingStreamCommoditySecurityID;