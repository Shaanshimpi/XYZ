export interface Project {
  id: string
  name: string
  client: string
  status: 'planning' | 'in-progress' | 'review' | 'completed' | 'on-hold'
  progress: number
  type: '2d-plans' | '3d-renders' | 'virtual-tour' | 'animation'
  deadline: string
  budget: number
  images: string[]
  description: string
  assignedTo: string
  createdAt: string
  updatedAt: string
  files: FileItem[]
  milestones: Milestone[]
}

export interface FileItem {
  id: string
  name: string
  type: 'cad' | 'image' | 'document' | 'model'
  size: string
  uploadedAt: string
  url: string
}

export interface Milestone {
  id: string
  title: string
  completed: boolean
  dueDate: string
  description: string
}

export interface Client {
  id: string
  name: string
  email: string
  company: string
  phone: string
  avatar: string
  projects: number
  totalSpent: number
  status: 'active' | 'inactive'
  joinedAt: string
}

export interface Activity {
  id: string
  type: 'project_created' | 'file_uploaded' | 'milestone_completed' | 'comment_added'
  message: string
  timestamp: string
  user: string
  projectId?: string
}

export const mockProjects: Project[] = [
  {
    id: '1',
    name: 'Modern Villa Residence',
    client: 'Sarah Johnson',
    status: 'in-progress',
    progress: 75,
    type: '3d-renders',
    deadline: '2024-02-15',
    budget: 15000,
    images: ['/api/placeholder/400/300', '/api/placeholder/400/300'],
    description: 'Luxury modern villa with minimalist design featuring glass facades and open floor plans.',
    assignedTo: 'Alex Chen',
    createdAt: '2024-01-10',
    updatedAt: '2024-02-01',
    files: [
      { id: '1', name: 'floor_plan_v3.dwg', type: 'cad', size: '2.4 MB', uploadedAt: '2024-01-15', url: '#' },
      { id: '2', name: 'exterior_view.jpg', type: 'image', size: '1.8 MB', uploadedAt: '2024-01-20', url: '#' },
      { id: '3', name: 'materials_spec.pdf', type: 'document', size: '892 KB', uploadedAt: '2024-01-25', url: '#' }
    ],
    milestones: [
      { id: '1', title: 'Initial Concept', completed: true, dueDate: '2024-01-15', description: 'Create initial design concepts' },
      { id: '2', title: '3D Modeling', completed: true, dueDate: '2024-01-30', description: 'Complete 3D model structure' },
      { id: '3', title: 'Rendering', completed: false, dueDate: '2024-02-10', description: 'Final high-quality renders' },
      { id: '4', title: 'Client Review', completed: false, dueDate: '2024-02-15', description: 'Present final deliverables' }
    ]
  },
  {
    id: '2',
    name: 'Corporate Office Complex',
    client: 'TechCorp Inc.',
    status: 'review',
    progress: 90,
    type: 'virtual-tour',
    deadline: '2024-02-20',
    budget: 35000,
    images: ['/api/placeholder/400/300', '/api/placeholder/400/300'],
    description: '50-story corporate headquarters with innovative workspace design and sustainable features.',
    assignedTo: 'Maria Rodriguez',
    createdAt: '2024-01-05',
    updatedAt: '2024-02-02',
    files: [
      { id: '4', name: 'office_layout.dwg', type: 'cad', size: '5.2 MB', uploadedAt: '2024-01-10', url: '#' },
      { id: '5', name: 'lobby_render.jpg', type: 'image', size: '3.1 MB', uploadedAt: '2024-01-28', url: '#' },
      { id: '6', name: 'virtual_tour.fbx', type: 'model', size: '125 MB', uploadedAt: '2024-02-01', url: '#' }
    ],
    milestones: [
      { id: '5', title: 'Space Planning', completed: true, dueDate: '2024-01-10', description: 'Define office space layout' },
      { id: '6', title: 'Virtual Environment', completed: true, dueDate: '2024-01-25', description: 'Build interactive 3D environment' },
      { id: '7', title: 'User Testing', completed: true, dueDate: '2024-02-05', description: 'Test virtual tour functionality' },
      { id: '8', title: 'Final Delivery', completed: false, dueDate: '2024-02-20', description: 'Deploy virtual tour platform' }
    ]
  },
  {
    id: '3',
    name: 'Luxury Apartment Complex',
    client: 'David Williams',
    status: 'completed',
    progress: 100,
    type: '2d-plans',
    deadline: '2024-01-30',
    budget: 8000,
    images: ['/api/placeholder/400/300', '/api/placeholder/400/300'],
    description: 'High-end residential complex with 200 units featuring premium amenities and modern architecture.',
    assignedTo: 'John Smith',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-30',
    files: [
      { id: '7', name: 'unit_plans.dwg', type: 'cad', size: '3.8 MB', uploadedAt: '2024-01-15', url: '#' },
      { id: '8', name: 'elevation_views.pdf', type: 'document', size: '2.2 MB', uploadedAt: '2024-01-25', url: '#' }
    ],
    milestones: [
      { id: '9', title: 'Floor Plans', completed: true, dueDate: '2024-01-15', description: 'Complete all unit floor plans' },
      { id: '10', title: 'Elevations', completed: true, dueDate: '2024-01-25', description: 'Create building elevations' },
      { id: '11', title: 'Documentation', completed: true, dueDate: '2024-01-30', description: 'Finalize technical documentation' }
    ]
  },
  {
    id: '4',
    name: 'Retail Shopping Center',
    client: 'Metro Properties',
    status: 'planning',
    progress: 25,
    type: 'animation',
    deadline: '2024-03-15',
    budget: 22000,
    images: ['/api/placeholder/400/300'],
    description: 'Large-scale shopping center with entertainment complex and innovative retail spaces.',
    assignedTo: 'Emily Zhang',
    createdAt: '2024-02-01',
    updatedAt: '2024-02-03',
    files: [
      { id: '9', name: 'concept_sketch.jpg', type: 'image', size: '1.2 MB', uploadedAt: '2024-02-02', url: '#' }
    ],
    milestones: [
      { id: '12', title: 'Concept Development', completed: false, dueDate: '2024-02-15', description: 'Develop initial concepts' },
      { id: '13', title: 'Storyboard', completed: false, dueDate: '2024-02-28', description: 'Create animation storyboard' },
      { id: '14', title: 'Animation Production', completed: false, dueDate: '2024-03-10', description: 'Produce final animation' }
    ]
  }
]

