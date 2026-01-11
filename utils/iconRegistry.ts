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
import { AppleIcon } from "@/animatedIcons/Apple-Icon";
import { GithubIcon } from "@/animatedIcons/Github-Icon";
import { InstagramIcon } from "@/animatedIcons/Instagram-Icon";
import { DeleteIcon } from "@/animatedIcons/Delete-Icon";
import { LockIcon } from "@/animatedIcons/Lock-Icon";
import { LocationIcon } from "@/animatedIcons/Location-Icon";
import { UserIcon } from "@/animatedIcons/User-Icon";

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
  link:LinkIcon,
  apple:AppleIcon,
  github:GithubIcon,
  instagram:InstagramIcon,
  delete:DeleteIcon,
  lock:LockIcon,
  location:LocationIcon,
  user:UserIcon
};

export type IconName = keyof typeof ICON_REGISTRY;
