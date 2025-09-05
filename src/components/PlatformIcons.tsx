import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import {MdPhoneIphone} from 'react-icons/md'
import {SiNintendo } from 'react-icons/si'
import {BsGlobe} from 'react-icons/bs'
import { Platform } from "../hooks/useGames";
import { HStack, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIcons = ({ platforms }: Props) => {
   
    const iconMape: {[key:string]: IconType}={
        pc:FaWindows,
        FaPlaystation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        ios: MdPhoneIphone,
        web: BsGlobe,
        android: FaAndroid
    }

    return (
    <HStack marginY={'10px'}> //its 10px it means 1 * theme.space
      {platforms.map((platform) => (
        <Icon key={platform.id} as={iconMape[platform.slug]} color='gray.500' />
      ))}
    </HStack>
  );
};

export default PlatformIcons;
