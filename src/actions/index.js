export const removeFeature = id => {
  return { type: 'REMOVE_FEATURE', payload: id}  
}

export const buyItem = id => {
  return { type: 'BUY_ITEM', payload: id }
}