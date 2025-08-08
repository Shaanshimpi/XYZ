'use client'

import { useState } from 'react'
import { DashboardLayout } from "@/components/layout/DashboardLayout"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { mockProjects } from "@/lib/mock-data"
import {
  Building2,
  Search,
  Plus,
  Eye,
  Edit,
  Trash2,
  Calendar,
  DollarSign,
  User,
  MoreVertical,
  Grid3X3,
  List,
  Play
} from "lucide-react"

export default function ProjectsPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState<string>('all')

  const filteredProjects = mockProjects.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.client.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'all' || project.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-700 border-green-200'
      case 'in-progress': return 'bg-blue-100 text-blue-700 border-blue-200'
      case 'review': return 'bg-yellow-100 text-yellow-700 border-yellow-200'
      case 'on-hold': return 'bg-red-100 text-red-700 border-red-200'
      default: return 'bg-gray-100 text-gray-700 border-gray-200'
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case '2d-plans': return 'bg-blue-500'
      case '3d-renders': return 'bg-purple-500'
      case 'virtual-tour': return 'bg-green-500'
      case 'animation': return 'bg-orange-500'
      default: return 'bg-gray-500'
    }
  }

  return (
    <DashboardLayout 
      title="Projects" 
      description="Manage and track all your architectural visualization projects"
    >
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center mb-6">
        <div className="flex flex-col sm:flex-row gap-4 flex-1">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search projects or clients..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          {/* Status Filter */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Status</option>
            <option value="planning">Planning</option>
            <option value="in-progress">In Progress</option>
            <option value="review">Review</option>
            <option value="completed">Completed</option>
            <option value="on-hold">On Hold</option>
          </select>
        </div>
        
        <div className="flex gap-2">
          {/* View Mode Toggle */}
          <div className="flex border border-gray-300 rounded-lg">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 ${viewMode === 'grid' ? 'bg-blue-50 text-blue-600' : 'text-gray-600'}`}
            >
              <Grid3X3 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 ${viewMode === 'list' ? 'bg-blue-50 text-blue-600' : 'text-gray-600'}`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
          
          <Button>
            <Plus className="mr-2 w-4 h-4" />
            New Project
          </Button>
        </div>
      </div>

      {/* Projects Grid/List */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                {/* Project Image/Preview */}
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-t-lg flex items-center justify-center relative overflow-hidden">
                  <Building2 className="w-12 h-12 text-gray-400" />
                  
                  {/* Overlay actions */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-2">
                    <Button size="sm" variant="outline" className="bg-white/90 hover:bg-white">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="bg-white/90 hover:bg-white">
                      <Play className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  {/* Type Badge */}
                  <div className={`absolute top-3 left-3 w-3 h-3 rounded-full ${getTypeColor(project.type)}`}></div>
                </div>
                
                {/* Project Info */}
                <div className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-gray-900 truncate flex-1 mr-2">
                      {project.name}
                    </h3>
                    <button className="text-gray-400 hover:text-gray-600">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-3">{project.client}</p>
                  
                  {/* Status */}
                  <div className={`inline-block px-2 py-1 rounded-full text-xs font-medium border mb-3 ${getStatusColor(project.status)}`}>
                    {project.status.replace('-', ' ')}
                  </div>
                  
                  {/* Progress */}
                  <div className="mb-3">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Progress</span>
                      <span className="font-medium">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  {/* Meta Info */}
                  <div className="space-y-1 text-xs text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      Due: {new Date(project.deadline).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="w-3 h-3 mr-1" />
                      ${project.budget.toLocaleString()}
                    </div>
                    <div className="flex items-center">
                      <User className="w-3 h-3 mr-1" />
                      {project.assignedTo}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Project</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Client</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Type</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Status</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Progress</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Deadline</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Budget</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProjects.map((project) => (
                    <tr key={project.id} className="border-b hover:bg-gray-50">
                      <td className="py-4 px-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                            <Building2 className="w-5 h-5 text-blue-600" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{project.name}</p>
                            <p className="text-sm text-gray-500">{project.assignedTo}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-gray-900">{project.client}</td>
                      <td className="py-4 px-4">
                        <div className="flex items-center space-x-2">
                          <div className={`w-2 h-2 rounded-full ${getTypeColor(project.type)}`}></div>
                          <span className="text-sm text-gray-600">{project.type.replace('-', ' ')}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                          {project.status.replace('-', ' ')}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center space-x-2">
                          <div className="w-16 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-blue-600 h-2 rounded-full" 
                              style={{ width: `${project.progress}%` }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium text-gray-900">{project.progress}%</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-600">
                        {new Date(project.deadline).toLocaleDateString()}
                      </td>
                      <td className="py-4 px-4 text-sm font-medium text-gray-900">
                        ${project.budget.toLocaleString()}
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center space-x-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <Card className="text-center py-12">
          <CardContent>
            <Building2 className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No projects found</h3>
            <p className="text-gray-600 mb-6">
              {searchTerm || statusFilter !== 'all' 
                ? "Try adjusting your search or filters"
                : "Get started by creating your first project"
              }
            </p>
            <Button>
              <Plus className="mr-2 w-4 h-4" />
              Create New Project
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-blue-600">{mockProjects.filter(p => p.status === 'in-progress').length}</p>
            <p className="text-sm text-gray-600">Active</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-green-600">{mockProjects.filter(p => p.status === 'completed').length}</p>
            <p className="text-sm text-gray-600">Completed</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-yellow-600">{mockProjects.filter(p => p.status === 'review').length}</p>
            <p className="text-sm text-gray-600">In Review</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-gray-600">{mockProjects.filter(p => p.status === 'planning').length}</p>
            <p className="text-sm text-gray-600">Planning</p>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}