export const mockClients: Client[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    email: 'sarah@designstudios.com',
    company: 'Design Studios Inc.',
    phone: '+1 (555) 123-4567',
    avatar: '/api/placeholder/150/150',
    projects: 3,
    totalSpent: 45000,
    status: 'active',
    joinedAt: '2023-06-15'
  },
  {
    id: '2',
    name: 'Michael Chen',
    email: 'mchen@techcorp.com',
    company: 'TechCorp Inc.',
    phone: '+1 (555) 987-6543',
    avatar: '/api/placeholder/150/150',
    projects: 1,
    totalSpent: 35000,
    status: 'active',
    joinedAt: '2023-12-01'
  },
  {
    id: '3',
    name: 'David Williams',
    email: 'dwilliams@realestate.com',
    company: 'Williams Real Estate',
    phone: '+1 (555) 456-7890',
    avatar: '/api/placeholder/150/150',
    projects: 2,
    totalSpent: 28000,
    status: 'active',
    joinedAt: '2023-09-20'
  },
  {
    id: '4',
    name: 'Metro Properties',
    email: 'contact@metroprop.com',
    company: 'Metro Properties LLC',
    phone: '+1 (555) 321-9876',
    avatar: '/api/placeholder/150/150',
    projects: 1,
    totalSpent: 22000,
    status: 'active',
    joinedAt: '2024-01-10'
  }
]

export const mockActivities: Activity[] = [
  {
    id: '1',
    type: 'file_uploaded',
    message: 'New CAD file uploaded to Modern Villa Residence',
    timestamp: '2024-02-03T10:30:00Z',
    user: 'Alex Chen',
    projectId: '1'
  },
  {
    id: '2',
    type: 'milestone_completed',
    message: 'Completed 3D Modeling milestone for Modern Villa Residence',
    timestamp: '2024-02-02T14:45:00Z',
    user: 'Alex Chen',
    projectId: '1'
  },
  {
    id: '3',
    type: 'project_created',
    message: 'New project "Retail Shopping Center" created',
    timestamp: '2024-02-01T09:15:00Z',
    user: 'Emily Zhang',
    projectId: '4'
  },
  {
    id: '4',
    type: 'comment_added',
    message: 'Client feedback received on Corporate Office Complex',
    timestamp: '2024-01-31T16:20:00Z',
    user: 'Maria Rodriguez',
    projectId: '2'
  },
  {
    id: '5',
    type: 'milestone_completed',
    message: 'User Testing completed for Corporate Office Complex',
    timestamp: '2024-01-30T11:00:00Z',
    user: 'Maria Rodriguez',
    projectId: '2'
  }
]

export const mockAnalytics = {
  totalProjects: 24,
  activeProjects: 8,
  completedProjects: 16,
  totalRevenue: 156000,
  monthlyRevenue: [
    { month: 'Jan', revenue: 32000 },
    { month: 'Feb', revenue: 28000 },
    { month: 'Mar', revenue: 35000 },
    { month: 'Apr', revenue: 42000 },
    { month: 'May', revenue: 38000 },
    { month: 'Jun', revenue: 45000 }
  ],
  projectTypes: [
    { type: '3D Renders', count: 12, percentage: 50 },
    { type: '2D Plans', count: 6, percentage: 25 },
    { type: 'Virtual Tours', count: 4, percentage: 17 },
    { type: 'Animations', count: 2, percentage: 8 }
  ],
  clientSatisfaction: 98,
  avgProjectDuration: 18
}