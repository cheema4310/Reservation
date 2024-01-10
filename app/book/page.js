import fs from "fs/promises";
import path from "path";
import Staff from "@components/bookingPage/Staff";
import MainPage from "@components/bookingPage/MainPage";

async function getData() {
  const filePath = path.join(process.cwd(), "data", "appData.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  return data.services;
}

const BookingPage = async () => {
  const services = await getData();

  return (
    <>
      <MainPage services={services} />
    </>
  );
};

export default BookingPage;
