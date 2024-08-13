import { Link } from 'react-scroll'
import logo from '../assets/logo.png'

function Header(){

    const navItems = [
        {
            link: "Overview",
            path: "#"
        },
        {
            link:"Features",
            path:"#"
        }
    ]

    return(
        <header className="w-full bg-colorBg text-black">
            <nav className='py-8 lg:px-32 px-5'>
                <div className='flex items-center justify-between text-base gap-8'>
                    <a href=""><img src={logo} className='w-32' alt="" /></a>

                    <ul className='md:flex space-x-16 items-center'>
                        {
                            navItems.map(({link, path}) => <Link key={path} to={path} className='block text-base text-figmaBlack font-bold cursor-pointer'>{link}</Link>)
                        }
                    </ul>

                    {/* BUTTON */}
                    <button className='bg-figmaGreen text-white px-4 py-2 text-center duration-300 rounded'>Admin</button>
                </div>
            </nav>
        </header>
    )
}


export default Header