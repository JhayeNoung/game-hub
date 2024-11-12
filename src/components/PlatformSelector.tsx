import usePlatforms from "@/hooks/usePlatforms";
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "@/components/ui/menu"
import { Button } from "./ui/button";

function PlatformSelector() {
  const { data, error} = usePlatforms();

  if(error) return null;
  
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button>Platform</Button>
      </MenuTrigger>
      <MenuContent>
        {data.map(d=><MenuItem value={d.name} onClick={()=>console.log(d.name)}>{d.name}</MenuItem>)}
      </MenuContent>
    </MenuRoot>
  )
}

export default PlatformSelector