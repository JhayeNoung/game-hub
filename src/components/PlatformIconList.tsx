import {
    FaWindows,
    FaPlaystation,
    FaXbox,
    FaApple,
    FaLinux,
    FaAndroid,
} from 'react-icons/fa';
import { BsGlobe } from 'react-icons/bs';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendoswitch } from "react-icons/si";
import { ParentPlatform } from '@/hooks/useGames'
import { Box, HStack } from '@chakra-ui/react';
import { IconType } from 'react-icons';


interface Prop{
    platforms: ParentPlatform[];
}


function PlatformIconList({ platforms }: Prop) {

    const iconMap: { [key: string]: IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        mac: FaApple,
        nintendo: SiNintendoswitch ,
        linux: FaLinux,
        android: FaAndroid,
        ios: MdPhoneIphone,
        web: BsGlobe,
    };

    return (
    <>
        {/* marginY document is under Styling > Style Props > Spacing */}
        <HStack marginY={1}>
            {platforms.map((p) => {
                const IconComponent = iconMap[p.slug];
                return (
                    // Use the as prop to render a different component.
                    // FaWindows can be write as <FaWindows/>. So they are the component like 'PlatformIconList'
                    <Box as={IconComponent} key={p.id} color="gray.500" />
                );
            })}
        </HStack>
    </>
    );
}

export default PlatformIconList