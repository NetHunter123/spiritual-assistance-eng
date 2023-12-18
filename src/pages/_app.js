import '@/styles/globals.css'
import 'react-medium-image-zoom/dist/styles.css'
import Head from "next/head";
import {MantineProvider} from '@mantine/core'
import { Hotjar } from "nextjs-hotjar";


export default function App({Component, pageProps}) {
const YOUR_APP_ID = 3798247;
const YOUR_APP_SCRIPT_VERSION = 6;

  return <>
    <Head>
      <title>Page title</title>
      <meta
        name='viewport'
        content='minimum-scale=1, initial-scale=1, width=device-width'
      />
    </Head>
    <Hotjar id={YOUR_APP_ID} sv={YOUR_APP_SCRIPT_VERSION} />

    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        /** Put your mantine theme override here */
        // colorScheme: 'dark',
        colors: {
          x2: ["#222222"]
        }

        // components:{
        //   Drawer:{
        //     body:{
        //       backgroundColor:"red",
        //       color:"red"
        //     },
        //
        //     closeButton:{
        //       backgroundColor:"red",
        //       color:"red"
        //     },
        //     header: { color: 'red' },
        //
        //     backgroundColor:"#222222"
        //   },
        //   Button:{
        //
        //   }
        // }

      }}
    >
      <Component {...pageProps} />
    </MantineProvider>
  </>
}
