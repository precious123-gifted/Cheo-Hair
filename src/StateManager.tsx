"use client"

import { createContext, useContext, useState,ReactNode, ReactHTMLElement, useRef } from 'react';



interface GroupProps {
    onClick?: React.MouseEventHandler<HTMLDivElement>; 
    // Optional click handler
    scale?: number; // Optional scale
    position?: number[]; // Optional position
    // ... other props your group component accepts
  }

interface Refs {
  hairProductRef: React.RefObject<HTMLDivElement> | null; // Specify element type
 

}


interface Item {
  id: string;
  product: any; // Replace 'any' with the actual type of your product data
}






type StateContextType = {
  items: Item[]; // Array to store items with IDs and products
  setItems: (items: Item[]) => void;
  color: string;
  setColor: (color: string) => void;
};



const RefsContext = createContext<Refs>({
    hairProductRef: null,
    
   
   
  });
const StateContext = createContext<StateContextType | undefined>(undefined);







export const RefsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
        
    const hairProductRef = useRef(null);
   
  
  
  
    const value = {
     
        hairProductRef,
     
      
    };
  
    return <RefsContext.Provider value={value}>{children}</RefsContext.Provider>;
  };

export const StateProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<Item[]>([]);
  const [color, setColor] = useState('#DCFFFE');
  
  return <StateContext.Provider value={{ color, setColor ,items,setItems}}>{children}</StateContext.Provider>;
};




export const useRefsContext = (): Refs  => {
  const refsContext = useContext(RefsContext) as Refs;
 

  if (!refsContext) {
    throw new Error('Color context is not provided');
  }
  return refsContext;


};

export const useStateContext = (): StateContextType  => {
  const stateContext = useContext(StateContext) as StateContextType;
 

  if (!stateContext) {
    throw new Error('State context is not provided');
  }
  return stateContext;


};

export const useDataCarrier = (initialData = []) => {
  const [data, setData] = useState(initialData);

  const updateData = (newData:any) => {
    setData(newData);
  };

  return { data, updateData };
};



