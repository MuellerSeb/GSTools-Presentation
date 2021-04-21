var Config = {
    title: "GSTools Presentation",
    // put the url of the deployed application here
    url: "https://muellerseb.github.io/GSTools-Presentation",
    navigation: [
        {
            label: "Home",
            link: "index.md",
            // every custom .md or .html added needs this type
            type: "static"
        },
        
        {
            label: "Presentations",
            navigation: [
                {
                    label: "Transform 2021",
                    link: "Transform2021.slides.html"
                },
                {
                    label: "EGU 2020",
                    link: "EGU2020.slides.html"
                }
            ]
        }
    ]        
};
