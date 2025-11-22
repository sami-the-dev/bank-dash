import marcel from "../public/marcel.jpg";
import julia from "../public/julia-volk.jpg";
import emanuel from "../public/emauel.jpg";

export const QUICK_TRANSFER_CONTACTS = [
  {
    id: 1,
    name: "Livia Bator",
    role: "CEO",
    avatar: julia,
  },
  {
    id: 2,
    name: "Randy Press",
    role: "Director",
    avatar: marcel,
  },
  {
    id: 3,
    name: "Workman",
    role: "Designer",
    avatar: emanuel,
  },
] as const;
