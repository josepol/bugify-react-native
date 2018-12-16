export default {
    PLATFORM: {
        IOS: 'ios'
    },
    TAB_TITLES: {
        BUGS: 'Bugs',
        SNIPPETS: 'Snippets',
        PROFILE: 'Profile'
    },
    API: {
        ENDPOINT: process.env.NODE_ENV === 'development' ? 'http://apibuggify.polsastre.com' : 'http://apibuggify.polsastre.com'
    }
}