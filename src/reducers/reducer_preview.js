import { DISPLAY_PREVIEW } from '../actions/index';

export default function(state = "", action){
  switch(action.type){
    case DISPLAY_PREVIEW:
      document.getElementById('content').innerHTML =
        marked(action.payload);
      return action.payload;
  }

  return state;
};
