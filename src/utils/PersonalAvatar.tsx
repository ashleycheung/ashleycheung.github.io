import { Avatar, AvatarProps } from "@chakra-ui/react";
import profile from "../assets/profile.jpg";

export const PersonalAvatar = (props: AvatarProps) => {
  return <Avatar name="Ashley Cheung" src={profile} {...props} />;
};
