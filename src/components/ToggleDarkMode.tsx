import { HStack } from '@chakra-ui/react'
import { Switch } from "@/components/ui/switch"
import { useColorMode } from './ui/color-mode'

function ToggleDarkMode() {
    // userColorMode for toggling dark mode
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <HStack>
            <Switch checked={colorMode === 'dark'} onCheckedChange={toggleColorMode} colorPalette='green'>Dark Mode</Switch>
        </HStack>
    )
}

export default ToggleDarkMode