import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";


export const Theme = () => {
    const [theme, setTheme] = useState<boolean>(true);
    const changeTheme = () => {      
      setTheme(!theme)
      let style = theme ? 'light' : 'dark';
      document.body.setAttribute('data-theme', style);
    };

    return (
      <>
        <FontAwesomeIcon icon={faCircleHalfStroke} onClick={changeTheme}/>
      </>
    );
  }