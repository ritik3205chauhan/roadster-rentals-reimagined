export interface Vehicle {
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

export const vehicles: Vehicle[] = [
  {
    id: "1",
    name: "Tesla Model 3",
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=400&h=300&fit=crop",
    price: 89,
    rating: 4.9,
    location: "San Francisco, CA, USA",
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
    location: "Los Angeles, CA, USA",
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
    location: "New York, NY, USA",
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
    location: "London, UK",
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
    location: "Mumbai, India",
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
    location: "Rome, Italy",
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
    location: "Berlin, Germany",
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
    location: "Tokyo, Japan",
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
    location: "Sydney, Australia",
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
    location: "Toronto, Canada",
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
    location: "Bangalore, India",
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
    location: "Paris, France",
    seats: 2,
    category: "Motorcycle",
    transmission: "Manual" as const,
    fuel: "Gasoline"
  },
  {
    id: "13",
    name: "Audi A4",
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=300&fit=crop",
    price: 110,
    rating: 4.8,
    location: "Dubai, UAE",
    seats: 5,
    category: "Luxury",
    transmission: "Automatic" as const,
    fuel: "Gasoline"
  },
  {
    id: "14",
    name: "Bajaj Pulsar NS200",
    image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=400&h=300&fit=crop",
    price: 15,
    rating: 4.3,
    location: "Delhi, India",
    seats: 2,
    category: "Motorcycle",
    transmission: "Manual" as const,
    fuel: "Gasoline"
  },
  {
    id: "15",
    name: "Volkswagen Golf",
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&h=300&fit=crop",
    price: 65,
    rating: 4.6,
    location: "Amsterdam, Netherlands",
    seats: 5,
    category: "Compact",
    transmission: "Manual" as const,
    fuel: "Gasoline"
  },
  {
    id: "16",
    name: "Nissan Leaf",
    image: "https://images.unsplash.com/photo-1593941707882-a5bac6861d75?w=400&h=300&fit=crop",
    price: 70,
    rating: 4.4,
    location: "Oslo, Norway",
    seats: 5,
    category: "Electric",
    transmission: "Automatic" as const,
    fuel: "Electric"
  },
  {
    id: "17",
    name: "Piaggio Ape",
    image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop",
    price: 8,
    rating: 4.2,
    location: "Bangkok, Thailand",
    seats: 3,
    category: "Scooter",
    transmission: "Manual" as const,
    fuel: "Gasoline"
  },
  {
    id: "18",
    name: "Range Rover Evoque",
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=300&fit=crop",
    price: 150,
    rating: 4.9,
    location: "Cape Town, South Africa",
    seats: 5,
    category: "SUV",
    transmission: "Automatic" as const,
    fuel: "Gasoline"
  },
  {
    id: "19",
    name: "Ducati Monster 821",
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=300&fit=crop",
    price: 45,
    rating: 4.7,
    location: "Milan, Italy",
    seats: 2,
    category: "Motorcycle",
    transmission: "Manual" as const,
    fuel: "Gasoline"
  },
  {
    id: "20",
    name: "Hyundai i20",
    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=400&h=300&fit=crop",
    price: 40,
    rating: 4.5,
    location: "Seoul, South Korea",
    seats: 5,
    category: "Compact",
    transmission: "Automatic" as const,
    fuel: "Gasoline"
  }
];