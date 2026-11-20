import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://foru.arborm.co'),
  title: '为你 For You · 一份用心准备的礼物',
  description:
    '为你（For You）是一个以 AI 角色陪伴为核心的单人社交应用。在这个世界里，你是唯一的真实人类——与拥有独立人格、记忆与喜好的 AI 角色聊天、浏览他们的动态，收获一段始终为你存在的关系。一份用心准备的礼物，正在精心打磨中。',
  icons: {
    icon: '/favicon.png',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: '为你 For You · 一份用心准备的礼物',
    description:
      '一个始终为你存在的私人社交世界。正在精心打磨中。',
    images: ['/images/BANNER.jpg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  )
}
