import { useNavigate, useLocation } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <div className='flex items-center justify-between py-2'>
        <div className='flex gap-3'>
            <button className={`${pathname === "/" ? "font-bold underline" : ""} hover:cursor-pointer`} onClick={()=>{navigate("/")}}>Home</button>
            <button className={`${pathname === "/projects" ? "font-bold underline" : ""} hover:cursor-pointer`} onClick={()=>{navigate("/projects")}}>Projects</button>
            <button className={`${pathname === "/blogs" ? "font-bold underline" : ""} hover:cursor-pointer`} onClick={()=>{navigate("/blogs")}}>Blogs</button>
            <button className={`${pathname === "/contact" ? "font-bold underline" : ""} hover:cursor-pointer`} onClick={()=>{navigate("/contact")}}>Contact</button>
        </div>
        <div className='w-[60px] h-[60px] flex items-center'>
            <img src="/assets/icon.gif" />
        </div>
    </div>
  )
}

export default Navbar