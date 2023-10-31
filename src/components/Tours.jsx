import Card from "./Card.";
import data from "../data";

function Tours({ tours, removeTour }) {
  return (
    <>
      {/* <div className="w-[60%] sm:w-11/12 flex flex-col mx-auto items-center justify-center">
        <div>
          <h1 className="text-center text-4xl mb-[2rem] font-extrabold text-blue-400">
            Travel Plan
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-[1080px] mx-auto gap-[2rem] sm:gap-0">
          {tours.map((tour) => {
            return (
              <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
            );
          })}
        </div>
      </div> */}


<div className="w-[80%] sm:w-11/12 lg:w-10/12  mx-auto flex flex-col items-center justify-center">
  <div>
    <h1 className="text-center text-4xl mb-6 sm:mb-8 font-extrabold text-blue-400">
      Travel Plan
    </h1>
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-[4rem] sm:gap-8 w-full max-w-screen-xl mx-auto">
  {tours.map((tour) => {
            return (
              <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
            );
          })}
  </div>
</div>

      
    </>
  );
}
export default Tours;
