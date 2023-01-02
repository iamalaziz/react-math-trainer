import { createContext, useContext, useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const ProblemsContext = createContext();

const ProblemsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)
  const [isBurgerOpen, setIsBurgerOpen] = useState(false)
  const fetchData = async () => {
    const chaptersFromFirebase = [];
    const querySnapshot = await getDocs(collection(db, "chapters"));
    querySnapshot.forEach((doc) => {
      chaptersFromFirebase.push({ ...doc.data(), key: doc.id });
      setData(chaptersFromFirebase)
      setLoading(false)

    });
  };

  useEffect(() => {
    fetchData();
  }, []);
  
  const values = {data, loading, isBurgerOpen, setIsBurgerOpen}
  return (
    <ProblemsContext.Provider value={values}>{children}</ProblemsContext.Provider>
  );
};
export const useProblems = () => useContext(ProblemsContext);

export default ProblemsProvider;
