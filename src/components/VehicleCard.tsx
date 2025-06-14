import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Users, Car } from "lucide-react";
import { motion } from "framer-motion";

interface Vehicle {
  id: string;
  name: string;
  image: string;
  price: number;
  rating: number;
  location: string;
  seats: number;
  category: string;
  transmission: "Automatic" | "Manual";
  fuel: string;
}

interface VehicleCardProps {
  vehicle: Vehicle;
  onBook?: (vehicleId: string) => void;
}

export const VehicleCard = ({ vehicle, onBook }: VehicleCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow">
        <div className="relative overflow-hidden">
          <img
            src={vehicle.image}
            alt={vehicle.name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <Badge className="absolute top-3 left-3 bg-primary/90 text-primary-foreground">
            {vehicle.category}
          </Badge>
        </div>
        
        <CardContent className="p-4">
          <div className="flex items-start justify-between mb-2">
            <h3 className="font-semibold text-lg truncate">{vehicle.name}</h3>
            <div className="flex items-center space-x-1 text-sm">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">{vehicle.rating}</span>
            </div>
          </div>
          
          <div className="flex items-center text-muted-foreground text-sm mb-3">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="truncate">{vehicle.location}</span>
          </div>
          
          <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-1" />
                <span>{vehicle.seats}</span>
              </div>
              <div className="flex items-center">
                <Car className="h-4 w-4 mr-1" />
                <span>{vehicle.transmission}</span>
              </div>
            </div>
            <Badge variant="outline" className="text-xs">
              {vehicle.fuel}
            </Badge>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <span className="text-2xl font-bold text-primary">${vehicle.price}</span>
              <span className="text-muted-foreground">/day</span>
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="p-4 pt-0">
          <Button 
            className="w-full" 
            onClick={() => onBook?.(vehicle.id)}
          >
            Book Now
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};