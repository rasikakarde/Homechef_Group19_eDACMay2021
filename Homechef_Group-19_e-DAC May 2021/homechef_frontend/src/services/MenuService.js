import axios from 'axios';

const MENU_API_BASE_URL = "http://localhost:8080/homechefDemo/menu";
//const CHEF_API_REG_URL = CHEF_API_BASE_URL +'/'+ 'processRegister/' ;
const MENU_API_MENU_BY_ID_URL = MENU_API_BASE_URL +'/'+ 'getMenubychefid' ;



class MenuService {
    

    getMenu(){
        return axios.get(MENU_API_BASE_URL +'/'+'allMenu');
    }

    createMenu(menu){
        //return axios.post(CHEF_API_REG_URL, chef);
    }

    getMenuById(chefid){
        return axios.get(MENU_API_MENU_BY_ID_URL + '/' + chefid);
    }

    updateMenu(chef, chefid){
        //return axios.put(CHEF_API_BASE_URL + '/' + chefid, chefid);
    }

    deleteMenu(chefid){
       // return axios.delete(CHEF_API_BASE_URL + '/' + chefid);
    }
}

export default new MenuService()