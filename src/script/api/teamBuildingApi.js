import https from '@/https.js'

class TeamBuildingRequest {
  constructor() {
  }
  Api_get_getTeamBuildingData() {
    return https.ApiRequest({
      url: 'teamBuilding/data',
      data: '',
      type: 'get'
    });
  }
}
var obj = new TeamBuildingRequest();
export default obj;
