"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { signup } from "../login/actions";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function SignupForm() {
  const [state, signupAction] = useActionState(signup, undefined);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form
      action={signupAction}
      className="flex w-full max-w-xl flex-col gap-6 text-white z-20"
    >
      {/* NAME */}
      <input
        name="name"
        placeholder="Full Name"
        className="w-full py-3 px-4 rounded-full bg-white/90 text-gray-700 shadow-lg focus:outline-none"
      />
      {state?.errors?.name && (
        <p className="text-red-300">{state.errors.name}</p>
      )}

      {/* EMAIL */}
      <input
        name="email"
        placeholder="Email"
        className="w-full py-3 px-4 rounded-full bg-white/90 text-gray-700 shadow-lg focus:outline-none"
      />
      {state?.errors?.email && (
        <p className="text-red-300">{state.errors.email}</p>
      )}

      {/* PASSWORD */}
      <div className="relative">
        <input
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

      <SubmitButton />

      {/* Login Redirect */}
      <div className="text-center mt-4">
        <a
          href="/login"
          className="text-white underline hover:text-gray-200 transition"
        >
          Already have an account? Login
        </a>
      </div>
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
      SIGN UP
    </button>
  );
}
