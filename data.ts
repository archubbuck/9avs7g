/*
 * THIS IS AN ANTI-PATTERN; DO NOT USE THIS FILE ANYWHERE ELSE!
 */

import { pickRandom } from './functions';
import {
  AssetRecord,
  IssuerRecord,
  ODataResponse,
  ResearchEntityRecord,
} from './types';

const COUNT_OF_RESEARCH_ENTITIES = 100;
const COUNT_OF_ISSUERS = 300;
const COUNT_OF_ASSETS = 5000;

const RESEARCH_ENTITIES: ODataResponse<ResearchEntityRecord> = {
  '@odata.context': 'blah',
  '@odata.count': COUNT_OF_RESEARCH_ENTITIES,
  '@odata.nextLink': 'blah',
  value: Array.from({ length: COUNT_OF_RESEARCH_ENTITIES }).map((_, index) => ({
    type: 'Research Entity',
    id: index + 1,
  })),
} as const;

const ISSUERS: ODataResponse<IssuerRecord> = {
  '@odata.context': 'blah',
  '@odata.count': COUNT_OF_ISSUERS,
  '@odata.nextLink': 'blah',
  value: Array.from({ length: COUNT_OF_ISSUERS }).map((_, index) => ({
    type: 'Issuer',
    id: index + 1,
    researchEntityId: pickRandom(RESEARCH_ENTITIES.value)[0].id,
  })),
} as const;

const ASSETS: ODataResponse<AssetRecord> = {
  '@odata.context': 'blah',
  '@odata.count': COUNT_OF_ASSETS,
  '@odata.nextLink': 'blah',
  value: Array.from({ length: COUNT_OF_ASSETS }).map((_, index) => ({
    type: 'Asset',
    id: index + 1,
    issuerId: pickRandom(ISSUERS.value)[0].id,
  })),
} as const;

export const RANDOM_DATA = {
  RESEARCH_ENTITIES: {
    ...RESEARCH_ENTITIES,
    ...{
      value: pickRandom(
        RESEARCH_ENTITIES.value,
        Math.random() * RESEARCH_ENTITIES.value.length
      ),
    },
  },
  ISSUERS: {
    ...ISSUERS,
    ...{
      value: pickRandom(ISSUERS.value, Math.random() * ISSUERS.value.length),
    },
  },
  ASSETS: {
    ...ASSETS,
    ...{
      value: pickRandom(ASSETS.value, Math.random() * ASSETS.value.length),
    },
  },
};
