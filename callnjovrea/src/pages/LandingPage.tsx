import { useState } from "react";
import { BigFish, BigFishMobView, FishGroupBg, SchoolOfFish } from "../assets";
import { TopResturantsList } from "../data/resturant";
import { TestimonialList } from "../data/testimonial";
import Container from "../utils/styledComponent/Container";
import Flex from "../utils/styledComponent/Flex";
import {
  ClickableTab,
  ComponentSwiper,
  HorizontalBarChart,
  ResturantCard,
  VerticalBarChart,
  TestimonialCard,
  CustomLeafLetMap,
} from "../components";

const HeroCrouselComponent = () => (
  <Flex customStyle="max-md:flex-col max-md:pt-8per max-md:mb-[10%]">
    <aside className="lg:max-w-lg md:max-w-sm">
      <h1 className="md:w-full w-3/5 lg:text-54 md:text-46 text-26 lg:leading-86 md:leading-60 leading-39 max-md:text-center font-medium text-white uppercase max-md:mx-auto">
        Today's Exclusive Discounts!
      </h1>
      <p className="md:text-20 text-14 md:leading-36 leading-24 max-md:text-center text-white max-md:w-4/5 max-md:mx-auto max-md:mt-5">
        Discover our daily specials and indulge in the freshest catch of the day
        at unbeatable prices. Dive into a world of flavors with our limited-time
        offer of 20% off on the Fresh Fish Catch of the Day!
      </p>
    </aside>
    <BigFish />
    <img
      src={BigFishMobView}
      alt="BigFishMobView"
      className="md:hidden block"
    />
  </Flex>
);

export type dataBasedOn = "year" | "month" | "daily";

const LandingPage = () => {
  const [dataBasedOn, setDataBasedOn] = useState<dataBasedOn>("year");
  const changeDateTab = (tabName: dataBasedOn) => setDataBasedOn(tabName);
  return (
    <Container>
      {/* Hero */}
      <section className="md:pb-32 pb-5">
        <ComponentSwiper
          data={[1, 2, 3]}
          Component={HeroCrouselComponent}
          itemPerSlide={1}
        />
      </section>

      {/* Statistics */}
      <section>
        <div className="bg-barbg rounded-xl p-5 hidden md:block relative">
          {/* Chart Tabs */}
          <div className="flex items-center rounded-md bg-gradbg w-max">
            <ClickableTab
              tabTitle="year"
              activeTab={dataBasedOn}
              changeDateTab={changeDateTab}
            />
            <ClickableTab
              tabTitle="month"
              activeTab={dataBasedOn}
              changeDateTab={changeDateTab}
            />
            <ClickableTab
              tabTitle="daily"
              activeTab={dataBasedOn}
              changeDateTab={changeDateTab}
            />
          </div>
          {/* Barchart */}
          <VerticalBarChart />
        </div>
        <div className="bg-barbg rounded-xl p-5 md:hidden block max-h-[1000px] pb-20">
          {/* Chart Tabs */}
          <div className="flex items-center mx-auto rounded-md bg-gradbg w-max">
            <ClickableTab
              tabTitle="year"
              activeTab={dataBasedOn}
              changeDateTab={changeDateTab}
            />
            <ClickableTab
              tabTitle="month"
              activeTab={dataBasedOn}
              changeDateTab={changeDateTab}
            />
            <ClickableTab
              tabTitle="daily"
              activeTab={dataBasedOn}
              changeDateTab={changeDateTab}
            />
          </div>
          <HorizontalBarChart />
        </div>
      </section>

      {/* Top Resturants Cards */}
      <section className="md:py-10 md:mt-36 mt-20">
        <h1 className="text-center text-white md:text-46 text-26 md:leading-53 leading-32 font-medium uppercase">
          Top 5 Restaurants
        </h1>
        <p className="text-center text-white md:text-18 text-14 md:leading-34 leading-28 mt-5 max-w-xl mx-auto">
          Indulge your taste buds with a delightful culinary journey at these
          highly recommended seafood restaurants.
        </p>

        {/* Resturants List :Desktop View Only */}
        <div className="md:grid grid-cols-1 grid-rows-2 md:grid-cols-2 xl:grid-cols-3 relative gap-5 mt-10 hidden">
          <img
            src={FishGroupBg}
            alt="FishGroupBg"
            className="absolute top-8 -right-[13%] max-md:hidden"
          />
          {TopResturantsList.map((data) => (
            <ResturantCard {...data} key={data.id} />
          ))}
        </div>

        {/* Resturants List :Mobile View Only */}
        <div className="md:hidden block w-full max-w-md sm:max-w-xs mx-auto">
          <ComponentSwiper
            data={TopResturantsList}
            Component={ResturantCard}
            itemPerSlide={1}
            spacer
          />
        </div>
      </section>

      {/* Testinmonial */}
      <section className="md:mt-36 mt-5 relative">
        <img
          src={SchoolOfFish}
          alt="FishGroupBg"
          className="absolute -top-[50%] -left-[10%] max-md:hidden"
        />
        <h1 className="text-center text-white md:text-46 text-26 md:leading-53 leading-32  font-medium uppercase">
          Testimonials
        </h1>
        <p className="text-center text-white md:text-18 text-14 md:leading-34 leading-28 mt-5 md:max-w-xl w-full mx-auto">
          Indulge your taste buds with a delightful culinary journey at these
          highly
        </p>
        <div className="hidden md:block">
          <ComponentSwiper
            data={TestimonialList}
            Component={TestimonialCard}
            itemPerSlide={2}
            spacer
          />
        </div>
        <div className="md:hidden block w-full">
          <ComponentSwiper
            data={TestimonialList}
            Component={TestimonialCard}
            itemPerSlide={1}
            spacer
          />
        </div>
      </section>

      {/* Google Map Section */}
      <section className="md:h-[800px] h-120 md:pt-8per">
        <CustomLeafLetMap />
      </section>
    </Container>
  );
};

export default LandingPage;
