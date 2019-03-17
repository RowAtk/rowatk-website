import Head from '../components/head'
import Navbar from '../components/nav'
import About from '../components/about'
import Banner from '../components/banner'

const Index = () => (
    <div id="mcontainer">
        <Head />
        {/* <Navbar /> */}
        <Banner />
        <div></div>
        {/* <About /> */}

        <style jsx>{`
            body{
                overflow: hidden;
                margin-top: 40px;
            }

            #mcontainer{
                overflow: hidden;
            }
        `}</style>
    </div>
    
) 

const IndexStyle = {

}
  
export default Index