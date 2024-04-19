// quản lý State

export const rootReducer = (state, action) => {
     switch (action.type) {
          case "message/add": {
               return { ...state, messages: action.payLoad }
          }
          case "counter/deincrement": {
               return { ...state, count: state.count - 1 }
          }
          default: {
               return state;
          }
     }
}