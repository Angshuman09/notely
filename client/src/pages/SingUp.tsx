import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema, type userData } from "../zod-validation/user";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";
import { useUserRegister } from "@/hooks/user";

const SignUp = () => {
  const {mutate, isPending} = useUserRegister();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<userData>({
    resolver: zodResolver(userSchema),
    mode: "onBlur",
  });

  const onSubmit = (data: userData) => {
    mutate(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-stone-50 via-amber-50/30 to-stone-100 px-4 py-10">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-md border border-stone-200 rounded-3xl shadow-xl p-6 sm:p-8 space-y-6">

        {/* Heading */}
        <div className="text-center space-y-1">
          <h1 className="text-2xl font-semibold text-black">Create Account</h1>
          <p className="text-sm text-stone-600">Join us today</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          
          {/* Email */}
          <div className="space-y-2">
            <input
              {...register("email")}
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-xl border border-stone-300 bg-white/70 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition placeholder:text-stone-400"
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div className="space-y-2">
            <input
              {...register("password")}
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 rounded-xl border border-stone-300 bg-white/70 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition placeholder:text-stone-400"
            />
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>

          {/* Login link */}
          <p className="text-sm text-center text-stone-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-black hover:text-amber-600 transition"
            >
              Log in
            </Link>
          </p>

          {/* Submit */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-black hover:bg-stone-900 text-white rounded-xl py-3 text-sm font-medium shadow-md transition"
          >
            {isSubmitting ? "Creating..." : "Sign Up"}
          </Button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3">
          <div className="flex-1 h-px bg-stone-200" />
          <span className="text-xs text-stone-400">OR</span>
          <div className="flex-1 h-px bg-stone-200" />
        </div>

        {/* Back to Home */}
        <Link to="/" className="block">
          <Button
            variant="ghost"
            className="w-full font-shadow-outline flex items-center justify-center gap-2 rounded-xl border-stone-300 text-stone-700 hover:bg-white transition"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
