const redux = require("redux");

const ADD_TODO = "Add todo";
const TOGGLE_TODO = "Toggle TODO";

// Action Creators

const addToDo = (text) => ({ text, type: ADD_TODO });
const toggleToDo = (index) => ({ index, type: TOGGLE_TODO });

// Initial State
const initialState = {
  todo: [],
};

// Reducer
function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todo: [
          ...state.todo,
          {
            text: action.text,
            completed: false,
          },
        ],
      };
    case TOGGLE_TODO:
        return{
            ...state,
            todo : state.todo.map((todo, i) => {
                if(i === action.index){
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        }
    default:
      return state;
  }
}

const store = redux.createStore(todoReducer);
    // dispatch action
    store.dispatch(addToDo("Study at *"));
    store.dispatch(addToDo("Study at 9"));
    store.dispatch(toggleToDo(0));

    console.log(store.getState());