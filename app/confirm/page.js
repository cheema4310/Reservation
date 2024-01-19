import GuestInfoForm from "@components/guestInfo/GuestInfoForm";

const Confirm = () => {
  return (
    <div className="w-full">
      <div className="h-screen relative">
        <div className="h-[50vh]"></div>
        <div className="h-[50vh] bg-confirm-page-image bg-bottom"></div>

        <div className="py-10 px-6 rounded-lg bg-darkGreyPlus absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5/6 md:w-1/3 lg:w-1/3">
          <h2 className="text-lightGrey text-4xl font-nav font-bold text-center pb-6">
            Guest Info
          </h2>
          <GuestInfoForm />
        </div>
      </div>
    </div>
  );
};

export default Confirm;
