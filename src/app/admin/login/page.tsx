import { Metadata } from "next";
import LoginForm from "./LoginForm";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Admin Login | Aachman Banquet",
  description: "Secure login portal for Aachman Banquet staff.",
};

export const dynamic = "force-dynamic";

export default function LoginPage() {
  return (
    <div className="min-h-screen w-full flex bg-background">
      {/* Left side - Login Form */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-8 sm:p-12">
        <div className="w-full max-w-md flex flex-col items-center space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-serif text-primary mb-2">Aachman Banquet</h1>
            <h2 className="text-xl text-muted-foreground font-medium">Admin Portal Login</h2>
          </div>
          
          <LoginForm />
          
          <p className="text-sm text-muted-foreground text-center mt-8">
            This is a secure portal. Authorized access only.
          </p>
        </div>
      </div>

      {/* Right side - Image */}
      <div className="hidden lg:block lg:w-1/2 relative bg-black">
        <Image 
          src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80"
          alt="Aachman Banquet Hall"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-12">
          <h2 className="text-4xl font-serif text-white mb-4">Manage Your Venue Seamlessly</h2>
          <p className="text-lg text-gray-300 max-w-md">Access your dashboard to manage bookings, view leads, and update your public profile.</p>
        </div>
      </div>
    </div>
  );
}
