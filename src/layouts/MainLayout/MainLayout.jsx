import { Outlet } from 'react-router';
import NavSidebar from '@components/NavSidebar/NavSidebar.jsx';
import Button from '@components/Button/Button.jsx';
import { useLanguage } from '@i18n/LanguageContext.jsx';
import styles from './MainLayout.module.css';

/**
 * Shared layout for top-level pages (Home, About, Works, Contact, Articles).
 * Renders the left nav sidebar and the right language toggle once.
 * Page content is injected via <Outlet/>.
 */
export default function MainLayout() {
    const { toggleLang, t } = useLanguage();
    return (
        <div className={styles.layoutRoot}>
            <div className={styles.shell}>
                <NavSidebar/>
                <Outlet/>
                <Button type='action' onClick={toggleLang}
                        linkText={t('lang.switch')} color='red'/>
            </div>
        </div>
    );
}
