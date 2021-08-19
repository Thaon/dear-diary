import axios from "axios";

import { setUser } from "./redux/user/UserSlice";
import { userStore } from "./redux/user/UserStore";

import { createTheme } from "@material-ui/core/styles";

import Cookies from "./helpers/Cookies";

class Operations {
  constructor() {
    // Add a request interceptor to add the token at each call
    axios.interceptors.request.use(
      function (config) {
        // Do something before request is sent
        const token = Cookies.getCookie("TOKEN");
        // console.log(token);

        if (token != null) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      function (error) {
        // Do something with request error
        console.log("SHIT!");
        return Promise.reject(error);
      }
    );

    //gotta do this after the interceptor is setup
    this.API = "http://localhost:1337";
    this.copyright = "Madd Studio";
    this.website = "https://www.madd.studio";

    //Theming
    const themeColor = "dark";
    const themeOptions = {
      palette: {
        type: themeColor,
        primary: {
          main: "#3f51b5",
        },
        secondary: {
          main: "#f50057",
        },
      },
    };
    this.theme = createTheme(themeOptions);
  }

  //Users ---------------------------------------------------------
  login = async (username, password) => {
    try {
      let res = await axios.post(
        this.API + "/auth/local",
        {
          identifier: username,
          password: password,
        },
        {
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      if (res.status == 200) {
        Cookies.setCookie("TOKEN", res.data.jwt);
        userStore.dispatch(setUser(res.data.user));
        return {
          state: "auth",
        };
      } else return { state: "no-auth" };
    } catch (error) {
      return { state: "no-auth" };
    }
  };

  getMe = async () => {
    try {
      let res = await axios.get(this.API + "/users/me");
      if (res.status == 200) {
        userStore.dispatch(setUser(res.data));
        return true;
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
  };

  logout = () => {
    Cookies.deleteCookie("TOKEN");
    userStore.dispatch(setUser(null));
  };

  changePasswd = async (oldPasswd, newPasswd) => {
    try {
      if (newPasswd.length < 6) return false;
      let res = await axios.post(this.API + "/change-password/", {
        oldPasswd,
        newPasswd,
      });
      return res.data == true;
    } catch (error) {
      console.log("CHANGE PASSWORD", error);
      return false;
    }
  };

  //Utils ---------------------------------------------------------
  isLoggedIn = () => {
    let tok = Cookies.getCookie("TOKEN");
    return tok && tok.length > 0;
  };

  handleImagesUpload = async (imagesData, refId, ID, callback) => {
    try {
      console.log("Uploading image for " + refId + " - " + ID);

      const formData = new FormData();
      formData.append("ref", refId); // optional, you need it if you want to link the image to an entry
      formData.append("refId", ID); // optional, you need it if you want to link the image to an entry
      formData.append("field", "media"); // optional, you need it if you want to link the image to an entry
      imagesData.forEach((file) => formData.append(`files`, file, file.name));

      let imgs = await axios.post(`${this.API}/upload`, formData);

      if (callback) callback();
      return imgs;
    } catch (error) {
      console.log("UPLOADING FILES", error);
      return null;
    }
  };

  shuffle = (array) => {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  difference = (a1, a2) => {
    var a2Set = new Set(a2);
    return a1.filter(function (x) {
      return !a2Set.has(x);
    });
  };

  sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  cleanString(text, maxChar) {
    if (text && text.length > 0)
      return text.replace(/(<([^>]+)>)/gi, "").length > maxChar
        ? text.replace(/(<([^>]+)>)/gi, "").substring(0, maxChar - 3) + "..."
        : text.replace(/(<([^>]+)>)/gi, "");
    else return "";
  }

  validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  getDateObject = (inDate) => {
    inDate = new Date(inDate).toISOString();

    //deal with date
    let originalDate = inDate.split("T")[0];
    let d = new Date(originalDate);
    let day = d.getDate();
    let month = d.getMonth();
    let year = d.getFullYear();
    //deal with time
    let time = inDate.split("T")[1];
    if (time) time = time.substr(0, 5);

    return { date: day + "/" + month + "/" + year, time: time };
  };
}

const ops = new Operations();
export default ops;
