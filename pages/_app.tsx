import '../styles/global.css'

interface Argment {
    Component: any,
    pageProps: any
}

export default function App({ Component, pageProps }: Argment) {
    return <Component {...pageProps} />;
}
