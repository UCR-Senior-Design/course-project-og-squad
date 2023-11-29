import { AiFillHome } from "react-icons/ai";
import { ImBook } from "react-icons/im";
import { BsFillPenFill } from "react-icons/bs";

export const navLinks = [
  {
    id: "home",
    title: "Home",
    icon: <AiFillHome />,
  },
  {
    id: "post",
    title: "Post",
    icon: <BsFillPenFill />,
  },
  {
    id: "saved",
    title: "Saved",
    icon: <ImBook />,
  },
];

export const allPosts = [
  {
    id: 1,
    name: "Graphics Card",
    part: "GPU",
    condition: "New",
    price: "$500",
    phone: "123-456-7890",
    imageURL: "https://example.com/gpu.jpg",
  },
  {
    id: 2,
    name: "Processor",
    part: "CPU",
    condition: "Used",
    price: "$300",
    phone: "987-654-3210",
    imageURL: "https://example.com/cpu.jpg",
  },
  {
    id: 3,
    name: "Memory",
    part: "RAM",
    condition: "Like New",
    price: "$100",
    phone: "555-123-4567",
    imageURL: "https://example.com/ram.jpg",
  },
  {
    id: 4,
    name: "Storage",
    part: "SSD",
    condition: "New",
    price: "$80",
    phone: "111-222-3333",
    imageURL: "https://example.com/ssd.jpg",
  },
  {
    id: 5,
    name: "Motherboard",
    part: "Motherboard",
    condition: "Refurbished",
    price: "$150",
    phone: "444-555-6666",
    imageURL: "https://example.com/motherboard.jpg",
  },
  {
    id: 6,
    name: "Power Supply",
    part: "PSU",
    condition: "Used",
    price: "$50",
    phone: "777-888-9999",
    imageURL: "https://example.com/psu.jpg",
  },
  {
    id: 7,
    name: "Cooling System",
    part: "Cooler",
    condition: "Like New",
    price: "$60",
    phone: "222-333-4444",
    imageURL: "https://example.com/cooler.jpg",
  },
  {
    id: 8,
    name: "Case",
    part: "PC Case",
    condition: "Used",
    price: "$70",
    phone: "666-777-8888",
    imageURL: "https://example.com/case.jpg",
  },
  {
    id: 9,
    name: "Networking Card",
    part: "Network Adapter",
    condition: "New",
    price: "$20",
    phone: "333-444-5555",
    imageURL: "https://example.com/networking.jpg",
  },
  {
    id: 10,
    name: "Keyboard",
    part: "Peripheral",
    condition: "Like New",
    price: "$40",
    phone: "999-000-1111",
    imageURL: "https://example.com/keyboard.jpg",
  },
];
