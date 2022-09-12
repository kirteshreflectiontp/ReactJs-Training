import Inputprops from '../(30082022)/inputprops';
import './header.css';

const Header = () => {

    return (
<>
<div className="parent_header">
    <div>
        <span className='logo'>LoGo</span>
        <span><Inputprops className='search_input' type="text" placeholder="Search Users by Name" /><i class="fa-solid fa-magnifying-glass search_icon"></i></span>
    </div>
    <span ><i class="fa-light fa-video-plus"></i></span>
    <div className='header_clicks'>
        <div><button className='header_button'>UPLOAD VIDEO</button></div>
        <div><button className='dots_button'><span><i class="fa-regular fa-ellipsis-vertical"></i></span></button></div>
    </div>
</div>
</>
    )
}
export default Header;