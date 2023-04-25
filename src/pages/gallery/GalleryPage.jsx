import React, {cloneElement} from 'react'
import { useState } from 'react';
import Banner from '../../components/Banner/Banner';
import TabItem from '../../components/gallery/TabItem';
import ResourceDataMap from '../../components/ResourceDataMap';
import galeryTabs from '../../data/galleryTabs.json'
import BannerImg from '../../ressources/images/commission.png';
// import kennedy1 from '../../images/kennedy/kennedy1.jpg'
import 'animate.css';
import ImageItem from '../../components/gallery/ImageItem';

const GalleryPage = () => {
    const [currentTab, setCurrentTab] = useState('all')
    const [displayedImages, setDisplayedImages] = useState(galeryTabs.filter(galery => galery.tab.toLowerCase() === currentTab.toLowerCase())[0].images)

    const changeDisplayedImages = (textTab) => {
        setCurrentTab(textTab)
        const images = galeryTabs.filter(galery => galery.tab.toLowerCase() === textTab.toLowerCase())[0].images
        setDisplayedImages(images)
    }

    // !on clone l'element pour pouvoir lui passer des props supplementaires - "currentTab & changeDisplayedImages"
    const ClonedTabItem = ({tab}) => cloneElement(<TabItem tab={tab} />, {currentTab, changeDisplayedImages})
    
  return (
    <div>
        <Banner 
            title="Galerie" 
            img={BannerImg}
         />
        <section className='p-5 md:p-10  md:pt-8'>
            <nav className='my-6'>
                <ul className='flex flex-wrap gap-3 md:gap-4'>
                    <ResourceDataMap
                        resourceData={galeryTabs}
                        resourceItem={ClonedTabItem}
                        resourceName="tab"
                     />
                </ul>
            </nav>
            <main className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4'>
                {
                    <ResourceDataMap
                        resourceData={displayedImages}
                        resourceItem={ImageItem}
                        resourceName="image"
                     />
                }
            </main>
        </section>
    </div>
  )
}

export default GalleryPage