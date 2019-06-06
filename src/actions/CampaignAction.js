function getCampaigns() {
    return fetch(`./data.json`,{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          "Access-Control-Allow-Origin":"*"
         }
      })
      .then(handleErrors)
      .then(res => res.json());
  }

  export function fetchCampaigns() {
    return dispatch => {
      dispatch(fetchCampaignsBegin());
      return getCampaigns()
        .then(json => {
          dispatch(fetchCampaignsSuccess(json.campaigns));
          return json.campaigns;
        })
        .catch(error =>
          dispatch(fetchCampaignsFailure(error))
        );
    };
  }

  

  export function fetchCampaignById(id){

  }

  // Handle HTTP errors since fetch won't.
  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }
  
  export const FETCH_CAMPAIGNS_BEGIN = "FETCH_CAMPAIGNS_BEGIN";
  export const FETCH_CAMPAIGNS_SUCCESS =
    "FETCH_CAMPAIGNS_SUCCESS";
  export const FETCH_CAMPAIGNS_FAILURE =
    "FETCH_CAMPAIGNS_FAILURE";
  export const FETCH_PAST_CAMPAIGNS = "FETCH_PAST_CAMPAIGNS";
   
  export const fetchCampaignsBegin = () => ({
    type: FETCH_CAMPAIGNS_BEGIN
  });
  
  export const fetchCampaignsSuccess = campaigns => ({
    type: FETCH_CAMPAIGNS_SUCCESS,
    campaigns:  campaigns 
  });
  
  export const fetchCampaignsFailure = error => ({
    type: FETCH_CAMPAIGNS_FAILURE,
    payload: { error }
  });
