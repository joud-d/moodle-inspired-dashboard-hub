
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from '@/hooks/use-toast';
import { GraduationCap, Home, Timer, Calendar, BookOpen, User, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProfessorSettingsPageProps {
  onLogout: () => void;
}

const ProfessorSettingsPage: React.FC<ProfessorSettingsPageProps> = ({ onLogout }) => {
  const [notifications, setNotifications] = useState(true);
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [language, setLanguage] = useState('english');
  const [timezone, setTimezone] = useState('jordan');

  const handleSaveSettings = () => {
    toast({
      title: "Settings Updated",
      description: "Your preferences have been saved successfully.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-20 md:w-64 bg-white border-r border-gray-200 shadow-sm flex flex-col fixed h-screen">
        {/* Logo */}
        <div className="h-16 bg-red-700 flex items-center justify-center">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
            <GraduationCap className="w-8 h-8 text-red-700" />
          </div>
          <span className="text-white text-lg font-bold ml-2 hidden md:inline">
            Jordan University
          </span>
        </div>
        
        {/* Navigation */}
        <div className="flex flex-col flex-1 py-6">
          <Link to="/professor/home" className="flex items-center justify-center md:justify-start px-4 py-3 text-gray-700 hover:bg-gray-100">
            <Home className="w-6 h-6" />
            <span className="ml-4 hidden md:inline">Home</span>
          </Link>
          <Link to="#" className="flex items-center justify-center md:justify-start px-4 py-3 text-gray-700 hover:bg-gray-100">
            <Timer className="w-6 h-6" />
            <span className="ml-4 hidden md:inline">Exam Reports</span>
          </Link>
          <Link to="#" className="flex items-center justify-center md:justify-start px-4 py-3 text-gray-700 hover:bg-gray-100">
            <Calendar className="w-6 h-6" />
            <span className="ml-4 hidden md:inline">Schedule</span>
          </Link>
          <Link to="#" className="flex items-center justify-center md:justify-start px-4 py-3 text-gray-700 hover:bg-gray-100">
            <BookOpen className="w-6 h-6" />
            <span className="ml-4 hidden md:inline">Analytics</span>
          </Link>
          <Link to="#" className="flex items-center justify-center md:justify-start px-4 py-3 text-gray-700 hover:bg-gray-100 bg-gray-100">
            <GraduationCap className="w-6 h-6" />
            <span className="ml-4 hidden md:inline">Settings</span>
          </Link>
        </div>
      </div>

      <div className="flex-1 ml-20 md:ml-64">
        {/* Header */}
        <header className="bg-red-700 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <h1 className="text-xl font-bold text-white">Professor Portal</h1>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 text-sm text-white">
                  <User className="w-4 h-4" />
                  <span>Dr. Ahmad Hassan</span>
                </div>
                <Button
                  onClick={onLogout}
                  variant="outline"
                  size="sm"
                  className="bg-white text-red-700 border-white hover:bg-gray-100"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  <span>Sign Out</span>
                </Button>
              </div>
            </div>
          </div>
        </header>
        
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Professor Settings</h2>
            <p className="text-gray-600">Manage your account preferences and course settings</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Profile Settings */}
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input id="fullName" defaultValue="Dr. Ahmad Hassan" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" defaultValue="ahmad.hassan@ju.edu.jo" />
                </div>
                <div>
                  <Label htmlFor="employeeId">Employee ID</Label>
                  <Input id="employeeId" defaultValue="EMP001" disabled />
                </div>
                <div>
                  <Label htmlFor="department">Department</Label>
                  <Input id="department" defaultValue="Computer Science" />
                </div>
                <div>
                  <Label htmlFor="office">Office</Label>
                  <Input id="office" defaultValue="CS Building, Room 205" />
                </div>
              </CardContent>
            </Card>

            {/* Notification Settings */}
            <Card>
              <CardHeader>
                <CardTitle>Notifications</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="notifications">Exam Alerts</Label>
                  <Switch 
                    id="notifications" 
                    checked={notifications}
                    onCheckedChange={setNotifications}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="emailAlerts">Email Notifications</Label>
                  <Switch 
                    id="emailAlerts" 
                    checked={emailAlerts}
                    onCheckedChange={setEmailAlerts}
                  />
                </div>
                <div>
                  <Label>Language</Label>
                  <Select value={language} onValueChange={setLanguage}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="english">English</SelectItem>
                      <SelectItem value="arabic">العربية</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Timezone</Label>
                  <Select value={timezone} onValueChange={setTimezone}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="jordan">Jordan (GMT+3)</SelectItem>
                      <SelectItem value="uae">UAE (GMT+4)</SelectItem>
                      <SelectItem value="saudi">Saudi Arabia (GMT+3)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Course Settings */}
            <Card>
              <CardHeader>
                <CardTitle>Course Management</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label>Auto-Grade Assignments</Label>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label>Enable AI Cheating Detection</Label>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label>Student Progress Tracking</Label>
                  <Switch defaultChecked />
                </div>
                <div>
                  <Label>Default Exam Duration</Label>
                  <Select defaultValue="120">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="60">60 minutes</SelectItem>
                      <SelectItem value="90">90 minutes</SelectItem>
                      <SelectItem value="120">120 minutes</SelectItem>
                      <SelectItem value="180">180 minutes</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Security Settings */}
            <Card>
              <CardHeader>
                <CardTitle>Security</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="outline" className="w-full">
                  Change Password
                </Button>
                <Button variant="outline" className="w-full">
                  Enable Two-Factor Authentication
                </Button>
                <Button variant="outline" className="w-full">
                  Download Teaching Data
                </Button>
                <Button variant="outline" className="w-full">
                  View Login History
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 flex justify-end">
            <Button onClick={handleSaveSettings} className="bg-red-600 hover:bg-red-700">
              Save Changes
            </Button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProfessorSettingsPage;
