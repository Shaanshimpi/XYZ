'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  ArrowRight,
  Play,
  Star,
  Check,
  Building2,
  Palette,
  Zap,
  Clock,
  DollarSign,
  Users,
  Award,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  Sparkles,
  TrendingUp,
  Shield,
  Headphones
} from "lucide-react"
import Link from 'next/link'

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Principal Architect",
      company: "Johnson Architecture",
      content: "ArchViz Pro transformed how we present to clients. Our project approval rate increased by 300% since we started using their 3D visualizations. The quality is absolutely stunning.",
      rating: 5,
      image: "/api/placeholder/80/80",
      project: "Modern Villa Complex"
    },
    {
      name: "Michael Chen",
      role: "Real Estate Developer", 
      company: "Urban Developments",
      content: "We closed a $50M deal in just 2 weeks thanks to their immersive virtual tours. Investors could truly experience the space before construction even began. Game-changing!",
      rating: 5,
      image: "/api/placeholder/80/80",
      project: "Commercial Tower"
    },
    {
      name: "Emma Rodriguez",
      role: "Interior Designer",
      company: "Rodriguez Interiors",
      content: "The 24-hour turnaround time is incredible. I can present multiple design options to clients the same day they make requests. It's revolutionized my workflow.",
      rating: 5,
      image: "/api/placeholder/80/80",
      project: "Luxury Penthouse"
    }
  ]

  const portfolioProjects = [
    {
      title: "Modern Villa Estate",
      category: "Residential",
      beforeImage: "/api/placeholder/600/400",
      afterImage: "/api/placeholder/600/400",
      description: "Transformed sketches into photorealistic 3D renderings"
    },
    {
      title: "Corporate Headquarters",
      category: "Commercial",
      beforeImage: "/api/placeholder/600/400", 
      afterImage: "/api/placeholder/600/400",
      description: "Interactive virtual tour with 360° views"
    },
    {
      title: "Luxury Penthouse",
      category: "Interior",
      beforeImage: "/api/placeholder/600/400",
      afterImage: "/api/placeholder/600/400", 
      description: "Complete interior visualization with lighting studies"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-lg border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                ArchViz Pro
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Services</a>
              <a href="#portfolio" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Portfolio</a>
              <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Pricing</a>
              <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Reviews</a>
              <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Dashboard</Link>
              <Button size="sm" className="bg-gradient-to-r from-blue-500 to-purple-600">Get Started</Button>
            </div>
            
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-6 py-4 space-y-4">
              <a href="#services" className="block text-gray-600 hover:text-blue-600">Services</a>
              <a href="#portfolio" className="block text-gray-600 hover:text-blue-600">Portfolio</a>
              <a href="#pricing" className="block text-gray-600 hover:text-blue-600">Pricing</a>
              <a href="#testimonials" className="block text-gray-600 hover:text-blue-600">Reviews</a>
              <Link href="/" className="block text-gray-600 hover:text-blue-600">Dashboard</Link>
              <Button size="sm" className="w-full bg-gradient-to-r from-blue-500 to-purple-600">Get Started</Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-40 left-40 w-60 h-60 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{animationDelay: '4s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Sparkles className="w-4 h-4" />
                <span>Transform Ideas Into Reality in 24 Hours</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Stunning
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  3D Architecture
                </span>
                Visualizations
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Get photorealistic 3D renderings, virtual tours, and floor plans that wow your clients and close deals faster. Professional quality, lightning-fast delivery.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 text-lg px-8 py-4 h-auto group">
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto group border-2 border-gray-300">
                  <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                  Watch Demo
                </Button>
              </div>

              {/* Social Proof */}
              <div className="flex items-center justify-center lg:justify-start space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">24hrs</div>
                  <div className="text-sm text-gray-600">Avg Delivery</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">98%</div>
                  <div className="text-sm text-gray-600">Satisfaction</div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="flex items-center justify-center lg:justify-start space-x-4 pt-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-gray-600">Rated 4.9/5 by 500+ architects</span>
              </div>
            </div>
            
            {/* Hero Visual */}
            <div className="relative">
              <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center relative overflow-hidden">
                  <Building2 className="w-20 h-20 text-gray-400" />
                  
                  {/* Overlay elements */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm font-semibold text-gray-900">Modern Villa Project</div>
                          <div className="text-xs text-gray-600">3D Rendering Complete</div>
                        </div>
                        <div className="text-green-600">
                          <Check className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -left-6 bg-green-500 text-white p-3 rounded-xl shadow-lg animate-float">
                <Clock className="w-6 h-6" />
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-purple-500 text-white p-3 rounded-xl shadow-lg animate-float" style={{animationDelay: '1s'}}>
                <Award className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Everything You Need to 
              <span className="text-blue-600"> Wow Your Clients</span>
            </h2>
            <p className="text-xl text-gray-600">
              From concept sketches to photorealistic renderings - we transform your architectural visions into stunning visuals that sell projects.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Building2,
                title: "2D Floor Plans",
                description: "Professional CAD drawings with precise measurements and technical specifications. Perfect for permits and construction.",
                features: ["AutoCAD Compatible", "Multiple Formats", "Unlimited Revisions"],
                price: "Starting at $299",
                color: "from-blue-500 to-cyan-500",
                popular: false
              },
              {
                icon: Palette,
                title: "3D Photorealistic Renderings",
                description: "Stunning visuals that look like professional photographs. Perfect for marketing and client presentations.",
                features: ["4K Resolution", "Multiple Angles", "Lighting Studies", "Material Library"],
                price: "Starting at $599",
                color: "from-purple-500 to-pink-500",
                popular: true
              },
              {
                icon: Zap,
                title: "Virtual Reality Tours",
                description: "Immersive walkthrough experiences that let clients explore spaces before they're built. Ultimate selling tool.",
                features: ["VR Compatible", "Interactive Elements", "Web-Based", "Mobile Friendly"],
                price: "Starting at $1299",
                color: "from-orange-500 to-red-500",
                popular: false
              }
            ].map((service, index) => (
              <Card 
                key={index}
                className={`group relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${service.popular ? 'ring-2 ring-purple-500 ring-opacity-50' : ''}`}
              >
                {service.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center py-2 text-sm font-semibold">
                    ⭐ MOST POPULAR
                  </div>
                )}
                
                <div className={`p-8 ${service.popular ? 'pt-16' : ''}`}>
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="space-y-4">
                    <div className="text-2xl font-bold text-gray-900">{service.price}</div>
                    <Button className={`w-full bg-gradient-to-r ${service.color} group-hover:shadow-lg transition-all duration-300`}>
                      Get Started
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              See the <span className="text-purple-600">Transformation</span>
            </h2>
            <p className="text-xl text-gray-600">
              From rough sketches to breathtaking visuals - witness how we bring architectural dreams to life
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12">
            {portfolioProjects.map((project, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-2xl bg-gray-100 mb-6">
                  <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <Building2 className="w-16 h-16 text-gray-400" />
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button variant="outline" className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30">
                      <Play className="mr-2 w-4 h-4" />
                      View Project
                    </Button>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {project.category}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-2 border-gray-300 px-8">
              View Full Portfolio
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-gradient-to-r from-blue-500 to-purple-600 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 border border-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 border border-white rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl opacity-90">
              Join hundreds of architects and developers who trust us with their vision
            </p>
          </div>
          
          <div className="relative">
            <Card className="bg-white/10 backdrop-blur-lg border-white/20 p-8 lg:p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-xl lg:text-2xl font-medium mb-8 leading-relaxed">
                "{testimonials[currentTestimonial].content}"
              </blockquote>
              
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-lg">{testimonials[currentTestimonial].name}</div>
                  <div className="opacity-80">{testimonials[currentTestimonial].role}</div>
                  <div className="opacity-70 text-sm">{testimonials[currentTestimonial].company}</div>
                </div>
              </div>
            </Card>
            
            {/* Navigation */}
            <button 
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              onClick={() => setCurrentTestimonial(currentTestimonial === 0 ? testimonials.length - 1 : currentTestimonial - 1)}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button 
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              onClick={() => setCurrentTestimonial(currentTestimonial === testimonials.length - 1 ? 0 : currentTestimonial + 1)}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            
            {/* Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-white' : 'bg-white/40'
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Ready to Transform Your
            <span className="block text-blue-400">Architecture Business?</span>
          </h2>
          
          <p className="text-xl mb-8 opacity-90">
            Join 500+ architects and developers who've increased their project approval rates by 300%
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 text-lg px-10 py-4 h-auto group">
              Start Your First Project
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 text-lg px-10 py-4 h-auto">
              <Headphones className="mr-2 w-5 h-5" />
              Talk to Expert
            </Button>
          </div>
          
          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              { icon: Clock, title: "24-Hour Delivery", desc: "Lightning fast turnaround" },
              { icon: Shield, title: "100% Satisfaction", desc: "Money-back guarantee" },
              { icon: Headphones, title: "24/7 Support", desc: "Expert help when you need it" }
            ].map((feature, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-blue-400" />
                </div>
                <div className="text-left">
                  <div className="font-semibold">{feature.title}</div>
                  <div className="text-sm opacity-70">{feature.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">ArchViz Pro</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                Transform your architectural visions into stunning visual experiences. Professional 3D renderings, virtual tours, and floor plans delivered in 24 hours.
              </p>
              <div className="flex space-x-4">
                {['Facebook', 'Twitter', 'LinkedIn', 'Instagram'].map((social) => (
                  <div key={social} className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                    <span className="text-sm font-semibold">{social[0]}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-6">Services</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">2D Floor Plans</a></li>
                <li><a href="#" className="hover:text-white transition-colors">3D Renderings</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Virtual Tours</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Animations</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-6">Company</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Portfolio</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 ArchViz Pro. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}