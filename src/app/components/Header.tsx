import Image from 'next/image'

const Header = () => {
    return (
        <header className="container flex justify-between items-center p-5 bg-slate-500">
            <Image src={"/logo.png"} alt='Logo' width={50}height={50} />
            
            <div>
                <button className='px-4 py-2 bg-black text-white font-medium rounded-lg'>Login</button>
            </div>
        </header>
    )
}
 
export default Header;