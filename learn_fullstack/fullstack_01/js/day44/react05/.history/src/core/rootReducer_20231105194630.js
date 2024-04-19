// quản lý State

cconst rootReducer = (state, action) => {
     switch (action.type) {
          case "counter/increment": {
               return { ...state, count: state.count + 1 }
          }
          default: {
               return state;
          }
     }
}