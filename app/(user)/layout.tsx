export const metadata = {
  title: 'OHP Portfolio',
  description: 'Architectural Portfolio',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
