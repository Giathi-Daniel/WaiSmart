export interface CountyData {
  name: string;
  riskLevel: "critical" | "high" | "medium" | "low";
  daysUntilShortage: number;
  affectedPopulation: string;
  position: { top: string; left: string };
  rainfallMm: number;
  reservoirPercent: number;
  soilMoisturePercent: number;
}

// All 47 counties of Kenya with realistic risk assessments
// High-risk areas are typically in arid and semi-arid lands (ASALs)
export const kenyaCounties: CountyData[] = [
  // High-risk counties (ASAL regions)
  { name: "Turkana", riskLevel: "high", daysUntilShortage: 5, affectedPopulation: "125,000", position: { top: "15%", left: "20%" }, rainfallMm: 8.2, reservoirPercent: 32, soilMoisturePercent: 18 },
  { name: "Mandera", riskLevel: "high", daysUntilShortage: 4, affectedPopulation: "98,000", position: { top: "10%", left: "80%" }, rainfallMm: 6.5, reservoirPercent: 28, soilMoisturePercent: 15 },
  { name: "Wajir", riskLevel: "high", daysUntilShortage: 6, affectedPopulation: "112,000", position: { top: "25%", left: "65%" }, rainfallMm: 9.1, reservoirPercent: 35, soilMoisturePercent: 22 },
  { name: "Garissa", riskLevel: "high", daysUntilShortage: 7, affectedPopulation: "89,000", position: { top: "40%", left: "65%" }, rainfallMm: 10.3, reservoirPercent: 38, soilMoisturePercent: 25 },
  { name: "Marsabit", riskLevel: "high", daysUntilShortage: 5, affectedPopulation: "78,000", position: { top: "20%", left: "45%" }, rainfallMm: 7.8, reservoirPercent: 30, soilMoisturePercent: 19 },
  { name: "Isiolo", riskLevel: "high", daysUntilShortage: 8, affectedPopulation: "67,000", position: { top: "35%", left: "50%" }, rainfallMm: 11.5, reservoirPercent: 40, soilMoisturePercent: 28 },
  { name: "Samburu", riskLevel: "high", daysUntilShortage: 6, affectedPopulation: "54,000", position: { top: "25%", left: "40%" }, rainfallMm: 9.8, reservoirPercent: 36, soilMoisturePercent: 24 },
  { name: "Tana River", riskLevel: "high", daysUntilShortage: 7, affectedPopulation: "71,000", position: { top: "50%", left: "60%" }, rainfallMm: 10.1, reservoirPercent: 37, soilMoisturePercent: 26 },
  
  // Medium-risk counties
  { name: "Baringo", riskLevel: "medium", daysUntilShortage: 9, affectedPopulation: "45,000", position: { top: "30%", left: "35%" }, rainfallMm: 15.2, reservoirPercent: 48, soilMoisturePercent: 35 },
  { name: "Laikipia", riskLevel: "medium", daysUntilShortage: 10, affectedPopulation: "38,000", position: { top: "35%", left: "40%" }, rainfallMm: 18.5, reservoirPercent: 52, soilMoisturePercent: 42 },
  { name: "Kajiado", riskLevel: "medium", daysUntilShortage: 9, affectedPopulation: "52,000", position: { top: "65%", left: "45%" }, rainfallMm: 16.3, reservoirPercent: 50, soilMoisturePercent: 38 },
  { name: "Narok", riskLevel: "medium", daysUntilShortage: 11, affectedPopulation: "41,000", position: { top: "60%", left: "35%" }, rainfallMm: 19.7, reservoirPercent: 55, soilMoisturePercent: 45 },
  { name: "West Pokot", riskLevel: "medium", daysUntilShortage: 10, affectedPopulation: "36,000", position: { top: "20%", left: "30%" }, rainfallMm: 17.1, reservoirPercent: 51, soilMoisturePercent: 40 },
  { name: "Elgeyo Marakwet", riskLevel: "medium", daysUntilShortage: 11, affectedPopulation: "32,000", position: { top: "28%", left: "32%" }, rainfallMm: 20.3, reservoirPercent: 56, soilMoisturePercent: 46 },
  { name: "Kitui", riskLevel: "medium", daysUntilShortage: 9, affectedPopulation: "58,000", position: { top: "55%", left: "52%" }, rainfallMm: 14.8, reservoirPercent: 47, soilMoisturePercent: 34 },
  { name: "Makueni", riskLevel: "medium", daysUntilShortage: 10, affectedPopulation: "49,000", position: { top: "62%", left: "50%" }, rainfallMm: 15.9, reservoirPercent: 49, soilMoisturePercent: 36 },
  { name: "Taita Taveta", riskLevel: "medium", daysUntilShortage: 11, affectedPopulation: "44,000", position: { top: "70%", left: "52%" }, rainfallMm: 18.2, reservoirPercent: 53, soilMoisturePercent: 43 },
  { name: "Lamu", riskLevel: "medium", daysUntilShortage: 10, affectedPopulation: "28,000", position: { top: "48%", left: "72%" }, rainfallMm: 16.5, reservoirPercent: 50, soilMoisturePercent: 39 },
  
  // Low-risk counties (higher rainfall regions)
  { name: "Kilifi", riskLevel: "low", daysUntilShortage: 12, affectedPopulation: "42,000", position: { top: "60%", left: "75%" }, rainfallMm: 22.4, reservoirPercent: 62, soilMoisturePercent: 52 },
  { name: "Kwale", riskLevel: "low", daysUntilShortage: 13, affectedPopulation: "35,000", position: { top: "70%", left: "70%" }, rainfallMm: 24.1, reservoirPercent: 65, soilMoisturePercent: 55 },
  { name: "Mombasa", riskLevel: "low", daysUntilShortage: 14, affectedPopulation: "18,000", position: { top: "68%", left: "72%" }, rainfallMm: 25.3, reservoirPercent: 68, soilMoisturePercent: 58 },
  { name: "Nairobi", riskLevel: "low", daysUntilShortage: 13, affectedPopulation: "95,000", position: { top: "55%", left: "45%" }, rainfallMm: 23.7, reservoirPercent: 64, soilMoisturePercent: 54 },
  { name: "Kiambu", riskLevel: "low", daysUntilShortage: 14, affectedPopulation: "38,000", position: { top: "52%", left: "43%" }, rainfallMm: 26.5, reservoirPercent: 70, soilMoisturePercent: 60 },
  { name: "Murang'a", riskLevel: "low", daysUntilShortage: 14, affectedPopulation: "29,000", position: { top: "48%", left: "42%" }, rainfallMm: 27.8, reservoirPercent: 72, soilMoisturePercent: 62 },
  { name: "Nyeri", riskLevel: "low", daysUntilShortage: 14, affectedPopulation: "26,000", position: { top: "42%", left: "41%" }, rainfallMm: 28.9, reservoirPercent: 74, soilMoisturePercent: 64 },
  { name: "Kirinyaga", riskLevel: "low", daysUntilShortage: 14, affectedPopulation: "24,000", position: { top: "45%", left: "43%" }, rainfallMm: 27.3, reservoirPercent: 71, soilMoisturePercent: 61 },
  { name: "Embu", riskLevel: "low", daysUntilShortage: 13, affectedPopulation: "31,000", position: { top: "48%", left: "46%" }, rainfallMm: 25.6, reservoirPercent: 68, soilMoisturePercent: 57 },
  { name: "Meru", riskLevel: "low", daysUntilShortage: 13, affectedPopulation: "34,000", position: { top: "40%", left: "47%" }, rainfallMm: 24.9, reservoirPercent: 66, soilMoisturePercent: 56 },
  { name: "Tharaka Nithi", riskLevel: "low", daysUntilShortage: 13, affectedPopulation: "22,000", position: { top: "45%", left: "48%" }, rainfallMm: 23.2, reservoirPercent: 63, soilMoisturePercent: 53 },
  { name: "Machakos", riskLevel: "low", daysUntilShortage: 12, affectedPopulation: "46,000", position: { top: "58%", left: "47%" }, rainfallMm: 21.5, reservoirPercent: 60, soilMoisturePercent: 50 },
  { name: "Nakuru", riskLevel: "low", daysUntilShortage: 14, affectedPopulation: "52,000", position: { top: "42%", left: "35%" }, rainfallMm: 29.4, reservoirPercent: 75, soilMoisturePercent: 65 },
  { name: "Nyandarua", riskLevel: "low", daysUntilShortage: 14, affectedPopulation: "21,000", position: { top: "38%", left: "38%" }, rainfallMm: 30.2, reservoirPercent: 76, soilMoisturePercent: 66 },
  { name: "Kericho", riskLevel: "low", daysUntilShortage: 14, affectedPopulation: "28,000", position: { top: "48%", left: "32%" }, rainfallMm: 31.5, reservoirPercent: 78, soilMoisturePercent: 68 },
  { name: "Bomet", riskLevel: "low", daysUntilShortage: 14, affectedPopulation: "25,000", position: { top: "52%", left: "32%" }, rainfallMm: 30.8, reservoirPercent: 77, soilMoisturePercent: 67 },
  { name: "Kisii", riskLevel: "low", daysUntilShortage: 14, affectedPopulation: "32,000", position: { top: "58%", left: "28%" }, rainfallMm: 32.1, reservoirPercent: 79, soilMoisturePercent: 69 },
  { name: "Nyamira", riskLevel: "low", daysUntilShortage: 14, affectedPopulation: "19,000", position: { top: "56%", left: "30%" }, rainfallMm: 31.7, reservoirPercent: 78, soilMoisturePercent: 68 },
  { name: "Kakamega", riskLevel: "low", daysUntilShortage: 14, affectedPopulation: "41,000", position: { top: "38%", left: "28%" }, rainfallMm: 33.2, reservoirPercent: 80, soilMoisturePercent: 70 },
  { name: "Vihiga", riskLevel: "low", daysUntilShortage: 14, affectedPopulation: "17,000", position: { top: "40%", left: "29%" }, rainfallMm: 32.8, reservoirPercent: 79, soilMoisturePercent: 69 },
  { name: "Bungoma", riskLevel: "low", daysUntilShortage: 14, affectedPopulation: "37,000", position: { top: "35%", left: "27%" }, rainfallMm: 32.5, reservoirPercent: 79, soilMoisturePercent: 69 },
  { name: "Busia", riskLevel: "low", daysUntilShortage: 14, affectedPopulation: "29,000", position: { top: "38%", left: "25%" }, rainfallMm: 31.9, reservoirPercent: 78, soilMoisturePercent: 68 },
  { name: "Siaya", riskLevel: "low", daysUntilShortage: 14, affectedPopulation: "27,000", position: { top: "42%", left: "26%" }, rainfallMm: 30.6, reservoirPercent: 77, soilMoisturePercent: 67 },
  { name: "Kisumu", riskLevel: "low", daysUntilShortage: 14, affectedPopulation: "34,000", position: { top: "44%", left: "27%" }, rainfallMm: 31.3, reservoirPercent: 78, soilMoisturePercent: 68 },
  { name: "Homa Bay", riskLevel: "low", daysUntilShortage: 14, affectedPopulation: "31,000", position: { top: "48%", left: "26%" }, rainfallMm: 30.1, reservoirPercent: 76, soilMoisturePercent: 66 },
  { name: "Migori", riskLevel: "low", daysUntilShortage: 14, affectedPopulation: "28,000", position: { top: "52%", left: "26%" }, rainfallMm: 29.7, reservoirPercent: 75, soilMoisturePercent: 65 },
  { name: "Trans Nzoia", riskLevel: "low", daysUntilShortage: 14, affectedPopulation: "33,000", position: { top: "30%", left: "28%" }, rainfallMm: 28.4, reservoirPercent: 73, soilMoisturePercent: 63 },
  { name: "Uasin Gishu", riskLevel: "low", daysUntilShortage: 14, affectedPopulation: "36,000", position: { top: "33%", left: "30%" }, rainfallMm: 27.6, reservoirPercent: 72, soilMoisturePercent: 62 },
  { name: "Nandi", riskLevel: "low", daysUntilShortage: 14, affectedPopulation: "26,000", position: { top: "36%", left: "30%" }, rainfallMm: 28.9, reservoirPercent: 74, soilMoisturePercent: 64 },
];

// Get random high-risk counties for display
export const getRandomHighRiskCounties = (count: number = 3): CountyData[] => {
  const highRisk = kenyaCounties.filter(c => c.riskLevel === "high");
  return highRisk.sort(() => Math.random() - 0.5).slice(0, count);
};

// Get counties by risk level
export const getCountiesByRisk = (level: "high" | "medium" | "low"): CountyData[] => {
  return kenyaCounties.filter(c => c.riskLevel === level);
};
