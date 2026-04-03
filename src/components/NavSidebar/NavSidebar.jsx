import Sidebar from '@components/Sidebar/Sidebar.jsx';
import Button from '@components/Button/Button.jsx';
import { useLanguage } from '@i18n/LanguageContext.jsx';

const NAV_LINKS = [
    { route: '/',         labelKey: 'nav.home'     },
    { route: '/about',    labelKey: 'nav.about'    },
    { route: '/works',    labelKey: 'nav.works'    },
    { route: '/articles', labelKey: 'nav.articles' },
    { route: '/contact',  labelKey: 'nav.contact'  },
];

/**
 * Central navigation sidebar used by MainLayout.
 * To add a new nav item, add one entry to NAV_LINKS above —
 * it will appear on every top-level page automatically.
 */
export default function NavSidebar() {
    const { t } = useLanguage();
    return (
        <Sidebar>
            {NAV_LINKS.map(({ route, labelKey }) => (
                <Button key={route} route={route} linkText={t(labelKey)} color='red'/>
            ))}
        </Sidebar>
    );
}
