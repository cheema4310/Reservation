import RateList from "@components/rateList/RateList";

const Service = ({ services, onChangeSlide }) => {
  return (
    <>
      <RateList services={services} onChangeSlide={onChangeSlide} />
    </>
  );
};

export default Service;
