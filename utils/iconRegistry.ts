// utils/iconRegistry.ts
import { TaskIcon } from "@/animatedIcons/Task-Icon";
import { TwitterIcon } from "@/animatedIcons/Twitter-Icon";
import { StarIcon } from "@/animatedIcons/Star-Icon";
import {ThumbsupIcon} from "@/animatedIcons/Thumbsup-Icon";
import {YoutubeIcon} from "@/animatedIcons/Youtube-Icon";
import {SearchIcon} from "@/animatedIcons/Search-Icon";
import {NotificationIcon} from "@/animatedIcons/Notification"
import { FaviourateIcon } from "@/animatedIcons/Faviourate-Icon";
import { DownloadIcon } from "@/animatedIcons/Download-Icon";
import { AddIcon } from "@/animatedIcons/Add-Icon";
import { AlarmIcon } from "@/animatedIcons/Alarm-Icon";
import { SettingIcon } from "@/animatedIcons/Setting-Icon";
import { LinkIcon } from "@/animatedIcons/Link-Icon";

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
  add:AddIcon,
  alarm:AlarmIcon,
  setting:SettingIcon,
  link:LinkIcon
};

export type IconName = keyof typeof ICON_REGISTRY;
