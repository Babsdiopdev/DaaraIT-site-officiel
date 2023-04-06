import React from 'react'
import TabItem from '../../components/gallery/TabItem';
import ResourceDataMap from '../../components/ResourceDataMap';
import galeryTabs from '../../data/galleryTabs.json'

const GalleryPage = () => {
    
  return (
    <div>
        <header style={{backgroundColor:"#006FCE"}} className='h-96 p-5 md:p-10'>
            <div className='h-full flex flex-wrap items-end justify-between text-white text-md md:text-2xl'>
                <h1>Galerie</h1>
                <p>
                    daaraIt <span className='text-xl md:text-5xl'>&#8594;</span> Galerie
                </p>
            </div>
        </header>
        <section className='p-5 md:p-10  md:pt-8'>
            <nav className='my-6'>
                <ul className='flex flex-wrap gap-3 md:gap-4'>
                    <ResourceDataMap
                        resourceData={galeryTabs}
                        resourceItem={TabItem}
                        resourceName="tab"
                     />
                </ul>
            </nav>
            <main className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4'>
                    <div className='w-full h-48 shadow-xl  bg-blue-500'>
                        
                    </div>
                    <div className='w-full h-48 shadow-xl  bg-blue-500'>
                        
                    </div>
                    <div className='w-full h-48 shadow-xl  bg-blue-500'>
                        
                    </div>
                    <div className='w-full h-48 shadow-xl  bg-blue-500'>
                        
                    </div>
                    <div className='w-full h-48 shadow-xl  bg-blue-500'>
                        
                    </div>
                    <div className='w-full h-48 shadow-xl  bg-blue-500'>
                        
                    </div>
            </main>
        </section>
    </div>
  )
}

export default GalleryPage