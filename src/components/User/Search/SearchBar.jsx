import { DebounceInput } from 'react-debounce-input';

const SearchBar = ({ setSearchInput }) => {
    const handleInputChange = (e) => {
        setSearchInput(e.target.value)
    }

    return (
        <div>
                <div className='flex gap-2 m-5'>
                    <div className='bg-white px-2 py-2 w-full border rounded-l-xl h-12 flex gap-2 '>
                        <span className='text-heavy-metal-900 px-2 h-full '>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                        </span>
                        <DebounceInput
                        placeholder={'Enter username...'}
                            className=" w-full border-heavy-metal-900 opacity-50 px-4 border-b-2 border-l-2 outline-none"
                            minLength={2}
                            debounceTimeout={1000}
                            onChange={handleInputChange} />
                    </div>
                </div>
        </div>
    )
}

export default SearchBar