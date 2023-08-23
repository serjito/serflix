"use client";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useAppDispatch } from "../redux/hooks";
import { login, logout } from "../redux/features/AuthSlice";
import AuthPage from "./auth/page";

export default function Index() {
  const dispatch = useAppDispatch();

  const checkUserLoggedIn = () => {
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
      if (user) {
        user.getIdToken().then((token) => {
          dispatch(login({ token }));
        });
      } else {
        dispatch(logout());
      }
    });
  };

  useEffect(() => {
    const userStr = localStorage.getItem("user");
    if (userStr) {
      const user = JSON.parse(userStr);
      dispatch(login(user));
    } else {
      dispatch(logout());
    }
  }, [dispatch]);

  useEffect(() => {
    checkUserLoggedIn();
  }, []);

  return <AuthPage />; // If AuthPage is not used here, return null to avoid rendering issues.
}
