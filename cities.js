const princeEdwardIslandCities = [
  "Alberton", "Bedeque", "Borden", "Cardigan", "Charlottetown",
  "Cornwall", "Covehead", "Crapaud", "East Point", "Eldon",
  "Georgetown", "Hunter River", "Kensington", "Montague", "Morell",
  "Mount Stewart", "Murray River", "New Haven", "New London", "O`Leary",
  "Rusticoville", "Souris", "South Lake", "St. Peters", "Stratford",
  "Summerside", "Tignish", "Tyne Valley", "Vernon River", "Wellington",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < princeEdwardIslandCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(princeEdwardIslandCities[i]);
}

module.exports = { batches };
