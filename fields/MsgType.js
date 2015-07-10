var invert = require('invert-obj');

function MsgType (msgType) {
  this.message = msgType;
}

MsgType.prototype.value = function () {
  return this.message;
};


MsgType.Keys = {
  HEARTBEAT: '0',
  TESTREQUEST: '1',
  RESENDREQUEST: '2',
  REJECT: '3',
  SEQUENCERESET: '4',
  LOGOUT: '5',
  IOI: '6',
  ADVERTISEMENT: '7',
  EXECUTIONREPORT: '8',
  ORDERCANCELREJECT: '9',
  LOGON: 'A',
  NEWS: 'B',
  EMAIL: 'C',
  NEWORDERSINGLE: 'D',
  NEWORDERLIST: 'E',
  ORDERCANCELREQUEST: 'F',
  ORDERCANCELREPLACEREQUEST: 'G',
  ORDERSTATUSREQUEST: 'H',
  ALLOCATIONINSTRUCTION: 'J',
  LISTCANCELREQUEST: 'K',
  LISTEXECUTE: 'L',
  LISTSTATUSREQUEST: 'M',
  LISTSTATUS: 'N',
  ALLOCATIONINSTRUCTIONACK: 'P',
  DONTKNOWTRADE: 'Q',
  QUOTEREQUEST: 'R',
  QUOTE: 'S',
  SETTLEMENTINSTRUCTIONS: 'T',
  MARKETDATAREQUEST: 'V',
  MARKETDATASNAPSHOTFULLREFRESH: 'W',
  MARKETDATAINCREMENTALREFRESH: 'X',
  MARKETDATAREQUESTREJECT: 'Y',
  QUOTECANCEL: 'Z',
  QUOTESTATUSREQUEST: 'a',
  MASSQUOTEACK: 'b',
  SECURITYDEFINITIONREQUEST: 'c',
  SECURITYDEFINITION: 'd',
  SECURITYSTATUSREQUEST: 'e',
  SECURITYSTATUS: 'f',
  TRADINGSESSIONSTATUSREQUEST: 'g',
  TRADINGSESSIONSTATUS: 'h',
  MASSQUOTE: 'i',
  BUSINESSMESSAGEREJECT: 'j',
  BIDREQUEST: 'k',
  BIDRESPONSE: 'l',
  LISTSTRIKEPRICE: 'm',
  XMLNONFIX: 'n',
  REGISTRATIONINSTRUCTIONS: 'o',
  REGISTRATIONINSTRUCTIONSRESPONSE: 'p',
  ORDERMASSCANCELREQUEST: 'q',
  ORDERMASSCANCELREPORT: 'r',
  NEWORDERCROSS: 's',
  CROSSORDERCANCELREPLACEREQUEST: 't',
  CROSSORDERCANCELREQUEST: 'u',
  SECURITYTYPEREQUEST: 'v',
  SECURITYTYPES: 'w',
  SECURITYLISTREQUEST: 'x',
  SECURITYLIST: 'y',
  DERIVATIVESECURITYLISTREQUEST: 'z',
  DERIVATIVESECURITYLIST: 'AA',
  NEWORDERMULTILEG: 'AB',
  MULTILEGORDERCANCELREPLACE: 'AC',
  TRADECAPTUREREPORTREQUEST: 'AD',
  TRADECAPTUREREPORT: 'AE',
  ORDERMASSSTATUSREQUEST: 'AF',
  QUOTEREQUESTREJECT: 'AG',
  RFQREQUEST: 'AH',
  QUOTESTATUSREPORT: 'AI',
  QUOTERESPONSE: 'AJ',
  CONFIRMATION: 'AK',
  POSITIONMAINTENANCEREQUEST: 'AL',
  POSITIONMAINTENANCEREPORT: 'AM',
  REQUESTFORPOSITIONS: 'AN',
  REQUESTFORPOSITIONSACK: 'AO',
  POSITIONREPORT: 'AP',
  TRADECAPTUREREPORTREQUESTACK: 'AQ',
  TRADECAPTUREREPORTACK: 'AR',
  ALLOCATIONREPORT: 'AS',
  ALLOCATIONREPORTACK: 'AT',
  CONFIRMATIONACK: 'AU',
  SETTLEMENTINSTRUCTIONREQUEST: 'AV',
  ASSIGNMENTREPORT: 'AW',
  COLLATERALREQUEST: 'AX',
  COLLATERALASSIGNMENT: 'AY',
  COLLATERALRESPONSE: 'AZ',
  COLLATERALREPORT: 'BA',
  COLLATERALINQUIRY: 'BB',
  NETWORKCOUNTERPARTYSYSTEMSTATUSREQUEST: 'BC',
  NETWORKCOUNTERPARTYSYSTEMSTATUSRESPONSE: 'BD',
  USERREQUEST: 'BE',
  USERRESPONSE: 'BF',
  COLLATERALINQUIRYACK: 'BG',
  CONFIRMATIONREQUEST: 'BH',
  CONTRARYINTENTIONREPORT: 'BO',
  SECURITYDEFINITIONUPDATEREPORT: 'BP',
  SECURITYLISTUPDATEREPORT: 'BK',
  ADJUSTEDPOSITIONREPORT: 'BL',
  ALLOCATIONINSTRUCTIONALERT: 'BM',
  EXECUTIONACK: 'BN',
  TRADINGSESSIONLIST: 'BJ',
  TRADINGSESSIONLISTREQUEST: 'BI',
  SETTLEMENTOBLIGATIONREPORT: 'BQ',
  DERIVATIVESECURITYLISTUPDATEREPORT: 'BR',
  TRADINGSESSIONLISTUPDATEREPORT: 'BS',
  MARKETDEFINITIONREQUEST: 'BT',
  MARKETDEFINITION: 'BU',
  MARKETDEFINITIONUPDATEREPORT: 'BV',
  APPLICATIONMESSAGEREQUEST: 'BW',
  APPLICATIONMESSAGEREQUESTACK: 'BX',
  APPLICATIONMESSAGEREPORT: 'BY',
  ORDERMASSACTIONREPORT: 'BZ',
  ORDERMASSACTIONREQUEST: 'CA',
  USERNOTIFICATION: 'CB',
  STREAMASSIGNMENTREQUEST: 'CC',
  STREAMASSIGNMENTREPORT: 'CD',
  STREAMASSIGNMENTREPORTACK: 'CE',
  PARTYDETAILSLISTREQUEST: 'CF',
  PARTYDETAILSLISTREPORT: 'CG',
  MARGINREQUIREMENTINQUIRY: 'CH',
  MARGINREQUIREMENTINQUIRYACK: 'CI',
  MARGINREQUIREMENTREPORT: 'CJ',
  PARTYDETAILSLISTUPDATEREPORT: 'CK',
  PARTYRISKLIMITSREQUEST: 'CL',
  PARTYRISKLIMITSREPORT: 'CM',
  SECURITYMASSSTATUSREQUEST: 'CN',
  SECURITYMASSSTATUS: 'CO',
  ACCOUNTSUMMARYREPORT: 'CQ',
  PARTYRISKLIMITSUPDATEREPORT: 'CR',
  PARTYRISKLIMITSDEFINITIONREQUEST: 'CS',
  PARTYRISKLIMITSDEFINITIONREQUESTACK: 'CT',
  PARTYENTITLEMENTSREQUEST: 'CU',
  PARTYENTITLEMENTSREPORT: 'CV',
  QUOTEACK: 'CW',
  PARTYDETAILSDEFINITIONREQUEST: 'CX',
  PARTYDETAILSDEFINITIONREQUESTACK: 'CY',
  PARTYENTITLEMENTSUPDATEREPORT: 'CZ',
  PARTYENTITLEMENTSDEFINITIONREQUEST: 'DA',
  PARTYENTITLEMENTSDEFINITIONREQUESTACK: 'DB',
  TRADEMATCHREPORT: 'DC',
  TRADEMATCHREPORTACK: 'DD',
  PARTYRISKLIMITSREPORTACK: 'DE',
  PARTYRISKLIMITCHECKREQUEST: 'DF',
  PARTYRISKLIMITCHECKREQUESTACK: 'DG',
  PARTYACTIONREQUEST: 'DH',
  PARTYACTIONREPORT: 'DI',
  MASSORDER: 'DJ',
  MASSORDERACK: 'DK',
  POSITIONTRANSFERINSTRUCTION: 'DL',
  POSITIONTRANSFERINSTRUCTIONACK: 'DM',
  POSITIONTRANSFERREPORT: 'DN',
  MARKETDATASTATISTICSREQUEST: 'DO',
  MARKETDATASTATISTICSREPORT: 'DP',
  COLLATERALREPORTACK: 'DQ',
};

MsgType.Tag = '35';

MsgType.Type = 'STRING';

MsgType.Values = invert(MsgType.Keys);

module.exports = MsgType;