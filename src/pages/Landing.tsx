import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { VehicleCard } from "@/components/VehicleCard";
import { Search, Car, Shield, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const featuredVehicles = [
  {
    id: "1",
    name: "Tesla Model 3",
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=400&h=300&fit=crop",
    price: 89,
    rating: 4.9,
    location: "San Francisco, CA",
    seats: 5,
    category: "Electric",
    transmission: "Automatic" as const,
    fuel: "Electric"
  },
  {
    id: "2",
    name: "BMW X5",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop",
    price: 120,
    rating: 4.8,
    location: "Los Angeles, CA",
    seats: 7,
    category: "SUV",
    transmission: "Automatic" as const,
    fuel: "Gasoline"
  },
  {
    id: "3",
    name: "Honda Civic",
    image: "https://images.unsplash.com/photo-1619976215607-a4b7c0bb05f4?w=400&h=300&fit=crop",
    price: 45,
    rating: 4.6,
    location: "New York, NY",
    seats: 5,
    category: "Compact",
    transmission: "Manual" as const,
    fuel: "Gasoline"
  },
  {
    id: "4",
    name: "Mercedes C-Class",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=400&h=300&fit=crop",
    price: 95,
    rating: 4.7,
    location: "Miami, FL",
    seats: 5,
    category: "Luxury",
    transmission: "Automatic" as const,
    fuel: "Gasoline"
  }
];

const howItWorksSteps = [
  {
    icon: Search,
    title: "Browse & Search",
    description: "Search through thousands of vehicles including cars, bikes, and scooters. Filter by location, price, vehicle type, and availability dates to find your perfect match."
  },
  {
    icon: Car,
    title: "Book Instantly",
    description: "Choose your vehicle, select pickup/drop-off times, and complete secure booking with instant confirmation. Upload your license and verify your identity for seamless rentals."
  },
  {
    icon: Shield,
    title: "Drive Safely",
    description: "Pick up your vehicle with contactless unlock, enjoy comprehensive insurance coverage, and return at your convenience. 24/7 roadside assistance included."
  },
  {
    icon: Clock,
    title: "Flexible Returns",
    description: "Extend your rental on-demand, return early for partial refunds, or schedule recurring bookings. Rate your experience to help other users."
  }
];

const customerJourneySteps = [
  {
    icon: Search,
    title: "Sign Up & Verify",
    description: "Create account with email/phone. Upload driving license (auto-verified via AI). Complete identity verification with selfie + ID document match. Background check completed within 24 hours."
  },
  {
    icon: Car,
    title: "Search & Book",
    description: "Browse verified vehicles with real-time availability. View owner ratings, vehicle history, and insurance details. Book instantly with $50 security deposit. Get pickup location and digital key access."
  },
  {
    icon: Shield,
    title: "Pickup & Drive",
    description: "Use app to unlock vehicle with digital key. Complete 360° damage inspection (photos auto-uploaded). Start trip with GPS tracking. Enjoy comprehensive insurance coverage up to $1M liability."
  },
  {
    icon: Clock,
    title: "Return & Rate",
    description: "Return to designated spot. Complete final inspection with photo evidence. Rate owner and vehicle. Automatic billing with damage protection. Get trip summary and receipt via email."
  }
];

const ownerJourneySteps = [
  {
    icon: Car,
    title: "Vehicle Registration",
    description: "Upload vehicle registration, insurance documents, and current inspection certificate. Complete vehicle verification with VIN check. Professional photos taken or self-uploaded with quality review."
  },
  {
    icon: Shield,
    title: "Safety & Compliance",
    description: "Install GPS tracking device (free installation). Set up smart lock system for keyless access. Complete safety inspection checklist. Activate comprehensive insurance coverage for rentals."
  },
  {
    icon: Search,
    title: "Listing & Pricing",
    description: "Set availability calendar and pricing (dynamic pricing suggestions provided). Define pickup/return locations. Set vehicle rules and requirements. Go live after final approval (typically 2-3 days)."
  },
  {
    icon: Clock,
    title: "Earn & Manage",
    description: "Receive booking notifications and manage requests. Track vehicle location and status in real-time. Get automatic payments (85% to owner, 15% platform fee). Access monthly earnings reports and tax documents."
  }
];

const damageProtectionInfo = [
  {
    title: "Pre-Trip Inspection",
    description: "Mandatory 360° photo documentation before each trip. AI-powered damage detection compares with baseline photos. Any existing damage flagged and recorded.",
    coverage: "Prevents false damage claims"
  },
  {
    title: "During Trip Protection",
    description: "Real-time GPS monitoring and speed alerts. 24/7 roadside assistance included. Emergency contact system for breakdowns or accidents.",
    coverage: "Up to $1M liability coverage"
  },
  {
    title: "Damage Claims Process",
    description: "Post-trip inspection with photo evidence. Claims reviewed within 24 hours. Professional repair estimates from approved shops. Direct billing to insurance (no owner hassle).",
    coverage: "Up to $125,000 damage protection"
  },
  {
    title: "Dispute Resolution",
    description: "AI-assisted damage assessment using before/after photos. Independent third-party arbitration available. Fair resolution process with evidence-based decisions.",
    coverage: "Free arbitration service"
  }
];

export const Landing = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-primary/5 py-20 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-grid-pattern opacity-5"
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Find Your Perfect Ride
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Rent vehicles from trusted owners in your area. From economy cars to luxury SUVs, 
              find the perfect vehicle for every journey.
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="p-6 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Location</label>
                  <Input placeholder="Where to?" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Pick-up Date</label>
                  <Input type="date" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Return Date</label>
                  <Input type="date" />
                </div>
                <div className="flex items-end">
                  <Button size="lg" className="w-full" asChild>
                    <Link to="/browse">
                      <Search className="mr-2 h-4 w-4" />
                      Search
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Featured Vehicles */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Vehicles</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our most popular vehicles, carefully selected for their quality and reliability.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredVehicles.map((vehicle, index) => (
              <motion.div
                key={vehicle.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <VehicleCard vehicle={vehicle} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - For Customers */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works - For Customers</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From registration to return, we've streamlined every step for a seamless rental experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {customerJourneySteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - For Owners */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works - For Vehicle Owners</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              List your vehicle and start earning passive income with our comprehensive protection and support system.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ownerJourneySteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Damage Protection */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Damage Protection</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Advanced AI-powered damage detection and comprehensive insurance coverage protect both owners and renters.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {damageProtectionInfo.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card p-6 rounded-lg border"
              >
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground mb-4">{item.description}</p>
                <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium inline-block">
                  {item.coverage}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Owner CTA */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Earn Money with Your Vehicle
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Turn your idle vehicle into a source of income. Join thousands of owners 
              who are already earning extra money by sharing their cars.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/owner/dashboard">
                  <Car className="mr-2 h-4 w-4" />
                  List Your Vehicle
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/how-it-works">Learn More</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};