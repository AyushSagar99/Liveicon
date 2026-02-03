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
import { AccidentIcon } from "@/animatedIcons/Accident-Icon";
import { CompassIcon } from "@/animatedIcons/Compass-Icon";
import { ActivityIcon } from "@/animatedIcons/Activity-Icon";
import { SquareIcon } from "@/animatedIcons/Square-Icon";
import { CommentIcon } from "@/animatedIcons/Comment-Icon";
import { CameraIcon } from "@/animatedIcons/Camera-Icon";
import { BatteryFullIcon } from "@/animatedIcons/BatteryFull-Icon";
import { BookmarkIcon } from "@/animatedIcons/Bookmark-Icon";
import { ClockIcon } from "@/animatedIcons/Clock-Icon";
import { MailIcon } from "@/animatedIcons/Mail-Icon";
import { AirplaneIcon } from "@/animatedIcons/Airplane-Icon";
import { AirplaneOffIcon } from "@/animatedIcons/Airplane-Off";
import { AirdropIcon } from "@/animatedIcons/Airdrop-Icon";
import { AmazonIcon } from "@/animatedIcons/Amazon-Icon";
import { BallonsIcon } from "@/animatedIcons/Ballons-Icon";
import { AndroidIcon } from "@/animatedIcons/Android-Icon";
import { AnonymousIcon } from "@/animatedIcons/Anonymous-Icon";
import { BitcoinWalletIcon } from "@/animatedIcons/BitcoinWallet-Icon";
import { MiningIcon } from "@/animatedIcons/Mining-Icon";
import { EthereumIcon } from "@/animatedIcons/Ethereum-Icon";

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
  user:UserIcon,
  accident:AccidentIcon,
  compass:CompassIcon,
  activity:ActivityIcon,
  square:SquareIcon,
  comment:CommentIcon,
  camera:CameraIcon,
  battery:BatteryFullIcon,
  bookmark:BookmarkIcon,
  clock:ClockIcon,
  mail:MailIcon,
  airplane:AirplaneIcon,
  airplaneOff:AirplaneOffIcon,
  airdrop:AirdropIcon,
  amazon:AmazonIcon,
  ballons:BallonsIcon,
  android:AndroidIcon,
  anonymous:AnonymousIcon,
  bitcoinwallet:BitcoinWalletIcon,
  mining:MiningIcon,
  ethereum:EthereumIcon,
};

export type IconName = keyof typeof ICON_REGISTRY;
