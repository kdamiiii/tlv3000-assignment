export interface WhoisRecord {
  createdDate: string;
  updatedDate: string;
  expiresDate: string;
  registrant: {
    organization: string;
    country: string;
    countryCode: string;
    rawText: string;
  };
  technicalContact: {
    country: string;
    countryCode: string;
    rawText: string;
  };
  domainName: string;
  nameServers: {
    rawText: string;
    hostNames: string[];
    ips: string[];
  };
  status: string;
  rawText: string;
  parseCode: number;
  header: string;
  strippedText: string;
  footer: string;
  audit: {
    createdDate: string;
    updatedDate: string;
  };
  registrarName: string;
  registrarIANAID: string;
  createdDateNormalized: string;
  updatedDateNormalized: string;
  expiresDateNormalized: string;
  registryData: {
    createdDate: string;
    updatedDate: string;
    expiresDate: string;
    domainName: string;
    nameServers: {
      rawText: string;
      hostNames: string[];
      ips: string[];
    };
    status: string;
    rawText: string;
    parseCode: number;
    header: string;
    strippedText: string;
    footer: string;
    audit: {
      createdDate: string;
      updatedDate: string;
    };
    registrarName: string;
    registrarIANAID: string;
    createdDateNormalized: string;
    updatedDateNormalized: string;
    expiresDateNormalized: string;
    whoisServer: string;
  };
  contactEmail: string;
  domainNameExt: string;
  estimatedDomainAge: number;
}
