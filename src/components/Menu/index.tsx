import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';
import { useEffect, useState } from 'react';

type AvailableThemes = 'dark' | 'light';

export function Menu() {

    const [theme, setTheme] = useState<AvailableThemes>('dark');

    function handleThemeChange(
        event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    ) {
        event.preventDefault(); // Não segue o link

        setTheme(prevTheme => {
            const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
            return nextTheme;
        });
    }

    // useEffect(() => {
    //     console.log('useEffect sem dependências', Date.now());
    // }); // Executado toda vez que o componente renderiza na tela

    // useEffect(() => {
    //     console.log('useEffect com array dependencias vazio', Date.now());
    // }, []); // Executa apenas quando o React monta o componente na tela pela primeira vez

    useEffect(() => {
        console.log('Theme mudou', theme, Date.now());
        document.documentElement.setAttribute('data-theme', theme);

        return () => {
            console.log('Olha, este componente será atualizado'); // função de CleanUp
        };

    }, [theme]); // Executa apenas quando o valor de dependendencias (theme) muda.

    return (
    <div className={styles.menu}>
        <h1>{theme}</h1>
        <a href="" className={styles.menuLink} aria-label="Ir para a Home" title="Ir para a Home">
            <HouseIcon />
        </a>
        <a href="" className={styles.menuLink} aria-label="Ver Histórico" title="Ver Histórico">
            <HistoryIcon />
        </a>
        <a href="" className={styles.menuLink} aria-label="Configurações" title="Configurações">
            <SettingsIcon />
        </a>
        <a href="" className={styles.menuLink} aria-label="Mudar Tema" title="Mudar Tema" onClick={handleThemeChange}>
            <SunIcon />
        </a>
    </div>
    );
}