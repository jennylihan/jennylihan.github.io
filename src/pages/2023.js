const isBrowser = () => typeof window !== "undefined"
isBrowser() && window.location.replace(res.data)
//https://stackoverflow.com/questions/64371186/gatsby-window-not-available-during-server-side-rendering-build-error