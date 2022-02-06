import axios from "axios";
const url = "http://localhost:3001/";

export class ApiClient {
  // username added 2 Feb
  constructor(tokenProvider, newUserType, newUsername, logoutHandler){
    this.tokenProvider = tokenProvider;
    this.logoutHandler = logoutHandler;
    this.userType = newUserType;
    // added 2 feb
    this.username = newUsername;
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

  // getEvents() {
  //   return this.authenticatedCall("get", url);
  // }

  // addEvent(name, location, info, eventDate) {
  //   console.log("Posting", name)
  //   return this.authenticatedCall("post", url, { name, location, info, eventDate });
  // }

  // removeEvent(id) {
  //   return this.authenticatedCall("delete", `${url}${id}`);
  // }

  // updateEvent(id, name, location, info, eventDate) {
  //   return this.authenticatedCall("put", `${url}${id}`, { name, location, info, eventDate });
  // }
  getProfiles() {
    return this.authenticatedCall("get", url);
  }

  addProfile(username, userType, firstName, lastName, bio, email, image, cv, location, companyName, companyType, isRecruiting, currentVacancies, isEmployed, employedInTech, employedOther, freelance, notEmployed, inEducation, like, portfolio, github, linkedin, skills) {
   // console.log("Posting", firstName)
    return this.authenticatedCall("post", url, { username, userType,  firstName, lastName, bio, email, image, cv, location, companyName, companyType, isRecruiting, currentVacancies, isEmployed, employedInTech, employedOther, freelance, notEmployed, inEducation, like, portfolio, github, linkedin, skills });
  }

  removeProfile(id) {
    return this.authenticatedCall("delete", `${url}${id}`);
  }


  updateProfile(id, username, userType, firstName, lastName, bio, email, location, portfolio, github, linkedin, isEmployed, skills ) {
    return this.authenticatedCall("put", `${url}${id}`, { username, userType, firstName, lastName, bio, email, location, portfolio, github, linkedin, isEmployed, skills});

  }
}