
import profile from '../../assets/team_2.png'

const Header = () => {
  return (
    <header className=' my-10'>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl font-bold cursor-pointer'>Knowledge Cafe</h1>
        <img src={profile} alt="Profile image" className='w-12 ring-2 rounded-full ring-offset-2 cursor-pointer'/>
      </div>
      <div className='divider'></div>
    </header>
  )
}


export default Header
