import React, { useState } from 'react'
import ButtonPlace from '../components/ButtonPlace'
import Conference from '../components/Conference'
import ButtonFill from '../components/ButtonFill'

import { PlaceButton } from '../utils'
import { conferenceImage } from '../utils'

const Conferences = () => {
    const initalConference=conferenceImage.filter((conf) => conf.place === "Antananarivo")
    const [filteredConferences, setFilteredConferences] = useState(initalConference)
    const [Selected,setSelected]=useState("Antananarivo")
    
    const selectedConf = (places) => {
        const newItem = conferenceImage.filter((conf) => conf.place === places)
        setFilteredConferences(newItem);
        setSelected(places)
        
    }
    return (
        <section className='bg-background p-3 md:p-0'>
            <div className='max-w-[1700px] mx-auto pt-5'>
                <div className='flex flex-col items-center justify-center '>
                    <h2 className='font-kontes uppercase text-white text-center text-[38px] md:text-[58px] '>type <br /> <span className='text-yellow'>d’activite</span></h2> 
                    <div>
                        <ButtonFill content="30 juin 2024"/>
                    </div>
                </div>
                <div className='flex items-center justify-center text-center '>
                    {PlaceButton.map((item) => (
                        <ButtonPlace
                            filteredConferences={filteredConferences}
                            selectedConf={selectedConf}
                            Selected={Selected}
                            key={item.id}
                            {...item}
                        />     
                    ))}
                </div>
                <Conference conferences={filteredConferences} />  
            </div>
        </section>
    )
}

export default Conferences
