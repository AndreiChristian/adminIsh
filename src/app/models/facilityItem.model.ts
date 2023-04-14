export interface FacilityItemInterface {
  name: string;
  description: string;
  imagePath: string;
  level: "G" | "R" | "P";
  included: boolean;
  extraPrice: number;
}
