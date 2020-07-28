import React, { ReactNode } from 'react'
import Head from 'next/head'
import HeaderAppBar from './HeaderAppBar'


type Props = {
  children?: ReactNode
  title?: string
}



const Layout = ({ children, title = "Home" }: Props) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <HeaderAppBar></HeaderAppBar>
      </header>
      {children}
      <footer>
        <hr />
        <span>I'm here to stay (Footer)</span>
      </footer>
    </div>
  );
};

export default Layout
