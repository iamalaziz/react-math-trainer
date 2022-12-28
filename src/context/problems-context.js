import { createContext, useContext, useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const ProblemsContext = createContext();

const ProblemsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    const chaptersFromFirebase = [];
    const querySnapshot = await getDocs(collection(db, "chapters"));
    querySnapshot.forEach((doc) => {
      chaptersFromFirebase.push({ ...doc.data(), key: doc.id });
      setData(chaptersFromFirebase)
      setTimeout(() => {
        setLoading(false)
      }, 1000)
    });
  };

  useEffect(() => {
    fetchData();
  }, []);
  
  const values = {data, loading}
  return (
    <ProblemsContext.Provider value={values}>{children}</ProblemsContext.Provider>
  );
};
export const useProblems = () => useContext(ProblemsContext);

export default ProblemsProvider;
