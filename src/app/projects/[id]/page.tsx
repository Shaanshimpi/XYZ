'use client'

import { useState } from 'react'
import { DashboardLayout } from "@/components/layout/DashboardLayout"
import { sanitizeText } from "@/lib/utils"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { mockProjects } from "@/lib/mock-data"
import {
  Building2,
  Calendar,
  DollarSign,
  User,
  FileText,
  Download,
  Upload,
  Eye,
  Edit,
  Share2,
  MessageSquare,
  CheckCircle,
  Clock,
  Play,
  Maximize,
  RotateCcw,
  Layers,
  Settings,
  Camera,
  Grid3X3
} from "lucide-react"

interface PageProps {
  params: { id: string }
}

export default function ProjectDetailPage({ params }: PageProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'files' | 'timeline' | 'comments'>('overview')
  const [viewerMode, setViewerMode] = useState<'2d' | '3d' | 'vr'>('3d')
  
  // Mock project data - in real app, fetch by params.id
  const project = mockProjects[0]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-700 border-green-200'
      case 'in-progress': return 'bg-blue-100 text-blue-700 border-blue-200'
      case 'review': return 'bg-yellow-100 text-yellow-700 border-yellow-200'
      case 'on-hold': return 'bg-red-100 text-red-700 border-red-200'
      default: return 'bg-gray-100 text-gray-700 border-gray-200'
    }
  }

  return (
    <DashboardLayout 
      title={project.name}
      description={`Project for ${project.client} • ${project.type.replace('-', ' ')}`}
    >
      <div className="space-y-6">
        {/* Header Actions */}
        <div className="flex flex-wrap gap-3 justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(project.status)}`}>
              {project.status.replace('-', ' ')}
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <User className="w-4 h-4 mr-1" />
              {project.assignedTo}
            </div>
          </div>
          
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Share2 className="mr-2 w-4 h-4" />
              Share
            </Button>
            <Button variant="outline" size="sm">
              <Download className="mr-2 w-4 h-4" />
              Export
            </Button>
            <Button size="sm">
              <Edit className="mr-2 w-4 h-4" />
              Edit
            </Button>
          </div>
        </div>

        {/* 3D Viewer */}
        <Card className="overflow-hidden">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center">
                <Eye className="mr-2 w-5 h-5" />
                3D Visualization
              </CardTitle>
              <div className="flex items-center space-x-2">
                {/* Viewer Mode Toggle */}
                <div className="flex border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setViewerMode('2d')}
                    className={`px-3 py-1 text-sm ${viewerMode === '2d' ? 'bg-blue-50 text-blue-600' : 'text-gray-600'}`}
                  >
                    2D
                  </button>
                  <button
                    onClick={() => setViewerMode('3d')}
                    className={`px-3 py-1 text-sm ${viewerMode === '3d' ? 'bg-blue-50 text-blue-600' : 'text-gray-600'}`}
                  >
                    3D
                  </button>
                  <button
                    onClick={() => setViewerMode('vr')}
                    className={`px-3 py-1 text-sm ${viewerMode === 'vr' ? 'bg-blue-50 text-blue-600' : 'text-gray-600'}`}
                  >
                    VR
                  </button>
                </div>
                
                <Button variant="outline" size="sm">
                  <Maximize className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center">
              {/* Mock 3D Viewer */}
              <div className="text-white text-center">
                <Building2 className="w-24 h-24 mx-auto mb-4 opacity-50" />
                <h3 className="text-xl font-semibold mb-2">3D Model Viewer</h3>
                <p className="text-gray-300 mb-6">Interactive architectural visualization</p>
                <div className="flex justify-center space-x-4">
                  <Button variant="outline" size="sm" className="text-white border-white/30 hover:bg-white/10">
                    <Play className="mr-2 w-4 h-4" />
                    Play Tour
                  </Button>
                  <Button variant="outline" size="sm" className="text-white border-white/30 hover:bg-white/10">
                    <Camera className="mr-2 w-4 h-4" />
                    Screenshot
                  </Button>
                </div>
              </div>
              
              {/* Floating Controls */}
              <div className="absolute bottom-4 left-4 flex space-x-2">
                <Button variant="outline" size="sm" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                  <RotateCcw className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                  <Layers className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                  <Grid3X3 className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                  <Settings className="w-4 h-4" />
                </Button>
              </div>
              
              {/* View Info */}
              <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-2 rounded-lg text-sm">
                Camera: Perspective View
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Project Overview */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Project Details</CardTitle>
                  <div className="flex space-x-2">
                    {['overview', 'files', 'timeline', 'comments'].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab as any)}
                        className={`px-3 py-1 text-sm font-medium rounded-lg ${
                          activeTab === tab 
                            ? 'bg-blue-100 text-blue-700' 
                            : 'text-gray-600 hover:text-gray-900'
                        }`}
                      >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {activeTab === 'overview' && (
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Description</h4>
                      <p className="text-gray-600">
                        <span dangerouslySetInnerHTML={{ __html: sanitizeText(project.description) }} />
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Project Type</h4>
                        <p className="text-gray-600 capitalize">{project.type.replace('-', ' ')}</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Budget</h4>
                        <p className="text-gray-900 font-semibold">${project.budget.toLocaleString()}</p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Progress</h4>
                      <div className="flex items-center space-x-3">
                        <div className="flex-1 bg-gray-200 rounded-full h-3">
                          <div 
                            className="bg-blue-600 h-3 rounded-full transition-all duration-500" 
                            style={{ width: `${project.progress}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium text-gray-900">{project.progress}%</span>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === 'files' && (
                  <div className="space-y-4">
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                      <Upload className="w-10 h-10 text-gray-400 mx-auto mb-3" />
                      <p className="text-gray-600 mb-2">Drag and drop files here</p>
                      <Button variant="outline" size="sm">
                        Choose Files
                      </Button>
                    </div>
                    
                    <div className="space-y-3">
                      {project.files.map((file) => (
                        <div key={file.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                              <FileText className="w-5 h-5 text-blue-600" />
                            </div>
                            <div>
                              <p className="font-medium text-gray-900">{file.name}</p>
                              <p className="text-sm text-gray-500">{file.size} • {file.uploadedAt}</p>
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="ghost" size="sm">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Download className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {activeTab === 'timeline' && (
                  <div className="space-y-4">
                    {project.milestones.map((milestone, index) => (
                      <div key={milestone.id} className="flex space-x-4">
                        <div className="flex flex-col items-center">
                          <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${
                            milestone.completed 
                              ? 'bg-green-100 border-green-500' 
                              : 'bg-gray-100 border-gray-300'
                          }`}>
                            {milestone.completed ? (
                              <CheckCircle className="w-4 h-4 text-green-600" />
                            ) : (
                              <Clock className="w-4 h-4 text-gray-400" />
                            )}
                          </div>
                          {index < project.milestones.length - 1 && (
                            <div className="w-0.5 h-8 bg-gray-300 mt-2"></div>
                          )}
                        </div>
                        <div className="flex-1 pb-4">
                          <h4 className="font-medium text-gray-900">{milestone.title}</h4>
                          <p className="text-sm text-gray-600 mb-1">{milestone.description}</p>
                          <p className="text-xs text-gray-500">
                            Due: {new Date(milestone.dueDate).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                
                {activeTab === 'comments' && (
                  <div className="space-y-4">
                    <div className="border border-gray-200 rounded-lg p-4">
                      <textarea
                        placeholder="Add a comment..."
                        className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows={3}
                      />
                      <div className="flex justify-end mt-3">
                        <Button size="sm">
                          <MessageSquare className="mr-2 w-4 h-4" />
                          Add Comment
                        </Button>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex space-x-3">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                          AC
                        </div>
                        <div className="flex-1">
                          <div className="bg-gray-50 rounded-lg p-3">
                            <div className="flex items-center justify-between mb-1">
                              <span className="font-medium text-gray-900">Alex Chen</span>
                              <span className="text-xs text-gray-500">2 hours ago</span>
                            </div>
                            <p className="text-gray-700">The exterior lighting in the 3D render looks great! Can we also add some interior lighting scenarios?</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Project Info */}
            <Card>
              <CardHeader>
                <CardTitle>Project Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Deadline</p>
                    <p className="text-sm text-gray-600">{new Date(project.deadline).toLocaleDateString()}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <DollarSign className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Budget</p>
                    <p className="text-sm text-gray-600">${project.budget.toLocaleString()}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <User className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Assigned To</p>
                    <p className="text-sm text-gray-600">{project.assignedTo}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Upload className="mr-2 w-4 h-4" />
                  Upload Files
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <MessageSquare className="mr-2 w-4 h-4" />
                  Add Comment
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="mr-2 w-4 h-4" />
                  Schedule Review
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Share2 className="mr-2 w-4 h-4" />
                  Share with Client
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}