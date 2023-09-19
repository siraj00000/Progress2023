type Props = {};

const InfoTabs = (props: Props) => {
  return (
    <article>
      <aside className="grid grid-cols-5 bg-gradbg rounded-sm text-white font-medium text-28 leading-32">
        <button className="col-span-1 h-80 px-[5%] bg-secondary uppercase">Overview</button>
        <button className="col-span-2 h-80 px-[5%] uppercase">Additional information</button>
        <button className="col-span-2 h-80 px-[5%] uppercase">Shipping and delivery</button>
      </aside>

      <aside className="bg-gradbg2 bg-opacity-20 py-10 px-8">
        <p className="text-20 text-white leading-24">
          Similar to other Fancy Guppies, the Assorted Female Guppy does best in
          an established aquarium of at least 10 gallons. Though tolerant of
          small changes, care should be taken to maintain stable water
          parameters. Hardy plant varieties such as Java Fern and Java Moss are
          excellent choices for creating a lush, planted aquarium housing the
          Assorted Female Guppy. Though best displayed in a biotope or colony
          aquarium, the Assorted Female Guppy is a very peaceful fish that does
          well in freshwater community aquariums housing tankmates of similar
          temperament. <br /> <br /> The Assorted Female Guppy is an omnivore and requires
          both algae-based foods as well as meaty foods. An algae-based flake
          food, along with freeze-dried bloodworms, tubifex, and brine shrimp
          will provide guppies with the proper nutrition. Approximate Purchase
          Size: 3/4" to 1"
        </p>
      </aside>
    </article>
  );
};

export default InfoTabs;
