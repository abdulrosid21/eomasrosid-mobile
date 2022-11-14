const initialState = {
  data: {},
  isLoading: false,
  isError: false,
  message: '',
};

const auth = (state = initialState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case 'LOGIN_PENDING': {
      return {
        ...state,
        data: {},
        isLoading: false,
        isError: false,
        message: '',
      };
    }
    case 'LOGIN_FULFILLED': {
      return {
        ...state,
        data: action.payload.data.data,
        isLoading: false,
        isError: false,
        message: action.payload,
      };
    }
    case 'LOGIN_REJECTED': {
      return {
        ...state,
        data: {},
        isLoading: false,
        isError: true,
        message: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default auth;
