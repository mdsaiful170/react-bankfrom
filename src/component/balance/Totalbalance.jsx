

function TotalbalanceSection({totalBalance}) {
  return (
    <>
        <div className='bg-transparent border rounded-md mx-auto mt-8 border-stone-300 dark:border-slate-700 max-w-md py-5 p-3 text-center '>
            <h1 className='text-xl text-gray-400'>You Balance</h1>
            <p className='text-sky-300/90 text-lg font-medium mt-2'>${totalBalance}</p>
        </div>
    </>
  )
}

export default TotalbalanceSection