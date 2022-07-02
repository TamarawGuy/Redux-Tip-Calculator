export const ITEM_ADDED = "ITEM_ADDED";
export const ITEM_REMOVED = "REMOVE_ITEM";
export const ITEM_PRICED_UPDATED = "ITEM_PRICED_UPDATED";
export const ITEM_QUANTITY_UPDATED = "ITEM_QUANTITY_UPDATED";

export const addNewItem = (name, price) => ({
  type: ITEM_ADDED,
  payload: { name, price },
});

export const removeItem = (uuid) => ({
  type: ITEM_REMOVED,
  payload: { uuid },
});

export const updatePrice = (uuid, price) => ({
  type: ITEM_PRICED_UPDATED,
  payload: { uuid, price },
});

export const updateQuantity = (uuid, quantity) => ({
  type: ITEM_QUANTITY_UPDATED,
  payload: { uuid, quantity },
});
