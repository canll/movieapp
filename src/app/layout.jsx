import "./globals.css";
import Header from "../component/Header";
import Providers from "./providers";
import Tabs from "<can>/component/Tabs";
export const metadata = {
  title: "Movie_App",
  description: "...",
};
const layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          <Tabs />
          {children}
        </Providers>
      </body>
    </html>
  );
};

export default layout;
