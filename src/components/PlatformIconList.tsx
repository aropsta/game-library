// --------------importing various icons
import {
  FaWindows,
  FaPlaystation,
  FaApple,
  FaXbox,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
// -----------------
import { Platform } from "../hooks/useGames";
import {
  Icon,
  HStack,
  Image,
  SimpleGrid,
  Text,
  Stack,
  Wrap,
  Tooltip,
} from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    android: FaAndroid,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };
  return (
    <Wrap marginY={1.5}>
      {platforms.map((platform) => (
        <Tooltip key={platform.id} label={platform.name}>
          <span>
            <Icon as={iconMap[platform.slug]} color="gray.500" />
          </span>
        </Tooltip>
      ))}
    </Wrap>
  );
};

export default PlatformIconList;
