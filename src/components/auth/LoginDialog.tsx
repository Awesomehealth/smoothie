
import React, { useState } from "react";
import { X, Mail } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import SocialLoginButtons from "./SocialLoginButtons";
import EmailLoginForm from "./EmailLoginForm";
import Divider from "./Divider";
import { useAuthMethods } from "@/hooks/use-auth-methods";

interface LoginDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginDialog = ({ isOpen, onClose }: LoginDialogProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState<"default" | "email">("default");
  
  const {
    isLoading,
    handleSignInWithGoogle,
    handleSignInWithFacebook,
    handleSignInWithX,
    handleEmailLogin,
    handleEmailSignUp,
  } = useAuthMethods(onClose);

  const toggleEmailMode = () => {
    setMode(mode === "default" ? "email" : "default");
    setEmail("");
    setPassword("");
  };

  const handleEmailLoginWrapped = (e: React.FormEvent) => {
    handleEmailLogin(e, email, password);
  };

  const handleEmailSignUpWrapped = (e: React.FormEvent) => {
    handleEmailSignUp(e, email, password);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md p-0 gap-0 overflow-hidden">
        <div className="relative p-6 flex flex-col items-center">
          <button 
            onClick={onClose}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
          
          <div className="flex items-center justify-center mb-4">
            <span className="text-xl font-bold text-slate-950">Awesome Health</span>
          </div>
          
          <h2 className="text-2xl font-semibold text-center mb-6">Live a long healthy life</h2>
          
          {mode === "default" ? (
            <>
              <SocialLoginButtons 
                handleSignInWithGoogle={handleSignInWithGoogle}
                handleSignInWithFacebook={handleSignInWithFacebook}
                handleSignInWithX={handleSignInWithX}
              />
              
              <Divider text="Or" />
              
              <Button 
                variant="outline" 
                className="w-full justify-center mb-6 hover:bg-mint-50 hover:text-slate-900" 
                onClick={toggleEmailMode}
              >
                <Mail className="h-4 w-4 mr-2" />
                <span>Sign up/Log in with email</span>
              </Button>
            </>
          ) : (
            <>
              <EmailLoginForm 
                email={email}
                password={password}
                setEmail={setEmail}
                setPassword={setPassword}
                handleEmailLogin={handleEmailLoginWrapped}
                handleEmailSignUp={handleEmailSignUpWrapped}
                isLoading={isLoading}
              />
              
              <Divider text="Or" />
              
              <Button 
                variant="outline" 
                className="w-full justify-center mb-6 hover:bg-mint-50 hover:text-slate-900" 
                onClick={toggleEmailMode}
              >
                <span>Continue with social accounts</span>
              </Button>
            </>
          )}
          
          <p className="text-xs text-gray-500 text-center">
            By continuing, you agree to Terms of Service and have read our Privacy Policy.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;
