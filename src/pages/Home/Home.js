import { GridCol,GridRow, SearchBox, Link, H1, Button, ButtonArrow } from 'govuk-react'
import React from 'react'
import FooterCard from '../../components/FooterCard/FooterCard'
import LinkCard from '../../components/LinkCard/LinkCard'
import "./home.css"

function Home() {
  return (
    <>
    <div className='w-4/5 m-0 mx-auto flex bg-sky-100 mt-20 mb-20'>
        <div className='relative'>
            <div className='p-5'>
            <H1>Understanding your annual statement</H1>
            <p className='mb-4'>It shows how much you’ve saved over the past year and much more. Keep an eye out for it between now and August.</p>

            <Button
            icon={<ButtonArrow />}
            start
            buttonColour="#1d70b8"
            >
            Start now
            </Button>
            </div>
            <span className='colorBar'></span>
        </div>
        <div className='coverimg'>
            <img src="/img/mother-and-child-on-laptop.jpg" alt="" />
        </div>
    </div>
    <div className='w-4/5 m-0 mx-auto'>
        <GridRow className=''>
            <GridCol setWidth="two-thirds">
                <div className="welcome p-12">
                    <h1 className="text-2xl font-normal mb-2">Welcome</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                    <p>We use cookies to make our website simpler.</p>
                    <SearchBox>
                        <SearchBox.Input placeholder="Search the website" />
                        <SearchBox.Button />
                    </SearchBox>
                </div>
            </GridCol>
            <GridCol setWidth="one-third" className='border-l'>
                <div className="links p-12">
                    <h1 className="text-2xl font-normal mb-2">Popular links</h1>
                    <ul className='linkList'> 
                        <li>
                            <a href="/">Apply for your free</a>
                        </li>
                        <li><a href="/"></a>Access your Support Fund account</li>
                        <li><a href="/"></a>Buy a prescription prepayment certificate</li>
                        <li><a href="/"></a>Compass</li>
                        <li><a href="/"></a>Pay or challenge your penalty charge notice</li>
                        <li><a href="/"></a>Access ePACT2</li>
                        <li><a href="/"></a>Work for us</li>
                        <li><a href="/"></a>Check if you're eligible for help with charges</li>
                    </ul>
                </div>
            </GridCol>
        </GridRow>
        <GridRow>
            <LinkCard title="Protect your pension savings" content="Registering online with a secure password is one of the best ways to keep your pension pot safe from scammers."/>
            <LinkCard title="We’re here to support you" content="Protecting your pension pot during uncertain times is important to us. We're here to provide our full support, including information on how to avoid pension scams."/>
            <LinkCard title="Log in for the first time" content="It’s easy to check if your pension is on track from your online account. Log in now to see your personalised dashboard."/>
        </GridRow>
        <GridRow>
            <LinkCard title="Get more from Nest" content="Our scheme is designed with you in mind. See how it offers you value for money."/>
            <LinkCard title="Your pension in action" content="Your money has been put into solar farms, wind farms and renewable energy power plants."/>
            <LinkCard title="Transfer your pots" content="See how losing track of your pension pots could mean losing out."/>
        </GridRow>
    
       </div>
       <div className='w-4/5 m-0 mx-auto p-12'>
          <GridRow>
            <FooterCard title="Lorem ipsum dolor sit" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
            <FooterCard title="Lorem ipsum dolor sit" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
            <FooterCard title="Lorem ipsum dolor sit" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
          </GridRow>
       </div>
   </>
  )
}

export default Home