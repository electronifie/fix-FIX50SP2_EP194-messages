var invert = require('invert-obj');

function UnderlyingStreamCommodityAltID (underlyingStreamCommodityAltId) {
  this.message = underlyingStreamCommodityAltId;
}

UnderlyingStreamCommodityAltID.prototype.value = function () {
  return this.message;
};

UnderlyingStreamCommodityAltID.Tag = '41991';

UnderlyingStreamCommodityAltID.Type = 'STRING';

module.exports = UnderlyingStreamCommodityAltID;