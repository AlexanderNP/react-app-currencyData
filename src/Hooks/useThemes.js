import { useState, useEffect } from 'react';

function useThemes(darkTheme, lightTheme) {
  const [currentTheme, setCurrentTheme] = useState(
    localStorage.getItem("theme") || lightTheme
  );
  
  useEffect(() => {
    localStorage.setItem("theme", currentTheme);
  }, [currentTheme])

  const changeTheme = () => {
    if (currentTheme === darkTheme) setCurrentTheme(lightTheme)
    else setCurrentTheme(darkTheme)
  }

  return [currentTheme, changeTheme]

}

export default useThemes;