"use client";

import { CheckCircle, Clock, Sparkles, Mail } from "lucide-react";
import { useEffect, useState } from "react";

interface SuccessMessageProps {
  show: boolean;
  onComplete?: () => void;
}

export function SuccessMessage({ show, onComplete }: SuccessMessageProps) {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    if (!show) return;

    setProgress(100);

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev - 2;
        return next <= 0 ? 0 : next;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [show]);

  // ✅ This effect runs when progress hits 0
  useEffect(() => {
    if (progress === 0) {
      onComplete?.();
    }
  }, [progress, onComplete]);

  return (
    <div className="flex flex-col items-center justify-center h-full min-h-[600px] p-8 animate-in fade-in-50 slide-in-from-bottom-4 duration-700">
      {/* Main Success Icon */}
      <div className="relative mb-8">
        <div className="w-24 h-24 bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900 dark:to-emerald-900 rounded-full flex items-center justify-center shadow-2xl">
          <CheckCircle className="h-12 w-12 text-green-600 dark:text-green-400 animate-in zoom-in-50 duration-500 delay-200" />
        </div>
        <Sparkles className="h-6 w-6 text-green-500 absolute -top-2 -right-2 animate-bounce delay-500" />
        <Sparkles className="h-4 w-4 text-emerald-400 absolute -bottom-1 -left-2 animate-bounce delay-700" />
        <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-20 delay-300"></div>
      </div>

      {/* Success Text */}
      <div className="text-center mb-8 space-y-4">
        <h2 className="text-3xl font-bold text-green-800 dark:text-green-200 flex items-center justify-center gap-3 animate-in slide-in-from-bottom-2 duration-500 delay-300">
          Message Sent Successfully!
          <span className="text-3xl animate-bounce delay-500">🎉</span>
        </h2>

        <div className="flex items-center justify-center space-x-3 text-green-700 dark:text-green-300 animate-in slide-in-from-bottom-2 duration-500 delay-400">
          <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
            <Clock className="h-4 w-4 text-green-600 dark:text-green-400" />
          </div>
          <p className="text-lg font-medium">
            You will receive a reply within a week
          </p>
        </div>

        <div className="flex items-center justify-center space-x-3 text-slate-600 dark:text-slate-400 animate-in slide-in-from-bottom-2 duration-500 delay-500">
          <Mail className="h-5 w-5" />
          <p className="text-sm">
            Thank you for reaching out! I&apos;m excited to connect with you.
          </p>
        </div>
      </div>

      {/* Animated Progress Section */}
      <div className="w-full max-w-md space-y-4 animate-in slide-in-from-bottom-2 duration-500 delay-600">
        <div className="text-center">
          <p className="text-sm text-green-600 dark:text-green-400 font-medium mb-2">
            Returning to form in {Math.ceil(progress / 20)} seconds
          </p>
        </div>

        {/* Circular Progress */}
        <div className="relative w-20 h-20 mx-auto">
          <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
            <path
              className="text-green-200 dark:text-green-800"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className="text-green-500 transition-all duration-100 ease-linear"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
              strokeDasharray={`${progress}, 100`}
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-lg font-bold text-green-600 dark:text-green-400">
              {Math.ceil(progress / 20)}
            </span>
          </div>
        </div>

        {/* Linear Progress Bar */}
        <div className="w-full bg-green-200 dark:bg-green-800 rounded-full h-2 overflow-hidden shadow-inner">
          <div
            className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full transition-all duration-100 ease-linear shadow-sm relative overflow-hidden"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-8 left-8 w-2 h-2 bg-green-400 rounded-full animate-ping delay-1000"></div>
      <div className="absolute top-16 right-12 w-1 h-1 bg-emerald-400 rounded-full animate-ping delay-1200"></div>
      <div className="absolute bottom-16 left-16 w-1.5 h-1.5 bg-green-500 rounded-full animate-ping delay-800"></div>
    </div>
  );
}
