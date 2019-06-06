import { combineReducers } from "redux";
import campaigns from "./CampaignReducer";

const rootReducer =  combineReducers({
  campaigns
});

export default rootReducer;
