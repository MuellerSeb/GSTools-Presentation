var Config = {
    title: "Sample Lecture",
    // put the url of the deployed application here
    url: "https://hydrocode-de.github.io/sample-lecture-python",
    navigation: [
        {
            label: "Home",
            link: "index.md",
            // every custom .md or .html added needs this type
            type: "static"
        },
        
        {
            label: "Notebooks",
            navigation: [
                {
                    label: "Overview",
                    link: "sample_lecture.html"
                },
                {
                    label: "Plots",
                    link: "interactive_plots.html"
                }
            ]
        },
        
        {
            label: "Presentations",
            navigation: [
                {
                    label: "Overview",
                    link: "sample_lecture.slides.html"
                },
                {
                    label: "Plots",
                    link: "interactive_plots.slides.html"
                }
            ]
        },
        
        // please do not remove this page
        // as it describes that you are using a hydrocode application
        {
            label: "About",
            link: "about.md",
            type: "static"
        }
    ]        
};
