import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { kenyaCounties } from "@/data/kenyaCounties";

interface FilterPanelProps {
  selectedRegion: string;
  selectedRisk: string;
  timeRange: string;
  onRegionChange: (value: string) => void;
  onRiskChange: (value: string) => void;
  onTimeRangeChange: (value: string) => void;
}

const FilterPanel = ({
  selectedRegion,
  selectedRisk,
  timeRange,
  onRegionChange,
  onRiskChange,
  onTimeRangeChange
}: FilterPanelProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div>
        <label className="text-sm font-medium text-foreground mb-2 block">Region</label>
        <Select value={selectedRegion} onValueChange={onRegionChange}>
          <SelectTrigger>
            <SelectValue placeholder="Select region" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Regions</SelectItem>
            {kenyaCounties.map(county => (
              <SelectItem key={county.name} value={county.name}>
                {county.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="text-sm font-medium text-foreground mb-2 block">Risk Level</label>
        <Select value={selectedRisk} onValueChange={onRiskChange}>
          <SelectTrigger>
            <SelectValue placeholder="Select risk level" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Levels</SelectItem>
            <SelectItem value="critical">Critical</SelectItem>
            <SelectItem value="high">High</SelectItem>
            <SelectItem value="medium">Medium</SelectItem>
            <SelectItem value="low">Low</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="text-sm font-medium text-foreground mb-2 block">Time Range</label>
        <Select value={timeRange} onValueChange={onTimeRangeChange}>
          <SelectTrigger>
            <SelectValue placeholder="Select time range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="7d">Last 7 Days</SelectItem>
            <SelectItem value="30d">Last 30 Days</SelectItem>
            <SelectItem value="90d">Last 90 Days</SelectItem>
            <SelectItem value="6m">Last 6 Months</SelectItem>
            <SelectItem value="1y">Last Year</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default FilterPanel;
