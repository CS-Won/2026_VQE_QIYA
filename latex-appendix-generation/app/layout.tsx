import React from "react"
import type { Metadata } from 'next'
import { EB_Garamond, JetBrains_Mono } from 'next/font/google'

import './globals.css'

const _garamond = EB_Garamond({ subsets: ['latin'], variable: '--font-serif' })
const _jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata: Metadata = {
  title: 'Paper Appendix',
  description: 'Academic paper appendix with LaTeX rendering',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${_garamond.variable} ${_jetbrainsMono.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
