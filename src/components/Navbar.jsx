import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar">
            <h3>*Logo*</h3>

            <Link
                className='Link'
                to='/'>
                <h3>Home</h3>
            </Link>

            <h3>About</h3>

            <Link
                className='Link'
                to='/learn'>
                <h3>Learning</h3>
            </Link>

        </div>
    )
}

export default Navbar;

<Link
    className='Link' to='/about'>
    <a>About</a>
</Link>