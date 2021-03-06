import {
    FETCH_CAMPAIGNS_BEGIN,
    FETCH_CAMPAIGNS_SUCCESS,
    FETCH_CAMPAIGNS_FAILURE
  } from "../actions/CampaignAction";
  
  const initialState = {
    items: [],
    loading: false,
    error: null
  };
  
  export default function CampaignReducer(
    state = initialState,
    action
  ) {
    console.log(action);
    switch (action.type) {
      case FETCH_CAMPAIGNS_BEGIN:
        return {
          ...state,
          loading: true,
          error: null
        };
  
      case FETCH_CAMPAIGNS_SUCCESS:
        return {
          ...state,
          loading: false,
          items: action.campaigns
        };
  
      case FETCH_CAMPAIGNS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload.error,
          items: []
        };

      default:
        return state;
    }
  }
  