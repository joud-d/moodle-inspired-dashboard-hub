
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Mail, ArrowLeft, CheckCircle } from 'lucide-react';

const ForgotPasswordPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        {/* University Header */}
        <div className="bg-red-700 w-full py-4">
          <div className="container mx-auto px-4 flex items-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <GraduationCap className="w-10 h-10 text-red-700" />
            </div>
            <div className="ml-4">
              <h1 className="text-2xl font-bold text-white">Jordan University</h1>
              <p className="text-white text-opacity-90">Student Learning Management System</p>
            </div>
          </div>
        </div>
        
        <div className="flex-1 flex items-center justify-center px-4 py-12">
          <div className="w-full max-w-md">
            <Card className="shadow-lg border-0">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">Check Your Email</h2>
                  <p className="text-gray-600 mb-6">
                    We've sent password reset instructions to <span className="font-medium">{email}</span>
                  </p>
                  <Link to="/login">
                    <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                      Back to Sign In
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            
            {/* Footer */}
            <div className="text-center mt-8 text-sm text-gray-500">
              <p>© 2024 Jordan University. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* University Header */}
      <div className="bg-red-700 w-full py-4">
        <div className="container mx-auto px-4 flex items-center">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
            <GraduationCap className="w-10 h-10 text-red-700" />
          </div>
          <div className="ml-4">
            <h1 className="text-2xl font-bold text-white">Jordan University</h1>
            <p className="text-white text-opacity-90">Student Learning Management System</p>
          </div>
        </div>
      </div>
      
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <Card className="shadow-lg border-0">
            <CardHeader className="space-y-1 pb-6">
              <CardTitle className="text-2xl font-semibold text-center text-gray-900">
                Reset Password
              </CardTitle>
              <CardDescription className="text-center text-gray-600">
                Enter your email address and we'll send you instructions to reset your password
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email Address
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="student@ju.edu.jo"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10 h-12 border-gray-200 focus:border-red-500 focus:ring-red-500"
                      required
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 bg-red-600 hover:bg-red-700 text-white font-medium transition-colors"
                >
                  Send Reset Instructions
                </Button>

                <Link
                  to="/login"
                  className="flex items-center justify-center space-x-2 text-sm text-red-600 hover:text-red-800 hover:underline"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Sign In</span>
                </Link>
              </form>
            </CardContent>
          </Card>
          
          {/* Footer */}
          <div className="text-center mt-8 text-sm text-gray-500">
            <p>© 2024 Jordan University. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
