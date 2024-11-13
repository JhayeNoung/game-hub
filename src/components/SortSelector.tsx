import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "@/components/ui/menu"
import { Button } from "./ui/button";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectedSortOrder: (order: string) => void ;
  selectedSortOrder: string;
}

function SortSelector({onSelectedSortOrder, selectedSortOrder}: Props) {  
  const sortOrder = [
    {value: '', label: 'Relevance'},
    {value: '-added', label: 'Date Added'},
    {value: 'name', label: 'Name'},
    {value: '-released', label: 'Released date'},
    {value: 'metacritic', label: 'Popular'},
    {value: 'rating', label: 'Average rating'},
  ]

  const currentSortOrder = sortOrder.find(s => s.value === selectedSortOrder)?.label || 'Relevance';

  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button>Order by: {currentSortOrder} <BsChevronDown/> </Button>
      </MenuTrigger>
      <MenuContent>
        { sortOrder.map(s=> <MenuItem onClick={()=>onSelectedSortOrder(s.value)} key={s.value} value={s.value}>{s.label}</MenuItem>)}
      </MenuContent>
    </MenuRoot>
  )
}

export default SortSelector