module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            fontFamily: {
                body: ["Nunito"]
            },
            colors: {
                primary: "#F28500",
                secondary: {
                    100: "#E2E2D5",
                    200: "#888883"
                }
            },
            
        }
    },
    plugins: [],
    important: true,
};