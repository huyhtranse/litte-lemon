import { createContext, useContext, useState, useEffect } from "react";

const FormContext = createContext(undefined);

export const FormProvider = ({ children }) => {
  const [availableTimes, setAvailableTimes] = useState([]);

  useEffect(() => {
    setAvailableTimes(fetchAPI(new Date()));
    // eslint-disable-next-line
  }, []);

  const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
  }

  const fetchAPI = function(date) {
      let result = [];
      let random = seededRandom(date.getDate());

      for(let i = 17; i <= 23; i++) {
          if(random() < 0.5) {
              result.push(i + ':00');
          }
          if(random() < 0.5) {
              result.push(i + ':30');
          }
      }
      return result;
  };

  return (
    <FormContext.Provider value={{ availableTimes }}>
      {children}
    </FormContext.Provider>
  );
};

export const useForm = () => useContext(FormContext);
