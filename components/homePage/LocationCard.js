const LocationCard = () => {
  return (
    <div className="w-full p-2 py-8 md:p-12">
      <div className="flex flex-col justify-center items-center p-10 w-11/12 mx-auto bg-lightGreyPlus rounded-xl shadow-lg md:flex-row md:space-x-3 md:w-2/3 md:p-16">
        {/* ADDRESS AREA */}

        <div className="flex flex-col items-center justify-center space-y-2 md:items-end">
          <h4 className="font-para font-black text-2xl text-darkGreyPlus md:text-3xl">
            Anu Cuts Studio
          </h4>
          <p className="font-para text-center text-darkGrey md:text-end md:text-sm">
            Bungalow No. 53,
            <br />
            Cantonment, Lahore
            <br />
            Pakistan
          </p>
          <a className="font-semibold font-para" href="tel:+92 322-593-5236">
            <p>+92 3225935236</p>
          </a>
        </div>

        <span className="h-px w-full bg-darkGrey my-3 md:hidden"></span>

        {/* BUSINESS HOURS */}

        <div className="flex flex-col justify-center items-center md:px-3 md:border-l-[1px] border-darkGrey">
          <h4 className="font-para text-2xl font-bold pb-2 md:pb-4">
            Business Hours
          </h4>
          <div className="flex justify-center items-center space-x-3 md:space-x-4 font-para p-1">
            <div className="font-extrabold md:text-sm">
              <div>MON</div>
              <div>TUE</div>
              <div>WED</div>
              <div>THU</div>
              <div>FRI</div>
              <div>SAT</div>
              <div>SUN</div>
            </div>
            <div className="text-darkGrey md:text-sm">
              <div>9:00 AM - 8:00 PM</div>
              <div>9:00 AM - 8:00 PM</div>
              <div>9:00 AM - 8:00 PM</div>
              <div>9:00 AM - 8:00 PM</div>
              <div>Closed</div>
              <div>9:00 AM - 8:00 PM</div>
              <div>9:00 AM - 8:00 PM</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;
