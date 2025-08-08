'use client'

import { useState } from 'react'
import { DashboardLayout } from "@/components/layout/DashboardLayout"
import { sanitizeText } from "@/lib/utils"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { mockClients, mockProjects } from "@/lib/mock-data"
import {
  Users,
  Search,
  Plus,
  Mail,
  Phone,
  Building,
  DollarSign,
  FolderOpen,
  MoreVertical,
  Edit,
  Eye,
  Star,
  TrendingUp
} from "lucide-react"

export default function ClientsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState<string>('all')

  const filteredClients = mockClients.filter(client => {
    const matchesSearch = client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         client.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         client.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'all' || client.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const getClientProjects = (clientName: string) => {
    return mockProjects.filter(project => project.client === clientName)
  }

  return (
    <DashboardLayout 
      title="Clients" 
      description="Manage your client relationships and track project history"
    >
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center mb-6">
        <div className="flex flex-col sm:flex-row gap-4 flex-1">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search clients..."
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
            <option value="all">All Clients</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
        
        <Button>
          <Plus className="mr-2 w-4 h-4" />
          Add Client
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Clients</p>
                <p className="text-2xl font-bold text-gray-900">{mockClients.length}</p>
                <p className="text-xs text-green-600 mt-1">+3 this month</p>
              </div>
              <div className="p-3 bg-blue-100 rounded-full">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Clients</p>
                <p className="text-2xl font-bold text-gray-900">{mockClients.filter(c => c.status === 'active').length}</p>
                <p className="text-xs text-green-600 mt-1">All engaged</p>
              </div>
              <div className="p-3 bg-green-100 rounded-full">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                <p className="text-2xl font-bold text-gray-900">
                  ${mockClients.reduce((sum, client) => sum + client.totalSpent, 0).toLocaleString()}
                </p>
                <p className="text-xs text-green-600 mt-1">+15% growth</p>
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
                <p className="text-sm font-medium text-gray-600">Avg Project Value</p>
                <p className="text-2xl font-bold text-gray-900">
                  ${Math.round(mockClients.reduce((sum, client) => sum + client.totalSpent, 0) / mockClients.length).toLocaleString()}
                </p>
                <p className="text-xs text-green-600 mt-1">High value</p>
              </div>
              <div className="p-3 bg-orange-100 rounded-full">
                <Star className="w-6 h-6 text-orange-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Clients Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredClients.map((client) => {
          const clientProjects = getClientProjects(client.name)
          const activeProjects = clientProjects.filter(p => p.status === 'in-progress').length
          
          return (
            <Card key={client.id} className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {client.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        <span dangerouslySetInnerHTML={{ __html: sanitizeText(client.name) }} />
                      </h3>
                      <p className="text-sm text-gray-600">{client.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full ${
                      client.status === 'active' ? 'bg-green-500' : 'bg-gray-400'
                    }`}></div>
                    <button className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-gray-600 transition-opacity">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  {/* Contact Info */}
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Mail className="w-4 h-4" />
                      <span className="truncate">{client.email}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Phone className="w-4 h-4" />
                      <span>{client.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Building className="w-4 h-4" />
                      <span className="truncate">{client.company}</span>
                    </div>
                  </div>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-gray-900">{client.projects}</p>
                      <p className="text-xs text-gray-500">Total Projects</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-gray-900">{activeProjects}</p>
                      <p className="text-xs text-gray-500">Active</p>
                    </div>
                  </div>
                  
                  {/* Revenue */}
                  <div className="text-center">
                    <p className="text-lg font-semibold text-green-600">
                      ${client.totalSpent.toLocaleString()}
                    </p>
                    <p className="text-xs text-gray-500">Total Revenue</p>
                  </div>
                  
                  {/* Recent Projects */}
                  <div>
                    <p className="text-sm font-medium text-gray-900 mb-2">Recent Projects</p>
                    <div className="space-y-1">
                      {clientProjects.slice(0, 2).map((project) => (
                        <div key={project.id} className="flex items-center justify-between text-sm">
                          <span className="text-gray-600 truncate flex-1 mr-2">{project.name}</span>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            project.status === 'completed' ? 'bg-green-100 text-green-700' :
                            project.status === 'in-progress' ? 'bg-blue-100 text-blue-700' :
                            'bg-yellow-100 text-yellow-700'
                          }`}>
                            {project.status.replace('-', ' ')}
                          </span>
                        </div>
                      ))}
                      {clientProjects.length === 0 && (
                        <p className="text-xs text-gray-400">No projects yet</p>
                      )}
                    </div>
                  </div>
                  
                  {/* Actions */}
                  <div className="flex space-x-2 pt-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Eye className="mr-1 w-3 h-3" />
                      View
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Edit className="mr-1 w-3 h-3" />
                      Edit
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <FolderOpen className="mr-1 w-3 h-3" />
                      Projects
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Empty State */}
      {filteredClients.length === 0 && (
        <Card className="text-center py-12">
          <CardContent>
            <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No clients found</h3>
            <p className="text-gray-600 mb-6">
              {searchTerm || statusFilter !== 'all' 
                ? "Try adjusting your search or filters"
                : "Get started by adding your first client"
              }
            </p>
            <Button>
              <Plus className="mr-2 w-4 h-4" />
              Add Your First Client
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Recent Activity */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Recent Client Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockClients.slice(0, 5).map((client) => (
              <div key={client.id} className="flex items-center space-x-4 p-3 border border-gray-200 rounded-lg">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                  {client.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    <span dangerouslySetInnerHTML={{ __html: sanitizeText(client.name) }} />
                  </p>
                  <p className="text-xs text-gray-500">
                    Last active: {new Date(client.joinedAt).toLocaleDateString()}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">{client.projects} projects</p>
                  <p className="text-xs text-gray-500">${client.totalSpent.toLocaleString()} total</p>
                </div>
                <Button variant="ghost" size="sm">
                  <Eye className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </DashboardLayout>
  )
}