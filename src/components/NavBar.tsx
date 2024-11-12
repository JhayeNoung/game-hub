import { HStack, Image} from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import ToggleDarkMode from './ToggleDarkMode'

function NavBar() {
  return (
    <>
        {/* 'justifyContent' document is under Components > Layout > Flex */}
        <HStack justifyContent='space-between' padding='10px'>
            <Image src={logo} boxSize="60px"/>
            <ToggleDarkMode/>
        </HStack>
    </>
  )
}

export default NavBar