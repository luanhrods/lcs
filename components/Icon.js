import { Play, Instagram, Mail, Youtube, Smartphone, PenTool, Video } from 'lucide-react'

const iconMap = {
  Play,
  Instagram,
  Mail,
  Youtube,
  Smartphone,
  PenTool,
  Video,
}

export default function Icon({ name, ...props }) {
  const IconComponent = iconMap[name]
  return IconComponent ? <IconComponent {...props} /> : null
}
