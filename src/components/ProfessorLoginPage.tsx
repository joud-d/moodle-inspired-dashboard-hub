
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Mail, Lock } from 'lucide-react';

interface ProfessorLoginPageProps {
  onLogin: () => void;
}

const ProfessorLoginPage: React.FC<ProfessorLoginPageProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

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
            <p className="text-white text-opacity-90">Professor Portal - Exam Review System</p>
          </div>
        </div>
      </div>
      
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          {/* Login Card */}
          <Card className="shadow-lg border-0">
            <CardHeader className="space-y-1 pb-6">
              <CardTitle className="text-2xl font-semibold text-center text-gray-900">
                Professor Portal Access
              </CardTitle>
              <CardDescription className="text-center text-gray-600">
                Sign in to review exam integrity reports
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
                      placeholder="professor@ju.edu.jo"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10 h-12 border-gray-200 focus:border-red-500 focus:ring-red-500"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                    Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-10 h-12 border-gray-200 focus:border-red-500 focus:ring-red-500"
                      required
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <input
                      id="remember"
                      type="checkbox"
                      className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                    />
                    <Label htmlFor="remember" className="text-sm text-gray-600">
                      Remember me
                    </Label>
                  </div>
                  <Link
                    to="/professor/forgot-password"
                    className="text-sm text-red-600 hover:text-red-800 hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 bg-red-600 hover:bg-red-700 text-white font-medium transition-colors"
                >
                  Sign In to Professor Portal
                </Button>
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

export default ProfessorLoginPage;
