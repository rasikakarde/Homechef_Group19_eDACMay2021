import axios from 'axios';

const CHEF_API_BASE_URL = "http://localhost:8080/homechefDemo";
const CHEF_API_CHEF_BY_ID_URL = CHEF_API_BASE_URL +'/'+ 'cheflogin' ;


export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'

class AuthenticationService {

    executeBasicAuthenticationService(emailid, password) {
        let chef={emailid,password}
        return axios.post(`${CHEF_API_BASE_URL}/perform_login`,chef)
    }

    createBasicAuthToken(emailid, password) {
        return 'Basic ' + window.btoa(emailid + ":" + password)
    }

    registerSuccessfulLogin(emailid, password) {
        //let basicAuthHeader = 'Basic ' +  window.btoa(username + ":" + password)
        //console.log('registerSuccessfulLogin')
        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, emailid)
        this.setupAxiosInterceptors(this.createBasicAuthToken(emailid, password))
    }
    isUserLoggedIn() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
        if (user === null) return false
        return true
    }

     setupAxiosInterceptors(token) {
        axios.interceptors.request.use(
            (config) => {
                if (this.isUserLoggedIn()) {
                    config.headers.authorization = token
                }
                return config
            }
        )
    }
    
    loginChefAuth(emailid, password){
        let chef={emailid,password}
        return axios.post(CHEF_API_CHEF_BY_ID_URL, chef);
    }
}
export default new AuthenticationService() 
