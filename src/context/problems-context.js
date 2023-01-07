import { createContext, useContext, useState } from "react";

const ProblemsContext = createContext();

const ProblemsProvider = ({ children }) => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const values = { isBurgerOpen, setIsBurgerOpen };
  return (
    <ProblemsContext.Provider value={values}>
      {children}
    </ProblemsContext.Provider>
  );
};
export const useProblems = () => useContext(ProblemsContext);

export default ProblemsProvider;
