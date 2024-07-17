const ourStorySidebar= [{text: 'Genshin Impact', link: '/about/our-story'}]

module.exports = {
    title: 'GachaFam',
    themeConfig: {
        nav:[
            {text: 'Home', link: '/'},
            {text: 'About', link: '/about/'},
            {text: 'Contact', link: '/contact'},
        ],
        sidebar: {
            '/about/': ourStorySidebar,
            '/contact': ourStorySidebar,
        },
    }
}