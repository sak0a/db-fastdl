module.exports = {
    theme: {
        extend: {
            keyframes: {
                fadescale: {
                    "0%": {
                        opacity: "0%",
                        transform: "scale(0%)",
                    },
                    "80%": {
                        transform: "scale(105%)",
                        opacity: "80%",
                    },
                    "100%": {
                        transform: "scale(100%)",
                        opacity: "100%",
                    },
                },
            },
            animation: {
                fadescale: "fadescale .38s ease-in-out",
            },
        }
    }
};