import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { VehicleCard } from "@/components/VehicleCard";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Search, Filter, Grid2X2, List, MapPin } from "lucide-react";

const vehicles = [
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
    name: "Harley Davidson Street 750",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    price: 35,
    rating: 4.8,
    location: "Los Angeles, CA",
    seats: 2,
    category: "Motorcycle",
    transmission: "Manual" as const,
    fuel: "Gasoline"
  },
  {
    id: "3",
    name: "Honda Activa 125",
    image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop",
    price: 12,
    rating: 4.5,
    location: "New York, NY",
    seats: 2,
    category: "Scooter",
    transmission: "Automatic" as const,
    fuel: "Gasoline"
  },
  {
    id: "4",
    name: "BMW X5",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop",
    price: 120,
    rating: 4.8,
    location: "Chicago, IL",
    seats: 7,
    category: "SUV",
    transmission: "Automatic" as const,
    fuel: "Gasoline"
  },
  {
    id: "5",
    name: "Royal Enfield Classic 350",
    image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=400&h=300&fit=crop",
    price: 25,
    rating: 4.7,
    location: "Austin, TX",
    seats: 2,
    category: "Motorcycle",
    transmission: "Manual" as const,
    fuel: "Gasoline"
  },
  {
    id: "6",
    name: "Vespa Primavera 150",
    image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=400&h=300&fit=crop",
    price: 18,
    rating: 4.6,
    location: "Miami, FL",
    seats: 2,
    category: "Scooter",
    transmission: "Automatic" as const,
    fuel: "Gasoline"
  },
  {
    id: "7",
    name: "Mercedes C-Class",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=400&h=300&fit=crop",
    price: 95,
    rating: 4.7,
    location: "Miami, FL",
    seats: 5,
    category: "Luxury",
    transmission: "Automatic" as const,
    fuel: "Gasoline"
  },
  {
    id: "8",
    name: "Toyota Prius",
    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=400&h=300&fit=crop",
    price: 55,
    rating: 4.5,
    location: "Seattle, WA",
    seats: 5,
    category: "Hybrid",
    transmission: "Automatic" as const,
    fuel: "Hybrid"
  },
  {
    id: "9",
    name: "Honda CBR 250R",
    image: "https://images.unsplash.com/photo-1558618047-1c8c2b4a3e4b?w=400&h=300&fit=crop",
    price: 28,
    rating: 4.6,
    location: "Denver, CO",
    seats: 2,
    category: "Motorcycle",
    transmission: "Manual" as const,
    fuel: "Gasoline"
  },
  {
    id: "10",
    name: "Ford Mustang",
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=300&fit=crop",
    price: 85,
    rating: 4.8,
    location: "Austin, TX",
    seats: 4,
    category: "Sports",
    transmission: "Manual" as const,
    fuel: "Gasoline"
  },
  {
    id: "11",
    name: "TVS Jupiter",
    image: "https://images.unsplash.com/photo-1564736781796-6161f64d4b8b?w=400&h=300&fit=crop",
    price: 10,
    rating: 4.4,
    location: "Phoenix, AZ",
    seats: 2,
    category: "Scooter",
    transmission: "Automatic" as const,
    fuel: "Gasoline"
  },
  {
    id: "12",
    name: "Yamaha MT-15",
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=300&fit=crop",
    price: 22,
    rating: 4.5,
    location: "Las Vegas, NV",
    seats: 2,
    category: "Motorcycle",
    transmission: "Manual" as const,
    fuel: "Gasoline"
  }
];

export const Browse = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Search Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Card className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="md:col-span-2">
                <label className="text-sm font-medium mb-2 block">Location</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Where to?" className="pl-10" />
                </div>
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
                <Button size="lg" className="w-full">
                  <Search className="mr-2 h-4 w-4" />
                  Search
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>

        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`${showFilters ? 'block' : 'hidden'} lg:block w-full lg:w-80 shrink-0`}
          >
            <Card className="p-6 sticky top-24">
              <h3 className="font-semibold text-lg mb-4">Filters</h3>
              
              {/* Price Range */}
              <div className="mb-6">
                <label className="text-sm font-medium mb-3 block">Price Range</label>
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  max={200}
                  step={5}
                  className="mb-2"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>

              {/* Vehicle Type */}
              <div className="mb-6">
                <label className="text-sm font-medium mb-3 block">Vehicle Type</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="All Types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="compact">Compact</SelectItem>
                    <SelectItem value="suv">SUV</SelectItem>
                    <SelectItem value="luxury">Luxury</SelectItem>
                    <SelectItem value="sports">Sports</SelectItem>
                    <SelectItem value="electric">Electric</SelectItem>
                    <SelectItem value="hybrid">Hybrid</SelectItem>
                    <SelectItem value="motorcycle">Motorcycle</SelectItem>
                    <SelectItem value="scooter">Scooter</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Transmission */}
              <div className="mb-6">
                <label className="text-sm font-medium mb-3 block">Transmission</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="All" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="automatic">Automatic</SelectItem>
                    <SelectItem value="manual">Manual</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Fuel Type */}
              <div className="mb-6">
                <label className="text-sm font-medium mb-3 block">Fuel Type</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="All Fuels" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Fuels</SelectItem>
                    <SelectItem value="gasoline">Gasoline</SelectItem>
                    <SelectItem value="electric">Electric</SelectItem>
                    <SelectItem value="hybrid">Hybrid</SelectItem>
                    <SelectItem value="diesel">Diesel</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button variant="outline" className="w-full">
                Clear Filters
              </Button>
            </Card>
          </motion.div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Results Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center justify-between mb-6"
            >
              <div className="flex items-center gap-4">
                <h2 className="text-2xl font-bold">Available Vehicles</h2>
                <Badge variant="secondary">{vehicles.length} results</Badge>
              </div>
              
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <Filter className="h-4 w-4" />
                </Button>
                
                <Select defaultValue="price-low">
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                  </SelectContent>
                </Select>
                
                <div className="flex border rounded-md">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="icon"
                    onClick={() => setViewMode("grid")}
                  >
                    <Grid2X2 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="icon"
                    onClick={() => setViewMode("list")}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Vehicle Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
                  : "space-y-4"
              }
            >
              {vehicles.map((vehicle, index) => (
                <motion.div
                  key={vehicle.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  <VehicleCard vehicle={vehicle} />
                </motion.div>
              ))}
            </motion.div>

            {/* Load More */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex justify-center mt-12"
            >
              <Button variant="outline" size="lg">
                Load More Vehicles
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};