export const findById = <Entity extends { id: ID }>(entities: Entity[], entity: Entity): Entity | undefined => {
  return entities.find(e => e.id === entity.id);
};

export const findIndexById = <Entity extends { id: ID }>(entities: Entity[], entity: Entity): number => {
  return entities.findIndex(e => e.id === entity.id);
};