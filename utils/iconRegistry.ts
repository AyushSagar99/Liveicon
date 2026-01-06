// utils/iconRegistry.ts
import { TaskIcon } from "@/animatedIcons/TaskIcon";
import { TwitterIcon } from "@/animatedIcons/TwitterIcon";
import { StarIcon } from "@/animatedIcons/StarIcon";
import {ThumbsupIcon} from "@/animatedIcons/ThumbsupIcon"
import {YoutubeIcon} from "@/animatedIcons/YoutubeIcon"

export const ICON_REGISTRY = {
  task: TaskIcon,
  twitter: TwitterIcon,
  star: StarIcon,
  thumbsup:ThumbsupIcon,
  youtube:YoutubeIcon,
};

export type IconName = keyof typeof ICON_REGISTRY;
