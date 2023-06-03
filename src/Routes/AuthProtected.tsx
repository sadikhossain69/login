import React, { useEffect } from "react";
import { Navigate, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";


const AuthProtected = (props: any) => {
  // const dispatch = useDispatch<any>();
  // const { userProfile, loading, token } = useProfile();
  // useEffect(() => {
  //   if (userProfile && !loading && token) {
  //     setAuthorization(token);
  //   } else if (!userProfile && loading && !token) {
  //     dispatch(logoutUser());
  //   }
  // }, [token, userProfile, loading, dispatch]);

  // /*
  //   Navigate is un-auth access protected routes via url
  //   */

  // if (!userProfile && loading && !token) {
  //   return (
  //     <Navigate to={{ pathname: "/login" }} />
  //   );
  // }

  const token = localStorage.getItem("token");
  const decoded: any = jwt_decode(token!);
  console.log(decoded)
  if (decoded.email) {
    return <>{props.children}</>;
  }
  if(!decoded.role) {
    return (
      <Navigate
        to={{
          pathname: "/",
        }}
      />
    );
  }
    return <>{props}</>
};

const AccessRoute = ({ component: Component, ...rest }: any) => {
  return (
    <Route
      {...rest}
      render={(props: any) => {
        return (<> <Component {...props} /> </>);
      }}
    />
  );
};

export { AuthProtected, AccessRoute };