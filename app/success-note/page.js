const SuccessPage = ({ searchParams }) => {
  return (
    <div className="w-full h-screen py-[4rem]">
      <p className="w-5/6 mx-auto text-center font-para text-xl text-darkGreyPlus md:text-2xl md:w-3/4 lg:w-1/2">
        <span className="block text-5xl font-display capitalize py-8 md:py-12 md:text-7xl">
          hi, {searchParams.guest}
        </span>
        Thank you for reserving your spot in advance. We look forward to
        welcoming you soon and would appreciate it if you could arrive on time
      </p>
    </div>
  );
};

export default SuccessPage;
