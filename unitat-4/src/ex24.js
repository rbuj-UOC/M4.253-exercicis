"use strict";

async function job(result, database, errorManager) {
  let id;
  let info;
  try {
    id = await result;
    info = await database.get(id);
  } catch (error) {
    errorManager.notify(error);
    throw error;
  }
  return info.name;
}
