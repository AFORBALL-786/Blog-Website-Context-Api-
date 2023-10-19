import  { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Pagination = () => {
    const {page,handlePageChange,totalPage} = useContext(AppContext);
  return (
    <footer className='w-full flex justify-center items-center border-2 fixed bottom-0 bg-white'>
        <div className='w-[45%] flex justify-between items-center py-2'>
            <div className='flex gap-x-2'>
                {page > 1 &&
                <button
                    className='rounded-md border px-4 py-1'
                    onClick={() => {handlePageChange(page-1)}}>
                    Previous
                </button>
            }

                {page < totalPage &&
                    <button
                        className='rounded-md border px-4 py-1'
                        onClick={() => {handlePageChange(page+1)}}>
                        Next
                    </button>
                }
            </div>

            <p className='font-bold text-sm'>
                Page {page} of {totalPage}
            </p>
        </div>
    </footer>
  )
}

export default Pagination
