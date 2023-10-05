import logo from '../assets/ethereum-eth-logo.svg'

export default function Home() {
    return (
        <div className="organization">
           <h1>Trazabilidad</h1>
           <p>Home</p>
           <img src={logo} alt="Company Logo" className="home-logo" />
        </div>
    )
}