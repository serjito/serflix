/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import { auth } from "@/firebase";
import { useRouter } from "next/navigation";

interface AccountMenuProps {
  visible?: boolean;
}

const AccountMenu: React.FC<AccountMenuProps> = ({ visible }) => {
  const router = useRouter();
  const [username, setUsername] = useState("");

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setUsername(user.displayName || "");
    }
  }, []);

  if (!visible) {
    return null;
  }

  const handleSignOut = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
      console.log("Usuario desconectado correctamente");
      router.push("/auth");
    } catch (error) {
      console.error("Error al desconectar el usuario:", error);
    }
  };

  return (
    <div className="bg-black w-56 absolute top-14 right-0 py-5 flex-col border-2 border-gray-800 flex">
      <div className="flex flex-col gap-3">
        <div className="px-3 group/item flex flex-row gap-3 items-center w-full">
          <img
            className="w-8  rounded-md"
            src="/images/Netflix-avatar.png"
            alt=""
          />
          <p className="text-white text-sm group-hover/item:underline:">
            {username}
          </p>
        </div>
        <hr className="bg-gray-600 border-0 h-px my-4" />
        <div
          onClick={handleSignOut}
          className="px-3 text-center text-white text-sm hover:underline"
        >
          Sign out of Serflix
        </div>
      </div>
    </div>
  );
};

export default AccountMenu;
