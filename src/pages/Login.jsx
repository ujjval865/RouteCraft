import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { supabase } from "../services/supabase";
import {
  ArrowRight,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  Plane,
  Sparkles,
} from "lucide-react";

function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    try {
      setLoading(true);

      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      if (error) throw error;

      console.log("Login successful:", data);

      setSuccess("Login successful! Welcome to RouteCraft.");

      navigate("/");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#F7F5EF] px-5 py-28 text-[#172B3A] sm:px-8">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#A8E3D9]/30 blur-[100px]" />

      <div className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-[#238A83]/15 blur-[110px]" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl overflow-hidden rounded-[2.5rem] border border-white/80 bg-white/45 shadow-[0_25px_90px_rgba(23,43,58,0.12)] backdrop-blur-2xl lg:grid-cols-2">
        {/* Left Side - Travel Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative hidden min-h-[680px] overflow-hidden lg:block"
        >
          <img
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1400"
            alt="Beautiful mountain lake travel destination"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#172B3A]/90 via-[#172B3A]/20 to-transparent" />

          <div className="absolute left-10 top-10 flex items-center gap-3 text-white">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/30 bg-white/20 backdrop-blur-xl">
              <Plane size={24} />
            </div>

            <span className="text-2xl font-bold tracking-tight">
              RouteCraft
            </span>
          </div>

          <div className="absolute bottom-12 left-10 right-10 text-white">
            <div className="mb-5 flex items-center gap-2 text-[#A8E3D9]">
              <Sparkles size={20} />
              <span className="font-semibold tracking-wide">
                YOUR NEXT ADVENTURE STARTS HERE
              </span>
            </div>

            <h2 className="text-5xl font-bold leading-tight">
              The world is waiting.
              <span className="block text-[#A8E3D9]">Let's explore it.</span>
            </h2>

            <p className="mt-5 max-w-md text-lg leading-relaxed text-white/75">
              Discover beautiful places, plan meaningful journeys and turn your
              travel dreams into reality.
            </p>
          </div>
        </motion.div>

        {/* Right Side - Login Form */}
        <motion.div
          initial={{ opacity: 0, x: 35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex flex-col justify-center p-7 sm:p-12 lg:p-14"
        >
          {/* Mobile Brand */}
          <Link to="/" className="mb-12 flex items-center gap-3 lg:hidden">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#172B3A] text-white">
              <Plane size={24} />
            </div>

            <span className="text-2xl font-bold">RouteCraft</span>
          </Link>

          <div className="mb-9">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#238A83]/20 bg-[#A8E3D9]/20 px-4 py-2 text-sm font-semibold text-[#238A83]">
              <Sparkles size={16} />
              Welcome Back
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
              Sign in to your
              <span className="block text-[#238A83]">account.</span>
            </h1>

            <p className="mt-4 text-lg leading-relaxed text-[#172B3A]/60">
              Continue your journey and manage all your travel plans in one
              place.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-base font-semibold"
              >
                Email Address
              </label>

              <div className="flex items-center gap-3 rounded-2xl border border-[#172B3A]/10 bg-white/70 px-5 py-4 transition-all duration-300 focus-within:border-[#238A83] focus-within:ring-4 focus-within:ring-[#238A83]/10">
                <Mail size={21} className="shrink-0 text-[#238A83]" />

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  autoComplete="email"
                  required
                  className="w-full bg-transparent text-base outline-none placeholder:text-[#172B3A]/35"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-base font-semibold"
              >
                Password
              </label>

              <div className="flex items-center gap-3 rounded-2xl border border-[#172B3A]/10 bg-white/70 px-5 py-4 transition-all duration-300 focus-within:border-[#238A83] focus-within:ring-4 focus-within:ring-[#238A83]/10">
                <LockKeyhole size={21} className="shrink-0 text-[#238A83]" />

                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  required
                  className="w-full bg-transparent text-base outline-none placeholder:text-[#172B3A]/35"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="shrink-0 text-[#172B3A]/50 transition hover:text-[#238A83]"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={21} /> : <Eye size={21} />}
                </button>
              </div>
            </div>

            {/* Forgot Password */}
            <div className="flex justify-end">
              <button
                type="button"
                className="text-sm font-semibold text-[#238A83] transition hover:text-[#172B3A]"
              >
                Forgot Password?
              </button>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-[#172B3A] px-6 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#238A83] hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Signing In..." : "Sign In"}

              {!loading && (
                <ArrowRight
                  size={21}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              )}
            </button>
            {error && (
              <p className="rounded-xl bg-red-100 p-3 text-sm text-red-600">
                {error}
              </p>
            )}

            {success && (
              <p className="rounded-xl bg-green-100 p-3 text-sm text-green-700">
                {success}
              </p>
            )}
          </form>

          {/* Signup Link */}
          <p className="mt-9 text-center text-base text-[#172B3A]/60">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="font-bold text-[#238A83] transition hover:text-[#172B3A]"
            >
              Create Account
            </Link>
          </p>

          <p className="mt-12 text-center text-sm text-[#172B3A]/40">
            Your next journey is just one step away.
          </p>
        </motion.div>
      </div>
    </main>
  );
}

export default Login;
