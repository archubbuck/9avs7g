import { RANDOM_DATA } from './data';

const JOINED_DATA = RANDOM_DATA.RESEARCH_ENTITIES.value.map(
  (researchEntity) => {
    researchEntity.issuers = RANDOM_DATA.ISSUERS.value.filter(
      (issuer) => issuer.researchEntityId === researchEntity.id
    );
    researchEntity.issuers.forEach(
      (issuer) =>
        (issuer.assets = RANDOM_DATA.ASSETS.value.filter(
          (asset) => asset.issuerId === issuer.id
        ))
    );
    return researchEntity;
  }
);

const preview = JOINED_DATA.flatMap((researchEntity) =>
  researchEntity.issuers?.flatMap((issuer) =>
    issuer.assets?.flatMap((asset) => ({
      compositeId: `${researchEntity.id}-${issuer.id}-${asset.id}`,
      researchEntityId: researchEntity.id,
      issuerId: issuer.id,
      assetId: asset.id,
    }))
  )
);

preview.sort((a, b) => {
  return a?.compositeId.localeCompare(b?.compositeId || a?.compositeId) || -1;
  // if ((a?.researchEntityId ?? 0) < (b?.researchEntityId ?? 0)) return -1;
  // if ((a?.researchEntityId ?? 0) > (b?.researchEntityId ?? 0)) return 1;
  // if ((a?.issuerId ?? 0) < (b?.issuerId ?? 0)) return -1;
  // if ((a?.issuerId ?? 0) > (b?.issuerId ?? 0)) return 1;
  // if ((a?.assetId ?? 0) < (b?.assetId ?? 0)) return -1;
  // if ((a?.assetId ?? 0) > (b?.assetId ?? 0)) return 1;
  // return 0;
});

console.table(preview, [
  'compositeId',
  'researchEntityId',
  'issuerId',
  'assetId',
]);
