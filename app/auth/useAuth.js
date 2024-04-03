import { useContext } from "react";
import AuthContext from "./authContext";
import authStorage from "./authTokenStorage";
import { jwtDecode } from "jwt-decode";

export default useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const logIn = (authToken) => {
    const user = jwtDecode(authToken);
    setUser(user);
    authStorage.storeToken(authToken);
    console.log('success')
  };

  const logOut = () => {
    setUser(null);
    authStorage.removeToken();
  };

  return { user, logOut, logIn };
};
