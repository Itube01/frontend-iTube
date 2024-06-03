export const metadata = {
  title: 'LuanGameplays',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="logo.ico" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
