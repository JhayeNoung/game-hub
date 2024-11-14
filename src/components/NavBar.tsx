import { HStack, Image} from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import ToggleDarkMode from './ToggleDarkMode'
import SearchInput from './SearchInput'

interface Props{
  onSearch: (searchValue: string) => void;
}

function NavBar({onSearch}: Props) {
  return (
    <>
        {/* 'justifyContent' document is under Components > Layout > Flex */}
        <HStack justifyContent='space-between' padding='10px'>
            <Image src={logo} boxSize="60px"/>
            <SearchInput submitHandler={(event)=>onSearch(event.searchName)}/>
            <ToggleDarkMode/>
        </HStack>
    </>
  )
}

export default NavBar