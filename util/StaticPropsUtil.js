export default class StaticPropsUtil {
    static fetchSiteSettings() {
        return {
            logo: '/logo.png',
            logoAlt: 'Tyylisivu',
            logoHeight: 75,
            logoWidth: 125,
            menuItems: [
                {
                    title: 'Etusivu',
                    href: '/',
                },
                {
                    title: 'Blogi',
                    href: '/blog',
                },
            ],
        };
    }
}
