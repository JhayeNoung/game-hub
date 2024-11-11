import usePlatforms from "@/hooks/usePlatforms";
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "@/components/ui/menu"
import { Button } from "./ui/button";
import { Platform } from "@/hooks/usePlatforms";

interface Prop {
  onSelectedPlatform: (platform: Platform) => void,
  selectedPlatform: Platform | null,
}

function PlatformSelector({ onSelectedPlatform, selectedPlatform}: Prop) {
  const { data, error} = usePlatforms();

  if(error) return null;
  
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button>{selectedPlatform?.name || 'Platform'}</Button>
      </MenuTrigger>
      <MenuContent>
        {data.map(d=><MenuItem key={d.id} value={d.name} onClick={()=>onSelectedPlatform(d)}>{d.name}</MenuItem>)}
      </MenuContent>
    </MenuRoot>
  )
}

export default PlatformSelector