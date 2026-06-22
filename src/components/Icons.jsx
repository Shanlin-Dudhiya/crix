function Svg({ size, children }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
      {children}
    </svg>
  );
}

export function GlobeIcon({ size = 24 }) {
  return <Svg size={size}><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></Svg>;
}

export function SmartphoneIcon({ size = 24 }) {
  return <Svg size={size}><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></Svg>;
}

export function CpuIcon({ size = 24 }) {
  return <Svg size={size}><rect x="9" y="9" width="6" height="6" /><path d="M15 9V5h-2M9 9V5h2M15 15v4h-2M9 15v4h2M5 9h4M5 15h4M19 9h-4M19 15h-4" /><rect x="3" y="3" width="18" height="18" rx="2" /></Svg>;
}

export function ShieldIcon({ size = 24 }) {
  return <Svg size={size}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></Svg>;
}

export function BarChartIcon({ size = 24 }) {
  return <Svg size={size}><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></Svg>;
}

export function CloudIcon({ size = 24 }) {
  return <Svg size={size}><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" /></Svg>;
}

export function MonitorIcon({ size = 24 }) {
  return <Svg size={size}><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></Svg>;
}

export function MegaphoneIcon({ size = 24 }) {
  return <Svg size={size}><path d="M11 5L6 9H2v6h4l5 4V5z" /><path d="M15.54 8.46a5 5 0 0 1 0 7.07" /><path d="M19.07 4.93a10 10 0 0 1 0 14.14" /></Svg>;
}

export function GraduationCapIcon({ size = 24 }) {
  return <Svg size={size}><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></Svg>;
}

export function BriefcaseIcon({ size = 24 }) {
  return <Svg size={size}><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></Svg>;
}

export function GiftIcon({ size = 24 }) {
  return <Svg size={size}><polyline points="20 12 20 22 4 22 4 12" /><rect x="2" y="7" width="20" height="5" /><line x1="12" y1="22" x2="12" y2="7" /><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" /><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" /></Svg>;
}

export function AwardIcon({ size = 24 }) {
  return <Svg size={size}><circle cx="12" cy="8" r="6" /><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" /></Svg>;
}

export function HomeIcon({ size = 24 }) {
  return <Svg size={size}><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></Svg>;
}

export function FileTextIcon({ size = 24 }) {
  return <Svg size={size}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></Svg>;
}

export function LinkedinIcon({ size = 24 }) {
  return <Svg size={size}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></Svg>;
}

export function UsersIcon({ size = 24 }) {
  return <Svg size={size}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></Svg>;
}

export function UserCheckIcon({ size = 24 }) {
  return <Svg size={size}><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" /><polyline points="17 11 19 13 23 9" /></Svg>;
}

export function TargetIcon({ size = 24 }) {
  return <Svg size={size}><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></Svg>;
}

export function PhoneIcon({ size = 24 }) {
  return <Svg size={size}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.39 2 2 0 0 1 3.59 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l1.87-1.88a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></Svg>;
}

export function MailIcon({ size = 24 }) {
  return <Svg size={size}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></Svg>;
}

export function MapPinIcon({ size = 24 }) {
  return <Svg size={size}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></Svg>;
}

export function ClockIcon({ size = 24 }) {
  return <Svg size={size}><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></Svg>;
}

export function StarIcon({ size = 24 }) {
  return <Svg size={size}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></Svg>;
}

export function BookOpenIcon({ size = 24 }) {
  return <Svg size={size}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></Svg>;
}

export function ClipboardIcon({ size = 24 }) {
  return <Svg size={size}><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><rect x="8" y="2" width="8" height="4" rx="1" ry="1" /></Svg>;
}

export function VideoIcon({ size = 24 }) {
  return <Svg size={size}><polygon points="23 7 16 12 23 17 23 7" /><rect x="1" y="5" width="15" height="14" rx="2" ry="2" /></Svg>;
}

export function CheckCircleIcon({ size = 24 }) {
  return <Svg size={size}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></Svg>;
}

export function TrendingUpIcon({ size = 24 }) {
  return <Svg size={size}><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></Svg>;
}

const ICON_MAP = {
  "globe": GlobeIcon,
  "smartphone": SmartphoneIcon,
  "cpu": CpuIcon,
  "shield": ShieldIcon,
  "bar-chart": BarChartIcon,
  "cloud": CloudIcon,
  "monitor": MonitorIcon,
  "megaphone": MegaphoneIcon,
  "graduation-cap": GraduationCapIcon,
  "briefcase": BriefcaseIcon,
  "gift": GiftIcon,
  "award": AwardIcon,
  "home": HomeIcon,
  "file-text": FileTextIcon,
  "linkedin": LinkedinIcon,
  "users": UsersIcon,
  "user-check": UserCheckIcon,
  "target": TargetIcon,
  "phone": PhoneIcon,
  "mail": MailIcon,
  "map-pin": MapPinIcon,
  "clock": ClockIcon,
  "star": StarIcon,
  "book-open": BookOpenIcon,
  "clipboard": ClipboardIcon,
  "video": VideoIcon,
  "check-circle": CheckCircleIcon,
  "trending-up": TrendingUpIcon,
};

export default function Icon({ name, size = 24 }) {
  const Comp = ICON_MAP[name];
  if (!Comp) return null;
  return <Comp size={size} />;
}
