/**
 * Nav bar section of webpage
 */

 import Head from "../components/head"

const Navbar = () => (
    <div>
        <Head />
        
        <div style={navStyle}>
            <p>Rowan E Atkinson</p>
        </div>
    </div>
)

// Style 
const navStyle = {
    color: 'rgb(255,255,255)',
    position: 'fixed',
    top: '0',
    width: '100%',
    background: 'rgba(102, 38, 147, 0.85)',
    borderBottom: '2px outset rgba(102, 38, 147, 0.5)',
    padding: '5px',
    display: 'block',
    overflow: 'hidden'
}

const banner = {
    height: '100px'
}

export default Navbar