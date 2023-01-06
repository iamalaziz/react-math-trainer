import { createContext, useContext, useState, useEffect } from "react";
import { getChapters } from "../firebase/firebase";


const ProblemsContext = createContext();

const ProblemsProvider = ({ children }) => {
  const [chapters, setChapters] = useState([]);
  const [loading, setLoading] = useState(true)
  const [isBurgerOpen, setIsBurgerOpen] = useState(false)
  
  const values = {setChapters, loading, isBurgerOpen, setIsBurgerOpen}
  return (
    <ProblemsContext.Provider value={values}>{children}</ProblemsContext.Provider>
  );
};
export const useProblems = () => useContext(ProblemsContext);

export default ProblemsProvider;
