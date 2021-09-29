import axios from 'axios';

const CHEF_API_BASE_URL = "http://localhost:8080/homechefDemo";
const CHEF_API_REG_URL = CHEF_API_BASE_URL +'/'+ 'processRegister/' ;
const CHEF_API_CHEF_BY_ID_URL = CHEF_API_BASE_URL +'/'+ 'chefs' ;
const CHEF_API_CHEF_DEATILS_BY_ID_URL= CHEF_API_BASE_URL +'/' + 'getAllChefDetailsById/'



class ChefService {
    

    getChefs(){
        return axios.get(CHEF_API_BASE_URL +'/'+'chefs');
    }

    loginChefs(){
        return axios.get(CHEF_API_BASE_URL +'/'+'login');
    }

    createChef(chef){
        return axios.post(CHEF_API_REG_URL, chef);
    }

    getChefById(chefid){
        return axios.get(CHEF_API_CHEF_BY_ID_URL + '/' + chefid);
    }

    updateChef(chef, chefid){
        return axios.put(CHEF_API_BASE_URL + '/updateChef/' + chefid,chef);
    }

    deleteEmployee(chefid){
        return axios.delete(CHEF_API_BASE_URL + '/' + chefid);
    }
    getAllChefDetailsById(chefid){
        return axios.get(CHEF_API_CHEF_DEATILS_BY_ID_URL + chefid);
    }

    

    viewChefbyCity(city){
        return axios.get(CHEF_API_BASE_URL +'getChefByCity/' +city);
    }

}

export default new ChefService()