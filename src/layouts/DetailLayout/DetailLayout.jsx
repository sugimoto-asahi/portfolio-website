import { Outlet, useMatches } from 'react-router';
import ArrowButton from '@components/ArrowButton/ArrowButton.jsx';
import Button from '@components/Button/Button.jsx';
import { useLanguage } from '@i18n/LanguageContext.jsx';
import styles from './DetailLayout.module.css';

/**
 * Shared layout for project / article detail pages.
 * Renders a back ArrowButton (left) and language toggle (right) once.
 * The back route is set declaratively per-route via React Router's handle:
 *   <Route handle={{ backRoute: '/works' }} element={<Njin/>}/>
 * Page content is injected via <Outlet/>.
 */
export default function DetailLayout() {
    const { toggleLang, t } = useLanguage();
    const matches = useMatches();
    const backRoute = matches.at(-1)?.handle?.backRoute ?? '/';

    return (
        <div className={styles.shell}>
            <ArrowButton route={backRoute} direction='left'
                         className={styles.arrowButton}/>
            <Outlet/>
            <Button type='action' onClick={toggleLang}
                    linkText={t('lang.switch')} color='red'/>
        </div>
    );
}
