import { GridCol } from 'govuk-react'
import React from 'react'

function FooterCard({title, content}) {
  return (
    <>
    <GridCol setWidth="one-third">
        <div className='border-b-4 border-blue-500 shadow-md p-5'>
            <h3 className="text-2xl font-normal mb-2">{title}</h3>
            <p>{content}</p>
        </div>
    </GridCol>
    </>
  )
}

export default FooterCard