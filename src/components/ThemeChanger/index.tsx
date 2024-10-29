import { useTheme } from '../../contexts/ThemeContext';
import sunIcon from '../../assets/images/icon-sun.svg';
import moonIcon from '../../assets/images/icon-moon.svg';

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();
  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} >
        {theme === 'light' ? <img src={sunIcon} alt="sun" /> : <img src={moonIcon} alt="moon" />}
    </button>
  )
}

export default ThemeChanger