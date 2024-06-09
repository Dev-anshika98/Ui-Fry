import './globals.css';
// import Navbar from '../components/Navbar';

export const metadata = {
  title: 'uiFry',
  description: 'Your app description here',
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body>
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
