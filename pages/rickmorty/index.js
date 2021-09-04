import { useEffect, useState } from "react";
import { Toolbar } from "../../components/toolbar";
import { fetchPost } from "../../store/actions/postAction";
import { useSelector, useDispatch } from "react-redux";

export const Rickmorty = () => {
  const dispatch = useDispatch();
  const getData = useSelector((state) => state.postReducer);
  const [result, setResult] = useState([]);

  useEffect(() => {
    dispatch(fetchPost());
  }, []);

  useEffect(() => {
    if (getData) {
      setResult(getData.data.results);
    }
  }, [getData]);

  return (
    <div className="container mx-auto px-20">
      <Toolbar />
      <div className="my-10">
        <h1 className="text-4xl text-center font-bold text-gray-800">
          RICK AND MORTY CHARACTERS
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {result &&
          result.map((item, index) => (
            <div
              key={index}
              className="border border-gray-400 rounded flex bg-gray-700 text-gray-200"
            >
              <div>
                <img src={item.image} className="h-48" />
              </div>

              <div className="ml-5">
                <h1 className="text-2xl font-bold mb-5 ">{item.name}</h1>

                <p className="text-lg font-semibold">
                  {item.gender} - {item.species}
                </p>

                <p
                  className={
                    item.status === "Alive"
                      ? "text-green-400 font-semibold text-lg"
                      : "text-red-900 font-semibold text-lg"
                  }
                >
                  {item.status}
                </p>

                <p className="mt-5 text-base font-medium capitalize">
                  last location:
                  <br />
                  <span className="font-normal">{item.location.name}</span>
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Rickmorty;
