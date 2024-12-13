import { authKey } from "@/constants/authKey";
import { tokenDecoded } from "@/utils/jwtDecode";
import {
  getFormLocalStorage,
  removeFormLocalStorage,
  setLocalStorage,
} from "@/utils/local-storage";

export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
  return setLocalStorage(authKey, accessToken);
};

export const getUserInfo = () => {
  const authToken = getFormLocalStorage(authKey);
  if (authToken) {
    const decodedToken = tokenDecoded(authToken);
    console.log(decodedToken);
    return decodedToken;
  }
};

export const isUserLoggedIn = () => {
  const authToken = getFormLocalStorage(authKey);
  if (authToken) {
    return !!authToken;
  }
};

export const removeUser = () => {
  return removeFormLocalStorage(authKey);
};
