import axios from "axios";
const url = "http://localhost:3003/";

export class ApiClient {
  constructor(tokenProvider, newUserType, logoutHandler){
    this.tokenProvider = tokenProvider;
    this.logoutHandler = logoutHandler;
    this.userType = newUserType;
  }


  authenticatedCall(method,url,data){
    return axios({
      method,
      url,
      headers: {
        authorization: this.tokenProvider
      },
      data,
    }).catch((error) => {
      if(error.response.status === 403) {
        this.logoutHandler();
        return Promise.reject()
      } else {
      throw error;
    }
    });
  }

  apiCall(method, url, data) {
    return axios({
      method,
      url,
      data,
    }).catch((error) => {
      throw error;
    });
  }

  login(username,password) {
    return this.apiCall("post",url + "auth/",{username: username, password:password});
  }

  getProfiles() {
    return this.authenticatedCall("get", url);
  }

  // Admin Add 
  addProfile(username, userType, firstName, lastName, bio, email, image, cv, location, isEmployed, employedInTech, employedOther, freelance, notEmployed, inEducation, saveForlater) {
    console.log("Posting", firstName)
    return this.authenticatedCall("post", url, { username, userType,  firstName, lastName, bio, email, image, cv, location, isEmployed, employedInTech, employedOther, freelance, notEmployed, inEducation, saveForlater });
  }
  // Admin remove
  removeProfile(id) {
    return this.authenticatedCall("delete", `${url}${id}`);
  }
  // Admin update
  updateProfile(id, username, userType, firstName, lastName, bio, email, image, cv, location, isEmployed, employedInTech, employedOther, freelance, notEmployed, inEducation, saveForLater) {
    return this.authenticatedCall("put", `${url}${id}`, { username, userType, firstName, lastName, bio, email, image, cv, location, isEmployed, employedInTech, employedOther, freelance, notEmployed, inEducation });
  }

  //Admin Find
  queryResult(searchParams){
    return this.authenticatedCall("post", `${url}`, searchParams)
  }

  //Employer Find
   queryResult2(searchEmployerParams){
    return this.authenticatedCall("post", `${url}tda/employersearch`, searchEmployerParams)
  }
}
