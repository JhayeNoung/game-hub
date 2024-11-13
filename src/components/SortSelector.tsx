import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "@/components/ui/menu"
import { Button } from "./ui/button";
import { BsChevronDown } from "react-icons/bs";

function SortSelector() {  
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button>Order by: Relevance <BsChevronDown/> </Button>
      </MenuTrigger>
      <MenuContent>
        <MenuItem value="relevance">Relevance</MenuItem>
        <MenuItem value="date-added">Date added</MenuItem>
        <MenuItem value="name">Name</MenuItem>
        <MenuItem value="release-date">Release date</MenuItem>
        <MenuItem value="average-rating">Average rating</MenuItem>
      </MenuContent>
    </MenuRoot>
  )
}

export default SortSelector