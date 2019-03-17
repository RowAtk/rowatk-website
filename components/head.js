import Head from 'next/head'

const banner ={    
    height: "100px",
    display: "block"
}

export default () => (
    <div>
        <Head>
            <title>Row Atk</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        
        <style jsx global>{`
            html{
                // background: url('/static/logo/linkedin_banner_image_1.png') no-repeat center center fixed; 
            }
            body{
                padding: 0;
                margin: 0;
                font: 15px Georgia, serif;
                background: rgba(232, 194, 234, 0.3);
                // overflow: hidden;
            }

            *{
                padding: 0px;
                scrollbarWidth: none;
            }
        `}</style>
    </div>

)
