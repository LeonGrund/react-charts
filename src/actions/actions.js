

export const initializeData = (data) => {
  return {
      type: 'INITIALIZE_DATA',
      data
  }
}

export const deleteData = () => {
  return {
    type: 'DELETE_DATA'
  }
}

export const addData = (data) => ({
  type: 'ADD_DATA',
  data
});
