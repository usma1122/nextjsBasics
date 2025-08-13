
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header style={{
          backgroundColor : "lightblue",
          padding : "1rem"
        }}>
          <p>Header</p>
        </header>
        {children}
        <footer style={{
          backgroundColor : "lightblue",
          padding : "1rem"
        }}>
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}
