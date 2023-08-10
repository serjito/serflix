"use client";
import Input from "@/components/Input";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "@/firebase";
import { useDispatch } from "react-redux";
import { login } from "../../redux/features/AuthSlice";
import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";

function AuthPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [variant, setVariant] = useState("login");
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const resetForm = () => {
    setEmail("");
    setName("");
    setPassword("");
  };

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);

  const handleLoginOrSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setError("");
      if (variant === "register") {
        const user = await createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            updateProfile(user, { displayName: name });
          })
          .finally(() => {
            resetForm();
            setVariant("login");
          });

        console.log("Usuario registrado exitosamente:", email, name);
        console.log(email);
        console.log(name);
      } else {
        const response = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        if (response) {
          resetForm();
          router.push("/home");
          dispatch(
            login({
              email: response.user.email,
              displayName: response.user?.displayName,
              token: response.user.refreshToken,
            })
          );
        }
        console.log(response);
        console.log(response.user.email);
      }
    } catch (error: any) {
      setError("Incorrect email or password");
      console.error("Error:", error.message);
    }
  };

  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="/images/LOGO.png" alt="logo" className="h-20" />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              {variant === "login" ? "Sign in" : "Register"}
            </h2>
            <div className="flex flex-col gap-4">
              {variant === "register" && (
                <Input
                  label="Username"
                  onChange={(ev: any) => setName(ev.target.value)}
                  id="name"
                  value={name}
                />
              )}
              <Input
                label="Email"
                onChange={(ev: any) => setEmail(ev.target.value)}
                id="email"
                type="email"
                value={email}
              />
              <Input
                label="Password"
                onChange={(ev: any) => setPassword(ev.target.value)}
                id="password"
                type="password"
                value={password}
              />
            </div>
            {error && <p className="text-red-500 mt-2">{error}</p>}
            <button
              onClick={handleLoginOrSignUp}
              className="bg-pink-600 py-3 text-white rounded-md w-full mt-10 hover:bg-pink-700 transition"
            >
              {variant === "login" ? "Login" : "Sign up"}
            </button>
            <p className="text-neutral-500 mt-12">
              {variant === "login"
                ? "First time using Serflix?"
                : "Already have an account?"}
              <span
                onClick={toggleVariant}
                className="text-white ml-1 hover:underline cursor-pointer"
              >
                {variant === "login" ? "Create an account" : "Login"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
