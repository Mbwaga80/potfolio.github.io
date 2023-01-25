import React from "react";
import '../styles/globals.css';
import Header from "./Header";

export default function Layout({children }:{children:React.ReactNode}) {
    return (
      <html lang="en">
        <head>
          <title>Next.js</title>
        </head>
        <body>
          <Header/>
          {children}
        </body>
      </html>)
  }