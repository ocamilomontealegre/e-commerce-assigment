import Banner from "./Banner.jsx";
import FeatureProduct from "./FeatureProduct.jsx";
import ScrollToTopOnMount from "../template/ScrollToTopOnMount";

function Landing() {
  return (
    <>
      <ScrollToTopOnMount />
      <Banner />
      <div className="d-flex flex-column bg-white py-4">
        <p className="text-center px-5">
          You can wear anything as long as you put a nice pair of shoes with it
        </p>
      </div>
      <h2 className="text-muted text-center mt-4 mb-3">Super Top Shoes</h2>
      <FeatureProduct />
    </>
  );
}

export default Landing;
