import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { authActions } from "../../../_redux/auth";
import { LoadingScreenEffect } from "../../UIElements";

function Logout() {
  const { isLogin, loading } = useSelector((state) => ({
    loading: state.auth.loading,
    isLogin: state.auth.isLogin,
  }));
  const dispatch = useDispatch();
  useEffect(() => {
    isLogin && dispatch(authActions.logout.call());
  }, [dispatch, isLogin]);

  if (!isLogin) {
    return <Redirect from="/logout" to="/auth/login" />;
  }
  return <>{loading && <LoadingScreenEffect />}</>;
}

export default Logout;
