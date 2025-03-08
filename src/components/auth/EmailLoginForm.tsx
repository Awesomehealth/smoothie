
import React from "react";
import { Button } from "@/components/ui/button";

interface EmailLoginFormProps {
  email: string;
  password: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  handleEmailLogin: (e: React.FormEvent) => Promise<void>;
  handleEmailSignUp: (e: React.FormEvent) => Promise<void>;
  isLoading: boolean;
}

const EmailLoginForm: React.FC<EmailLoginFormProps> = ({
  email,
  password,
  setEmail,
  setPassword,
  handleEmailLogin,
  handleEmailSignUp,
  isLoading,
}) => {
  return (
    <form onSubmit={handleEmailLogin} className="w-full space-y-4 mb-6">
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-gray-700 block text-left">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="your@email.com"
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="password" className="text-sm font-medium text-gray-700 block text-left">
          Password
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="••••••••"
          minLength={6}
        />
        <p className="text-xs text-gray-500 mt-1">Password must be at least 6 characters</p>
      </div>
      
      <div className="flex gap-4 pt-2">
        <Button
          type="submit"
          className="flex-1 bg-primary hover:bg-primary/90"
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Log in"}
        </Button>
        
        <Button
          type="button"
          className="flex-1 bg-primary hover:bg-primary/90"
          onClick={handleEmailSignUp}
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Sign up"}
        </Button>
      </div>
    </form>
  );
};

export default EmailLoginForm;
