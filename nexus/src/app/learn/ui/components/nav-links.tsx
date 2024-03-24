import Link from 'next/link';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.

export default function NavLinks() {

  return (
    

      <div>
        <div className={`
          flex flex-col mt-32 space-y-4
          justify-center
          rounded-md p-3 
          border border-gray-300
          text-lg font-medium
        `}>
          <h1>Filter</h1>
          <div className='text-sm'>
            Web Development -&gt;
            <div className=''>
              <h1>Languages</h1>
              <h1>Frameworks</h1>
            </div>
          </div>
          <div className='text-sm'>
            App Development -&gt;
            <div>
              <h1>Languages</h1>
              <h1>Frameworks</h1>
            </div>
          </div>
        </div>
      </div>


      

    
      
  );
}