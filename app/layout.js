import "./globals.css";

export const metadata = {
    title: "API Rick and Morty",
};

export default function RootLayout({ children }) {
    return (
        <html>
            <head>
                <link rel="icon" href="./icons8-rick-sanchez-48.png" />
            </head>
            <body>{children}</body>
        </html>
    );
}