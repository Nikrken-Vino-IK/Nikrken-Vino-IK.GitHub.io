import './globals.css';

export const metadata = {
  title: 'Vino-IK | JS CLI Module',
  description: 'A JavaScript-based CLI Module',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
