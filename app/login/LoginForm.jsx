"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { login } from "./actions";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export function LoginForm() {
  const [state, loginAction] = useActionState(login, undefined);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form
      action={loginAction}
      className="flex w-full max-w-xl flex-col gap-6 text-white z-20"
    >
      {/* USERNAME FIELD */}
      <div className="relative">
        <input
          id="email"
          name="email"
          placeholder="Username"
          className="w-full py-3 px-4 rounded-full bg-white/90 text-gray-700 shadow-lg focus:outline-none"
        />
      </div>

      {state?.errors?.email && (
        <p className="text-red-300">{state.errors.email}</p>
      )}

      {/* PASSWORD FIELD WITH EYE ICON */}
      <div className="relative">
        <input
          id="password"
          name="password"
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          className="w-full py-3 px-4 rounded-full bg-white/90 text-gray-700 shadow-lg focus:outline-none"
        />

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600"
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>

      {state?.errors?.password && (
        <p className="text-red-300">{state.errors.password}</p>
      )}

      {/* STAY SIGNED IN + FORGOT PASSWORD */}
      <div className="flex justify-between items-center text-white text-sm">
        {/* <label className="flex items-center gap-2">
          <input type="checkbox" className="w-4 h-4 accent-white" />
          Stay signed in
        </label> */}

        {/* <button type="button" className="hover:underline">
          Forgot password
        </button> */}
      </div>

      <SubmitButton />
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      type="submit"
      className="mt-2 w-40 mx-auto py-3 rounded-full bg-[#2C1E4A] hover:bg-[#1A1130] text-white font-semibold shadow-lg transition disabled:opacity-50"
    >
      LOGIN
    </button>
  );
}
