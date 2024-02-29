/*
 * THIS IS AN ANTI-PATTERN; DO NOT USE THIS FILE ANYWHERE ELSE!
 */

export type ODataResponse<T> = {
  ['@odata.context']?: string;
  ['@odata.count']?: number;
  ['@odata.nextLink']?: string;
  value: Array<T>;
};

export type ResearchEntityRecord = {
  readonly type: 'Research Entity';
  id: number;
  issuers?: Array<IssuerRecord>;
};

export type IssuerRecord = {
  readonly type: 'Issuer';
  id: number;
  researchEntityId: number;
  assets?: Array<AssetRecord>;
};

export type AssetRecord = {
  readonly type: 'Asset';
  id: number;
  issuerId: number;
};

export type DataQuestRecord = ResearchEntityRecord | IssuerRecord | AssetRecord;

export type DataQuestResponse = ODataResponse<DataQuestRecord>;
