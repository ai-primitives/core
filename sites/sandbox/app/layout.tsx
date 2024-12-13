import { Provider } from '@/components/ui/provider'

export default function RootLayout({ children }: { children: React.ReactNode }): React.JSX.Element {
  return (
    <html suppressHydrationWarning>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
