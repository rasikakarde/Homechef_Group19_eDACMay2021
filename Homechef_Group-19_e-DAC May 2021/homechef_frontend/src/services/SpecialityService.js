import axios from 'axios';

const CHEF_API_BASE_URL = "http://localhost:8080/homechefDemo";
//const CHEF_API_SPECIALITY_DEATILS_BY_CHEF_ID_URL= CHEF_API_BASE_URL +'/'+'speciality' + 'getSpecialitybychefid/'


class SpecialityService{

    viewSpeciality(){
        return axios.get(CHEF_API_BASE_URL +'/speciality/allSpeciality');
    }

   /*  getSpecialityDetailsById(chefid){
        return axios.get(CHEF_API_SPECIALITY_DEATILS_BY_CHEF_ID_URL + cuisineid);
    } */

}


export default new SpecialityService()