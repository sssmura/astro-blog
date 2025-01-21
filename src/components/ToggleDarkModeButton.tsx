import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

export const ToggleDarkModeButton = () => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.classList.toggle('dark', savedTheme === 'dark');
        } else {
            document.documentElement.classList.add('light');
        }
    }, []);

    const handleClick = () => {
        if (theme === 'dark') {
            setTheme('light');
            document.documentElement.classList.remove('dark');
            document.documentElement.classList.add('light');
            localStorage.setItem('theme', 'light');
        } else {
            setTheme('dark');
            document.documentElement.classList.remove('light');
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
    };

    return (
        <button onClick={handleClick} className="toggle-dark-mode-button p-2 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
            <FaSun className={`text-yellow-500 ${theme === 'dark' ? 'block' : 'hidden'}`} />
            <FaMoon className={`text-gray-500 ${theme === 'dark' ? 'hidden' : 'block'}`} />
            <span className={`ml-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                {theme === 'dark' ? 'ライトモード' : 'ダークモード'}
            </span>
        </button>
    );
}


