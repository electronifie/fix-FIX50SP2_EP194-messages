var invert = require('invert-obj');

function FirmTradeEventID (firmTradeEventId) {
  this.message = firmTradeEventId;
}

FirmTradeEventID.prototype.value = function () {
  return this.message;
};

FirmTradeEventID.Tag = '2418';

FirmTradeEventID.Type = 'STRING';

module.exports = FirmTradeEventID;