import HomeLeftSide from "./HomeLeftSide";
import HomeRightSide from "./HomeRightSide";

const HomeWrapper = () => {
  return (
    <>
      <div className="row home">
        <HomeLeftSide />
        <HomeRightSide />
      </div>
    </>
  );
};

export default HomeWrapper;
