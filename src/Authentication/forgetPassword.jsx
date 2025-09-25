import React, { useState } from "react";
import { Mail, Lock, Check, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

 

export  function ForgetPassword() {
  const [step, setStep] = useState(1); 
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const validEmail = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
  const strongPassword = (p) => p.length >= 8;

  // placeholder async functions — replace with real API calls
  const sendResetEmail = async () => {
    setError("");
    if (!validEmail(email)) return setError("Please enter a valid email address.");
    setLoading(true);
    try {
      // await api.sendResetEmail({ email });
      await new Promise((r) => setTimeout(r, 900));
      setStep(2);
    } catch (e) {
      setError("Failed to send reset email. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const verifyOtp = async () => {
    setError("");
    if (otp.trim().length < 4) return setError("Enter the 4-6 digit code sent to your email.");
    setLoading(true);
    try {
      // await api.verifyOtp({ email, otp });
      await new Promise((r) => setTimeout(r, 700));
      setStep(3);
    } catch (e) {
      setError("Invalid or expired code. Request a new one.");
    } finally {
      setLoading(false);
    }
  };

  const resetPassword = async () => {
    setError("");
    if (!strongPassword(password)) return setError("Password must be at least 8 characters.");
    if (password !== confirmPassword) return setError("Passwords do not match.");
    setLoading(true);
    try {
      // await api.resetPassword({ email, otp, password });
      await new Promise((r) => setTimeout(r, 900));
      setStep(4);
    } catch (e) {
      setError("Could not reset password — try again.");
    } finally {
      setLoading(false);
    }
  };

  const backTo = (s) => {
    setError("");
    setStep(s);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-white p-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="max-w-md w-full bg-white shadow-lg rounded-2xl p-6 sm:p-8"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-indigo-50 p-2 rounded-md">
            <Mail className="h-5 w-5 text-indigo-600" />
          </div>
          <div>
            <h2 className="text-lg font-semibold">Forgot your password?</h2>
            <p className="text-sm text-slate-500">No worries — we’ll help you get back in.</p>
          </div>
        </div>

        {/* Step content */}
        {step === 1 && (
          <div>
            <label className="block text-sm font-medium text-slate-700">Email address</label>
            <div className="mt-2 relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                placeholder="you@example.com"
                aria-label="Email address"
              />
            </div>

            {error && <div className="text-sm text-red-500 mt-2">{error}</div>}

            <div className="mt-6 flex items-center gap-3">
              <button
                onClick={sendResetEmail}
                disabled={loading}
                className="flex-1 inline-flex justify-center items-center gap-2 rounded-lg py-2 font-semibold shadow-sm bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send reset link"}
              </button>
              <button
                onClick={() => { setEmail(""); setError(""); }}
                className="px-3 py-2 rounded-lg border text-sm"
              >
                Clear
              </button>
            </div>

            <div className="mt-4 text-xs text-slate-400">
              We will send a one-time code to your email. It may take a few minutes to arrive.
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <button className="flex items-center gap-2 text-sm text-slate-500 mb-4" onClick={() => backTo(1)}>
              <ArrowLeft className="h-4 w-4" /> Back
            </button>

            <p className="text-sm text-slate-600">Enter the verification code we sent to <strong>{email}</strong></p>

            <div className="mt-4">
              <label className="block text-sm font-medium text-slate-700">Verification code</label>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full rounded-lg border px-3 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                placeholder="Enter code"
                aria-label="Verification code"
              />
            </div>

            {error && <div className="text-sm text-red-500 mt-2">{error}</div>}

            <div className="mt-6 flex gap-3">
              <button
                onClick={verifyOtp}
                disabled={loading}
                className="flex-1 py-2 rounded-lg font-semibold bg-indigo-600 text-white disabled:opacity-60"
              >
                {loading ? "Verifying..." : "Verify code"}
              </button>
              <button
                onClick={() => { setStep(1); setOtp(""); }}
                className="px-3 py-2 rounded-lg border"
              >
                Edit email
              </button>
            </div>

            <div className="mt-4 text-xs text-slate-400">
              Didn’t get it? <button className="underline" onClick={sendResetEmail}>Resend code</button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <button className="flex items-center gap-2 text-sm text-slate-500 mb-4" onClick={() => backTo(2)}>
              <ArrowLeft className="h-4 w-4" /> Back
            </button>

            <label className="block text-sm font-medium text-slate-700">New password</label>
            <div className="mt-2 relative">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                placeholder="Create a strong password"
                aria-label="New password"
              />
            </div>

            <label className="block text-sm font-medium text-slate-700 mt-4">Confirm password</label>
            <div className="mt-2">
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                placeholder="Repeat your password"
                aria-label="Confirm password"
              />
            </div>

            <div className="mt-2 text-xs text-slate-400">Password must be at least 8 characters.</div>

            {error && <div className="text-sm text-red-500 mt-2">{error}</div>}

            <div className="mt-6">
              <button
                onClick={resetPassword}
                disabled={loading}
                className="w-full py-2 rounded-lg font-semibold bg-indigo-600 text-white disabled:opacity-60"
              >
                {loading ? "Resetting..." : "Reset password"}
              </button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="text-center py-6">
            <div className="mx-auto w-20 h-20 rounded-full bg-green-50 flex items-center justify-center">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">Password reset</h3>
            <p className="mt-2 text-sm text-slate-600">Your password has been updated successfully. You can now sign in with your new password.</p>

            <div className="mt-6 flex gap-3 justify-center">
              <button
                onClick={() => { /* navigate to login */ }}
                className="py-2 px-4 rounded-lg bg-indigo-600 text-white font-semibold"
              >
                Go to sign in
              </button>
              <button
                onClick={() => { setStep(1); setEmail(""); setOtp(""); setPassword(""); setConfirmPassword(""); }}
                className="py-2 px-4 rounded-lg border"
              >
                Reset another
              </button>
            </div>
          </div>
        )}

        {/* small footer */}
        <div className="mt-6 text-center text-xs text-slate-400">
          Tip: Keep passwords unique and consider using a password manager.
        </div>
      </motion.div>
    </div>
  );
}
