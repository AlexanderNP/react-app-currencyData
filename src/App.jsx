import stylesApp from './App.module.css'
import stylesTheme from './theme.module.css'
import useThemes from './Hooks/useThemes'
import { useInput } from './Hooks/useInput'
import { useFetch } from './Hooks/useFetch'
import { ThemesButton } from './Components/UI/ThemesButton'
import { CurrencyInput } from './Components/CurrencyInput';
import { CurrencySelect } from './Components/CurrencySelect';


function App() {

  const [theme, changeTheme] = useThemes(stylesTheme.darkTheme, stylesTheme.lightTheme);
  const [money, setMoney] = useInput('');
  const [error, loading, data] = useFetch();

  if (error) return <h1>Ошибка</h1>

  return (
    <div className={`${stylesApp.AppContainer} ${theme}`}>

      <CurrencyInput money={money} handler={setMoney} />

      {loading ? <p className={stylesApp.loading}>...Загрузка</p>
        : <CurrencySelect
          currencyList={data.rates}
          money={money}
        />}

      <ThemesButton changeTheme={changeTheme} />

    </div>
  )
}

export default App
