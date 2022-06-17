import dynamic from "next/dynamic";
import { ComponentType, FC } from "react";

type HeroIconProps = {
  name: IconName;
  className?: string;
  outline?: boolean;
};

const HeroIcon: FC<HeroIconProps> = ({ name, className = "", outline = false }) => {
  const Icon: ComponentType<{ className: string }> = outline
    ? dynamic(() => import("@heroicons/react/outline").then((mod) => mod[name]))
    : dynamic(() => import("@heroicons/react/solid").then((mod) => mod[name]));

  return <Icon className={className} />;
};

export default HeroIcon;

export type IconName =
  | "AcademicCapIcon"
  | "AdjustmentsIcon"
  | "AnnotationIcon"
  | "ArchiveIcon"
  | "ArrowCircleDownIcon"
  | "ArrowCircleLeftIcon"
  | "ArrowCircleRightIcon"
  | "ArrowCircleUpIcon"
  | "ArrowDownIcon"
  | "ArrowLeftIcon"
  | "ArrowNarrowDownIcon"
  | "ArrowNarrowLeftIcon"
  | "ArrowNarrowRightIcon"
  | "ArrowNarrowUpIcon"
  | "ArrowRightIcon"
  | "ArrowSmDownIcon"
  | "ArrowSmLeftIcon"
  | "ArrowSmRightIcon"
  | "ArrowSmUpIcon"
  | "ArrowUpIcon"
  | "ArrowsExpandIcon"
  | "AtSymbolIcon"
  | "BackspaceIcon"
  | "BadgeCheckIcon"
  | "BanIcon"
  | "BeakerIcon"
  | "BellIcon"
  | "BookOpenIcon"
  | "BookmarkAltIcon"
  | "BookmarkIcon"
  | "BriefcaseIcon"
  | "CakeIcon"
  | "CalculatorIcon"
  | "CalendarIcon"
  | "CameraIcon"
  | "CashIcon"
  | "ChartBarIcon"
  | "ChartPieIcon"
  | "ChartSquareBarIcon"
  | "ChatAlt2Icon"
  | "ChatAltIcon"
  | "ChatIcon"
  | "CheckCircleIcon"
  | "CheckIcon"
  | "ChevronDoubleDownIcon"
  | "ChevronDoubleLeftIcon"
  | "ChevronDoubleRightIcon"
  | "ChevronDoubleUpIcon"
  | "ChevronDownIcon"
  | "ChevronLeftIcon"
  | "ChevronRightIcon"
  | "ChevronUpIcon"
  | "ChipIcon"
  | "ClipboardCheckIcon"
  | "ClipboardCopyIcon"
  | "ClipboardListIcon"
  | "ClipboardIcon"
  | "ClockIcon"
  | "CloudDownloadIcon"
  | "CloudUploadIcon"
  | "CloudIcon"
  | "CodeIcon"
  | "CogIcon"
  | "CollectionIcon"
  | "ColorSwatchIcon"
  | "CreditCardIcon"
  | "CubeTransparentIcon"
  | "CubeIcon"
  | "CurrencyBangladeshiIcon"
  | "CurrencyDollarIcon"
  | "CurrencyEuroIcon"
  | "CurrencyPoundIcon"
  | "CurrencyRupeeIcon"
  | "CurrencyYenIcon"
  | "CursorClickIcon"
  | "DatabaseIcon"
  | "DesktopComputerIcon"
  | "DeviceMobileIcon"
  | "DeviceTabletIcon"
  | "DocumentAddIcon"
  | "DocumentDownloadIcon"
  | "DocumentDuplicateIcon"
  | "DocumentRemoveIcon"
  | "DocumentReportIcon"
  | "DocumentSearchIcon"
  | "DocumentTextIcon"
  | "DocumentIcon"
  | "DotsCircleHorizontalIcon"
  | "DotsHorizontalIcon"
  | "DotsVerticalIcon"
  | "DownloadIcon"
  | "DuplicateIcon"
  | "EmojiHappyIcon"
  | "EmojiSadIcon"
  | "ExclamationCircleIcon"
  | "ExclamationIcon"
  | "ExternalLinkIcon"
  | "EyeOffIcon"
  | "EyeIcon"
  | "FastForwardIcon"
  | "FilmIcon"
  | "FilterIcon"
  | "FingerPrintIcon"
  | "FireIcon"
  | "FlagIcon"
  | "FolderAddIcon"
  | "FolderDownloadIcon"
  | "FolderOpenIcon"
  | "FolderRemoveIcon"
  | "FolderIcon"
  | "GiftIcon"
  | "GlobeAltIcon"
  | "GlobeIcon"
  | "HandIcon"
  | "HashtagIcon"
  | "HeartIcon"
  | "HomeIcon"
  | "IdentificationIcon"
  | "InboxInIcon"
  | "InboxIcon"
  | "InformationCircleIcon"
  | "KeyIcon"
  | "LibraryIcon"
  | "LightBulbIcon"
  | "LightningBoltIcon"
  | "LinkIcon"
  | "LocationMarkerIcon"
  | "LockClosedIcon"
  | "LockOpenIcon"
  | "LoginIcon"
  | "LogoutIcon"
  | "MailOpenIcon"
  | "MailIcon"
  | "MapIcon"
  | "MenuAlt1Icon"
  | "MenuAlt2Icon"
  | "MenuAlt3Icon"
  | "MenuAlt4Icon"
  | "MenuIcon"
  | "MicrophoneIcon"
  | "MinusCircleIcon"
  | "MinusSmIcon"
  | "MinusIcon"
  | "MoonIcon"
  | "MusicNoteIcon"
  | "NewspaperIcon"
  | "OfficeBuildingIcon"
  | "PaperAirplaneIcon"
  | "PaperClipIcon"
  | "PauseIcon"
  | "PencilAltIcon"
  | "PencilIcon"
  | "PhoneIncomingIcon"
  | "PhoneMissedCallIcon"
  | "PhoneOutgoingIcon"
  | "PhoneIcon"
  | "PhotographIcon"
  | "PlayIcon"
  | "PlusCircleIcon"
  | "PlusSmIcon"
  | "PlusIcon"
  | "PresentationChartBarIcon"
  | "PresentationChartLineIcon"
  | "PrinterIcon"
  | "PuzzleIcon"
  | "QrcodeIcon"
  | "QuestionMarkCircleIcon"
  | "ReceiptRefundIcon"
  | "ReceiptTaxIcon"
  | "RefreshIcon"
  | "ReplyIcon"
  | "RewindIcon"
  | "RssIcon"
  | "SaveAsIcon"
  | "SaveIcon"
  | "ScaleIcon"
  | "ScissorsIcon"
  | "SearchCircleIcon"
  | "SearchIcon"
  | "SelectorIcon"
  | "ServerIcon"
  | "ShareIcon"
  | "ShieldCheckIcon"
  | "ShieldExclamationIcon"
  | "ShoppingBagIcon"
  | "ShoppingCartIcon"
  | "SortAscendingIcon"
  | "SortDescendingIcon"
  | "SparklesIcon"
  | "SpeakerphoneIcon"
  | "StarIcon"
  | "StatusOfflineIcon"
  | "StatusOnlineIcon"
  | "StopIcon"
  | "SunIcon"
  | "SupportIcon"
  | "SwitchHorizontalIcon"
  | "SwitchVerticalIcon"
  | "TableIcon"
  | "TagIcon"
  | "TemplateIcon"
  | "TerminalIcon"
  | "ThumbDownIcon"
  | "ThumbUpIcon"
  | "TicketIcon"
  | "TranslateIcon"
  | "TrashIcon"
  | "TrendingDownIcon"
  | "TrendingUpIcon"
  | "TruckIcon"
  | "UploadIcon"
  | "UserAddIcon"
  | "UserCircleIcon"
  | "UserGroupIcon"
  | "UserRemoveIcon"
  | "UserIcon"
  | "UsersIcon"
  | "VariableIcon"
  | "VideoCameraIcon"
  | "ViewBoardsIcon"
  | "ViewGridAddIcon"
  | "ViewGridIcon"
  | "ViewListIcon"
  | "VolumeOffIcon"
  | "VolumeUpIcon"
  | "WifiIcon"
  | "XCircleIcon"
  | "XIcon"
  | "ZoomInIcon"
  | "ZoomOutIcon";
