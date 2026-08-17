import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL="media/kite.png"
        productName="Kite"
        ProductDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        Trydemo=""
        learnMore=""
        googleplay=""
        appStore=""
      />
      <RightSection
        imageURL="media/console.png"
        productName="Console"
        ProductDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        Trydemo=""
        className="mt-5 pt-5"
      />
      <LeftSection
        imageURL="media/coin.png"
        productName="Coin"
        ProductDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        Trydemo=""
        learnMore=""
        googleplay=""
        appStore=""
      />
      <RightSection
        imageURL="media/kiteconnect.svg"
        productName="Kite Connect API"
        ProductDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        Trydemo=""
      />
      <LeftSection
        imageURL="media/varsity.svg"
        productName="Varsity mobile"
        ProductDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        Trydemo=""
        learnMore=""
        googleplay=""
        appStore=""
      />

      <p className="text-center fs-5 mt-5 pt-5">
        Want to know more about our technology stack? Check out the Zerodha.tech
        blog.
      </p>
      <Universe />
    </>
  );
}
export default ProductPage;
