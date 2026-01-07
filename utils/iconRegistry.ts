// utils/iconRegistry.ts
import { TaskIcon } from "@/animatedIcons/TaskIcon";
import { TwitterIcon } from "@/animatedIcons/TwitterIcon";
import { StarIcon } from "@/animatedIcons/StarIcon";
import {ThumbsupIcon} from "@/animatedIcons/ThumbsupIcon";
import {YoutubeIcon} from "@/animatedIcons/YoutubeIcon";
import {SearchIcon} from "@/animatedIcons/SearchIcon";
import {NotificationIcon} from "@/animatedIcons/Notification"
import { FaviourateIcon } from "@/animatedIcons/FaviourateIcon";
import { DownloadIcon } from "@/animatedIcons/DownloadIcon";
import { AddIcon } from "@/animatedIcons/AddIcon";

export const ICON_REGISTRY = {
  task: TaskIcon,
  twitter: TwitterIcon,
  star: StarIcon,
  thumbsup:ThumbsupIcon,
  youtube:YoutubeIcon,
  search:SearchIcon,
  notification:NotificationIcon,
  faviourate:FaviourateIcon,
  download:DownloadIcon,
  add:AddIcon
};

export type IconName = keyof typeof ICON_REGISTRY;
