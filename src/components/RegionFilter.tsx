
import { 
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue 
} from "@/components/ui/select";

interface RegionFilterProps {
  selectedRegion: string;
  setSelectedRegion: (region: string) => void;
}

const regions = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

const RegionFilter = ({ selectedRegion, setSelectedRegion }: RegionFilterProps) => {
  const handleValueChange = (value: string) => {
    setSelectedRegion(value === 'All' ? '' : value);
  };

  const displayValue = selectedRegion || 'All';

  return (
    <Select value={displayValue} onValueChange={handleValueChange}>
      <SelectTrigger 
        className="w-full sm:w-48 bg-element shadow-md hover:bg-accent transition-colors duration-200"
        aria-label="Filter by Region"
      >
        <SelectValue>{displayValue}</SelectValue>
      </SelectTrigger>
      <SelectContent 
        className="bg-element border-border z-[9999]" 
        position="popper"
        sideOffset={5}
      >
        <SelectGroup>
          {regions.map(region => (
            <SelectItem 
              key={region} 
              value={region}
              className="cursor-pointer hover:bg-accent transition-colors duration-200"
            >
              {region}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default RegionFilter;
