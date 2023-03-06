import { useEffect, useState, createContext, useContext } from "react";

export const AppContext = createContext();

export const AppContextPage = ({ children }) => {
  //Pupil's/students's information

  const [name, setName] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("name");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(name));
  }, [name, passcode, classRoom]);

  const [none, setNone] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("none");
    const initialValue = JSON.parse(saved);
    return initialValue || "block";
  });

  const [block, setBlock] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("block");
    const initialValue = JSON.parse(saved);
    return initialValue || "none";
  });

  useEffect(() => {
    localStorage.setItem("none", JSON.stringify(none));
    localStorage.setItem("block", JSON.stringify(block));
  }, [none, block]);


  // save image to local storage
  const [url, setUrl] =useState('');
  const uploader = (file) =>{
    const reader = new FileReader();
    reader.addEventListener('load', ()=>{
      localStorage.setItem('recent-image',reader.result)
      setUrl(localStorage.getItem('recent-image'));
  })
  reader.readAsDataURL(file);
  }


  return (
    <>
      <AppContext.Provider
        value={{
          name,
          setName,
          none,
          setNone,
          block,
          setBlock,
          url, 
          setUrl,
          uploader,
        }}
      >
        {children}
      </AppContext.Provider>
    </>
  );
};

export const AppPass = () => {
  return useContext(AppContext);
};
