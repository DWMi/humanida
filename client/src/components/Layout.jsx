import ContentContainer from "./ContentContainer";
import Footer from "./footer";
import Header from "./Header";

const Layout = () => {
  return (
    <div
      className="container"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Header />
      <ContentContainer />
      <Footer />
    </div>
  );
};

export default Layout;
