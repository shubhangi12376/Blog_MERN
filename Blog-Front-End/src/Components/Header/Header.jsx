import './Header.css'


const Header = () => {
    return(
        <div className="header">
            <div className='headerTitles'> 
                <span className='headerTitlelg'>BLOG</span>
            </div>
            <img className='headerImg' src='./images/headerImage.jpg' alt='' />
        </div>
    )
}

export default Header;