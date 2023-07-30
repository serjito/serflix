"use client";
import { useRouter } from "next/navigation";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setUser } from "../redux/features/AuthSlice";
import Auth from "./auth/page";

export default function Index() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const userToken = useAppSelector((state) => state.auth.user?.token);

  const checkUserLoggedIn = () => {
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
      if (user) {
        user.getIdToken().then((token) => {
          dispatch(setUser({ token }));
          router.push("/");
        });
      }
    });
  };

  useEffect(() => {
    checkUserLoggedIn();
  }, []);

  return <Auth />;
}
