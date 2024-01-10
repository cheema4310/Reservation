import RateBox from "./RateBox";

const RateList = ({ services, onChangeSlide }) => {
  return (
    <div className="w-11/12 mx-auto flex flex-col space-y-6 m-12 md:w-2/3 lg:w-1/2">
      {services.map((s, i) => (
        <RateBox
          key={i}
          title={s.serviceTitle}
          types={s.serviceTypes}
          onChangeSlide={onChangeSlide}
        />
      ))}
    </div>
  );
};

export default RateList;
