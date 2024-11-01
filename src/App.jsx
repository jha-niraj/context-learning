import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import ProfilePage from './components/Profile'
import { ThemeProvider } from './contextsecond/themeContext'

function App() {
	const [ themeMode, setThemeMode ] = useState("light");

	const lightTheme = () => {
		setThemeMode("light");
	}
	const darkTheme = () => {
		setThemeMode("dark");
	}

	// actual change in theme:
	useEffect(() => {
		document.querySelector("html").classList.remove("dark", "light");
		document.querySelector("html").classList.remove(themeMode);
	}, [themeMode])

	return (
		<ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
			<div>
				Learning Context from Hitesh Chaudhary
				<Login />
				<ProfilePage />
			</div>
			<div>
				Theme Switcher
			</div>
		</ThemeProvider>
	)
}

export default App
