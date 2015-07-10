var Parties = require('../components/Parties');
var RFQReqGrp = require('../components/RFQReqGrp');
var RFQReqID = require('../fields/RFQReqID');
var SubscriptionRequestType = require('../fields/SubscriptionRequestType');
var PrivateQuote = require('../fields/PrivateQuote');

function RFQRequest (rfqrequest) {
  this.message = rfqrequest;
}

RFQRequest.prototype.parties = function () {
  return this.message.groups[RFQRequest.Tags.Parties]
    .map(function (parties) {
      return new Parties(parties);
  });
};

RFQRequest.prototype.rfqreqGrp = function () {
  return this.message.groups[RFQRequest.Tags.RFQReqGrp]
    .map(function (rfqreqGrp) {
      return new RFQReqGrp(rfqreqGrp);
  });
};

RFQRequest.prototype.rfqreqId = function () {
  return new RFQReqID(this.message.tags[RFQRequest.Tags.RFQReqID]);
};

RFQRequest.prototype.subscriptionRequestType = function () {
  return new SubscriptionRequestType(this.message.tags[RFQRequest.Tags.SubscriptionRequestType]);
};

RFQRequest.prototype.privateQuote = function () {
  return new PrivateQuote(this.message.tags[RFQRequest.Tags.PrivateQuote]);
};

RFQRequest.Tags = {
  Parties: '453',
  RFQReqGrp: '146',
  RFQReqID: '644',
  SubscriptionRequestType: '263',
  PrivateQuote: '1171',
};

RFQRequest.msgType = 'AH';

module.exports = RFQRequest;