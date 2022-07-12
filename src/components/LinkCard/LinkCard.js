import { Link, GridCol, H3 } from 'govuk-react'
import React from 'react'

function LinkCard({title, content}) {
  return (
    <>
        <GridCol setWidth="one-third">
            <div className='p-12'>
              <h3 className="text-2xl font-normal mb-2"><Link href='/'>{title}</Link></h3>
              <p>
                {content}
              </p>
            </div>
        </GridCol>
    </>
  )
}

export default LinkCard