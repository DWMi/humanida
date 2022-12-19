import ContentContainer from "./ContentContainer";
import Footer from "./footer";
import Header from "./Header";

const Layout = () => {
  return ( 

    <>
      <Header />
    <div
      className="container"
      style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingBottom:'100px'}}
    >
      <ContentContainer />
      <Footer />
    </div>
    </>
  );
};

export default Layout;
