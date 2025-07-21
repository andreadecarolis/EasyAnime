import { useState } from "react";
import { useForm } from "react-hook-form";
import { AccountPageProps, AccountPageFormValues } from "./types/AccountPage.types";
import { Eye, EyeOff, Mail, User } from "lucide-react";
import "./AccountPage.scss";

const AccountPage: React.FC<AccountPageProps> = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AccountPageFormValues>();

  const PasswordIcon = showPassword ? EyeOff : Eye;

  /* #region handlers */
  const onSubmit = (data: AccountPageFormValues) => {
    console.log("Form data:", data);
  };
  /* #endregion */

  return (
    <div className="w-[50%] px-6 py-4 mx-auto mt-6 rounded-xl shadow-xl bg-zinc-700/10 backdrop-blur-xs border border-zinc-800 text-zinc-100">
      <h1 className="text-primary text-2xl font-semibold text-center">
        {isLogin ? "Log-in to your account" : "Create an account"}
      </h1>
      <form className="flex flex-col items-center gap-y-3 mt-6" onSubmit={handleSubmit(onSubmit)}>
        {!isLogin && (
          <div className="w-full max-w-sm relative flex flex-col gap-y-1">
            <div className="relative">
              <input
                type="email"
                placeholder="E-mail"
                className={`w-full pl-10 pr-4 py-2 rounded-xl shadow-xl bg-zinc-600/10 border ${
                  errors.email ? "border-red-500" : "border-zinc-800 focus:ring-1 focus:ring-primary"
                } text-zinc-100 placeholder:text-zinc-400 focus:outline-none`}
                {...register("email", {
                  required: "E-mail is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please enter a valid email address",
                  },
                })}
              />
              <Mail className="absolute top-1/2 left-3 -translate-y-1/2 text-zinc-400" size={20} />
            </div>
            {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
          </div>
        )}
        <div className="w-full max-w-sm relative flex flex-col gap-y-1">
          <div className="relative">
            <input
              type="text"
              placeholder="Username"
              className={`w-full pl-10 pr-4 py-2 rounded-xl shadow-xl bg-zinc-600/10 border ${
                errors.username ? "border-red-500" : "border-zinc-800 focus:ring-1 focus:ring-primary"
              } text-zinc-100 placeholder:text-zinc-400 focus:outline-none`}
              {...register("username", {
                required: "Username is required",
                minLength: {
                  value: 3,
                  message: "Username must have at least 3 characters",
                },
              })}
            />
            <User className="absolute top-1/2 left-3 -translate-y-1/2 text-zinc-400" size={20} />
          </div>
          {errors.username && <span className="text-red-500 text-sm">{errors.username.message}</span>}
        </div>
        <div className="w-full max-w-sm relative flex flex-col gap-y-1">
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className={`w-full pl-10 pr-4 py-2 rounded-xl shadow-xl bg-zinc-600/10 border ${
                errors.password ? "border-red-500" : "border-zinc-800 focus:ring-1 focus:ring-primary"
              } text-zinc-100 placeholder:text-zinc-400 focus:outline-none`}
              {...register("password", {
                required: "Password is required",
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
                  message:
                    "Password must have at least 8 characters, including at least one uppercase letter, one lowercase letter, one number, and one special character",
                },
              })}
            />
            <PasswordIcon
              className="absolute top-1/2 left-3 -translate-y-1/2 text-zinc-400 cursor-pointer"
              size={20}
              onClick={() => setShowPassword((prev) => !prev)}
            />
          </div>
          {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
        </div>
        <button
          type="submit"
          className="px-6 py-3 mt-6 mb-4 rounded-xl backdrop-blur-xs border border-zinc-100/10 bg-zinc-100/10 font-semibold transition-al cursor-pointer duration-300 hover:bg-zinc-100/20"
        >
          {isLogin ? "Log-in" : "Sign-up"}
        </button>
      </form>
      <p className="text-zinc-400 text-center text-sm">
        {isLogin ? "Don't have an account?" : "Already have an account?"}
        <span
          onClick={() => {
            setIsLogin((prev) => !prev);
            reset();
          }}
          className="text-primary cursor-pointer"
        >
          {" "}
          {isLogin ? "Sign-up" : "Log-in"}
        </span>
      </p>
    </div>
  );
};

export default AccountPage;
