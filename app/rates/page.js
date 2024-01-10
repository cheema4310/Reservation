import RateList from "@components/rateList/RateList";
import fs from "fs/promises";
import path from "path";
const getData = async () => {
  const filePath = path.join(process.cwd(), "data", "appData.json");
  const res = await fs.readFile(filePath);
  const data = JSON.parse(res);
  return data.services;
};

export default async function Rates() {
  const services = await getData();
  return (
    <>
      <div className="w-full">
        <h2 className="text-center text-4xl mt-12 p-4 font-nav font-extrabold text-darkGrey">
          Our Services
        </h2>
        <RateList services={services} />
      </div>
    </>
  );
}
