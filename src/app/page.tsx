'use client'

import { DashboardLayout } from "@/components/layout/DashboardLayout"
import { sanitizeText } from "@/lib/utils"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { mockProjects, mockActivities, mockAnalytics } from "@/lib/mock-data"
import {
  Building2,
  Users,
  DollarSign,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle,
  Plus,
  ArrowRight,
  Calendar,
  FileText,
  Eye
} from "lucide-react"

export default function Dashboard() {
  const recentProjects = mockProjects.slice(0, 3)
  const recentActivities = mockActivities.slice(0, 5)

  return (
    <DashboardLayout 
        title="Dashboard" 
        description="Welcome back! Here's what's happening with your projects."
      >
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Projects</p>
                  <p className="text-2xl font-bold text-gray-900">{mockAnalytics.activeProjects}</p>
                  <p className="text-xs text-green-600 mt-1">+2 this week</p>
                </div>
                <div className="p-3 bg-blue-100 rounded-full">
                  <Building2 className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Clients</p>
                  <p className="text-2xl font-bold text-gray-900">32</p>
                  <p className="text-xs text-green-600 mt-1">+5 this month</p>
                </div>
                <div className="p-3 bg-green-100 rounded-full">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Revenue</p>
                  <p className="text-2xl font-bold text-gray-900">${mockAnalytics.totalRevenue.toLocaleString()}</p>
                  <p className="text-xs text-green-600 mt-1">+12% from last month</p>
                </div>
                <div className="p-3 bg-purple-100 rounded-full">
                  <DollarSign className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Completion Rate</p>
                  <p className="text-2xl font-bold text-gray-900">{mockAnalytics.clientSatisfaction}%</p>
                  <p className="text-xs text-green-600 mt-1">+3% improvement</p>
                </div>
                <div className="p-3 bg-orange-100 rounded-full">
                  <TrendingUp className="w-6 h-6 text-orange-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Projects */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Recent Projects</CardTitle>
                  <Button variant="outline" size="sm">
                    View All
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentProjects.map((project) => (
                    <div key={project.id} className="flex items-center space-x-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                        <Building2 className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {project.name}
                        </p>
                        <p className="text-sm text-gray-500">{project.client}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                            project.status === 'completed' ? 'bg-green-100 text-green-600' :
                            project.status === 'in-progress' ? 'bg-blue-100 text-blue-600' :
                            project.status === 'review' ? 'bg-yellow-100 text-yellow-600' :
                            'bg-gray-100 text-gray-600'
                          }`}>
                            {project.status.replace('-', ' ')}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-gray-900">{project.progress}%</div>
                        <div className="w-20 bg-gray-200 rounded-full h-2 mt-1">
                          <div 
                            className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                            style={{ width: `${project.progress}%` }}
                          ></div>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Eye className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <Button className="w-full">
                    <Plus className="mr-2 w-4 h-4" />
                    Create New Project
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Activity Feed */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity) => (
                    <div key={activity.id} className="flex space-x-3">
                      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                        activity.type === 'project_created' ? 'bg-blue-100' :
                        activity.type === 'file_uploaded' ? 'bg-green-100' :
                        activity.type === 'milestone_completed' ? 'bg-purple-100' :
                        'bg-yellow-100'
                      }`}>
                        {activity.type === 'project_created' && <Building2 className="w-4 h-4 text-blue-600" />}
                        {activity.type === 'file_uploaded' && <FileText className="w-4 h-4 text-green-600" />}
                        {activity.type === 'milestone_completed' && <CheckCircle className="w-4 h-4 text-purple-600" />}
                        {activity.type === 'comment_added' && <AlertCircle className="w-4 h-4 text-yellow-600" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-900">
                          <span dangerouslySetInnerHTML={{ __html: sanitizeText(activity.message) }} />
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          {activity.user} • {new Date(activity.timestamp).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Plus className="mr-2 w-4 h-4" />
                    New Project
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Users className="mr-2 w-4 h-4" />
                    Add Client
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Calendar className="mr-2 w-4 h-4" />
                    Schedule Meeting
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <FileText className="mr-2 w-4 h-4" />
                    Upload Files
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Upcoming Deadlines */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Upcoming Deadlines</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {mockProjects
                .filter(p => p.status !== 'completed')
                .slice(0, 4)
                .map((project) => (
                  <div key={project.id} className="p-4 border rounded-lg bg-gray-50">
                    <h4 className="font-medium text-gray-900 truncate">{project.name}</h4>
                    <p className="text-sm text-gray-600 mt-1">{project.client}</p>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {new Date(project.deadline).toLocaleDateString()}
                      </div>
                      <div className={`px-2 py-1 rounded text-xs font-medium ${
                        new Date(project.deadline) < new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) 
                          ? 'bg-red-100 text-red-600' 
                          : 'bg-yellow-100 text-yellow-600'
                      }`}>
                        {Math.ceil((new Date(project.deadline).getTime() - Date.now()) / (1000 * 60 * 60 * 24))} days
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </CardContent>
        </Card>
      </DashboardLayout>
  )
}
