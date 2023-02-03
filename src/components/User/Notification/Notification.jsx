import { Link } from "react-router-dom"

const NotificationCard = () => {
 
    return (
        <>
            <div className="m-4 bg-white ">
                <div className="flex items-center gap-3 bottom-b border-b-heavy-metal-600 p-4">
                    <Link to={'/profile'}>
                        <div className='w-12 rounded-full overflow-hidden shadow-sm shadow-gray-500 cursor-pointer'>
                            <img src="https://i.pinimg.com/originals/31/44/7e/31447e25b7bc3429f83520350ed13c15.jpg" alt="avatars" />
                        </div>
                    </Link>
                    <div>
                        <Link to={'/profile'} className="font-bold hover:underline cursor-pointer">Christopher</Link> Liked <Link to={'/myprofile'} className="text-blue-500 hover:underline cursor-pointer"> Your Post </Link>
                    </div>

                </div>
                <div className="flex items-center gap-3 bottom-b border-b-heavy-metal-600 p-4">
                    <Link to={'/profile'}>
                        <div className='w-12 rounded-full overflow-hidden shadow-sm shadow-gray-500 cursor-pointer'>
                            <img src="https://i.pinimg.com/originals/31/44/7e/31447e25b7bc3429f83520350ed13c15.jpg" alt="avatars" />
                        </div>
                    </Link>
                    <div>
                        <Link to={'/profile'} className="font-bold hover:underline cursor-pointer">Christopher</Link> Liked <Link to={'/myprofile'} className="text-blue-500 hover:underline cursor-pointer"> Your Post </Link>
                    </div>

                </div>
                <div className="flex items-center gap-3 bottom-b border-b-heavy-metal-600 p-4">
                    <Link to={'/profile'}>
                        <div className='w-12 rounded-full overflow-hidden shadow-sm shadow-gray-500 cursor-pointer'>
                            <img src="https://i.pinimg.com/originals/31/44/7e/31447e25b7bc3429f83520350ed13c15.jpg" alt="avatars" />
                        </div>
                    </Link>
                    <div>
                        <Link to={'/profile'} className="font-bold hover:underline cursor-pointer">Christopher</Link> Liked <Link to={'/myprofile'} className="text-blue-500 hover:underline cursor-pointer"> Your Post </Link>
                    </div>

                </div>
                <div className="flex items-center gap-3 bottom-b border-b-heavy-metal-600 p-4">
                    <Link to={'/profile'}>
                        <div className='w-12 rounded-full overflow-hidden shadow-sm shadow-gray-500 cursor-pointer'>
                            <img src="https://i.pinimg.com/originals/31/44/7e/31447e25b7bc3429f83520350ed13c15.jpg" alt="avatars" />
                        </div>
                    </Link>
                    <div>
                        <Link to={'/profile'} className="font-bold hover:underline cursor-pointer">Christopher</Link> Liked <Link to={'/myprofile'} className="text-blue-500 hover:underline cursor-pointer"> Your Post </Link>
                    </div>

                </div>
                <div className="flex items-center gap-3 bottom-b border-b-heavy-metal-600 p-4">
                    <Link to={'/profile'}>
                        <div className='w-12 rounded-full overflow-hidden shadow-sm shadow-gray-500 cursor-pointer'>
                            <img src="https://i.pinimg.com/originals/31/44/7e/31447e25b7bc3429f83520350ed13c15.jpg" alt="avatars" />
                        </div>
                    </Link>
                    <div>
                        <Link to={'/profile'} className="font-bold hover:underline cursor-pointer">Christopher</Link> Liked <Link to={'/myprofile'} className="text-blue-500 hover:underline cursor-pointer"> Your Post </Link>
                    </div>

                </div>
               
            </div>
        </>
    )
}

export default NotificationCard