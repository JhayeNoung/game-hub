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
import { HStack, Icon } from '@chakra-ui/react';
import { ReactElement } from 'react';


interface Prop{
    platforms: ParentPlatform[];
}


function PlatformIconList({ platforms }: Prop) {
    const iconMap: { [key: string]: ReactElement } = {
        pc: <FaWindows/>,
        playstation: <FaPlaystation/>,
        xbox: <FaXbox/>,
        mac: <FaApple/>,
        nintendo: <SiNintendoswitch />,
        linux: <FaLinux/>,
        android: <FaAndroid/>,
        ios: <MdPhoneIphone/>,
        web: <BsGlobe/>,
    };

    return (
    <>
        {/* marginY document is under Styling > Style Props > Spacing */}
        <HStack marginY={1}>
            {platforms.map(p => 

                <Icon color="gray.500" key={p.id}>
                    {iconMap[p.slug]}
                </Icon>
            )}
        </HStack>
    </>
    );
}

export default PlatformIconList