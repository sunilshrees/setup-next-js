import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function WelcomePage() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Decorative elements */}
      <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-pink-100 opacity-60 blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-blue-100 opacity-60 blur-3xl"></div>
      <div className="absolute left-1/2 top-0 h-[1px] w-[40%] -translate-x-1/2 bg-gradient-to-r from-transparent via-pink-200 to-transparent"></div>
      <div className="absolute bottom-0 left-1/2 h-[1px] w-[40%] -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>

      {/* Animated circles */}
      <div className="absolute left-[15%] top-[20%] h-6 w-6 animate-pulse rounded-full bg-pink-200 opacity-70"></div>
      <div className="absolute bottom-[20%] right-[15%] h-8 w-8 animate-pulse rounded-full bg-blue-200 opacity-70"></div>
      <div className="absolute left-[10%] top-[60%] h-4 w-4 animate-pulse rounded-full bg-purple-200 opacity-70"></div>
      <div className="absolute right-[10%] top-[30%] h-5 w-5 animate-pulse rounded-full bg-yellow-200 opacity-70"></div>

      <div className="relative z-10 w-full max-w-md px-4">
        <div className="absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-200 to-pink-200 opacity-20 blur-2xl"></div>

        <Card className="overflow-hidden border-none bg-white/80 shadow-xl backdrop-blur-sm">
          <div className="absolute right-0 top-0 h-16 w-16 -translate-y-1/2 translate-x-1/2 rounded-full bg-gradient-to-br from-violet-400 to-indigo-400 opacity-20 blur-xl"></div>

          <CardHeader className="pb-4 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-8 w-8 text-white"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
            </div>
            <CardTitle className="text-3xl font-bold tracking-tight text-gray-900">
              Welcome!
            </CardTitle>
            <CardDescription className="text-gray-600">
              We are delighted to have you join us
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4 text-center">
            <p className="text-gray-700">
              Thank you for joining our platform. We haveve created an
              experience that we hope you will love.
            </p>
            <p className="text-gray-700">
              Discover all the amazing features we have to offer and start your
              journey with us today.
            </p>
          </CardContent>

          <div className="mx-auto my-6 h-[1px] w-[80%] bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

          <CardFooter className="flex justify-center pb-8">
            <Button
              asChild
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-8 py-6 text-white shadow-md transition-all hover:shadow-lg"
            >
              <Link href="/dashboard" className="flex items-center font-medium">
                <span className="relative z-10">Get Started</span>
                <ArrowRight className="relative z-10 ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                <span className="absolute inset-0 bg-gradient-to-r from-violet-500 to-indigo-500 opacity-0 transition-opacity group-hover:opacity-100"></span>
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <div className="mt-6 text-center text-sm text-gray-500">
          <p>© 2025 Your Company. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
