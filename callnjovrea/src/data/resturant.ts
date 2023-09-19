import { OcceanDelights } from "../assets";

interface ResturantCardProps {
  id: number;
  backgroundURL: string;
  title: string;
  location: string;
}

export const TopResturantsList: ResturantCardProps[] = [
  {
    id: 0,
    backgroundURL: OcceanDelights,
    title: "Ocean Delights",
    location: "Waterfront Avenue, City Center",
  },
  {
    id: 1,
    backgroundURL: OcceanDelights,
    title: "Fisherman's Catch",
    location: "Coastal Street, Beachside",
  },
  {
    id: 2,
    backgroundURL: OcceanDelights,
    title: "Frozen Sea Bistro",
    location: "Waterfront Avenue, City Center",
  },
  {
    id: 3,
    backgroundURL: OcceanDelights,
    title: "Seaside Grillhouse",
    location: "Shore Road, Seaside Village",
  },
  {
    id: 4,
    backgroundURL: OcceanDelights,
    title: "Ocean Delights",
    location: "Icy Street, Frozen District",
  },
  {
    id: 5,
    backgroundURL: OcceanDelights,
    title: "Gourmet Fishery",
    location: "Waterfront Avenue, City Center",
  },
];
