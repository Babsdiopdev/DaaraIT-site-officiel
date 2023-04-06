import React from 'react'

const ResourceDataMap = ({
    resourceItem: ResourceItem,
    resourceData,
    resourceName
}) => {
  return (
    <>
        {
            resourceData.map((resource, index) => (
                <ResourceItem key={index} {...{[resourceName]: resource}} />
            ))   
        }
    </>
  )
}

export default ResourceDataMap