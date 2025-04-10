export const metadata = {
  title: "Rick And Morty APP",
  description:"Meu primeiro consumo de api gratis"
};
export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
);
}