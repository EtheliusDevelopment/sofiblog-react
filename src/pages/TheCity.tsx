import CityLoop from "../components/City/CityLoop";

const TheCity = () => {
  return (
    <>
      <div className="first-block div-block">
        <h1 className="h1-title-block">Milan, my home.</h1>
        <p className="p-par-block">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
          harum, expedita magnam amet reprehenderit cum id modi sunt tempore
          nisi distinctio adipisci laboriosam iste exercitationem fugiat alias
          doloremque cupiditate quidem?
        </p>
      </div>

      <div className="second-block div-block">
        <h1 className="h1-title-block">Italian Urban Livings</h1>
        <CityLoop />
      </div>

      <div className="third-block div-block">
        <h1 className="h1-title-block">WorldWideCities</h1>
        <p className="p-par-block">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
          harum, expedita magnam amet reprehenderit cum id modi sunt tempore
          nisi distinctio adipisci laboriosam iste exercitationem fugiat alias
          doloremque cupiditate quidem?
        </p>
      </div>
    </>
  );
};

export default TheCity;
