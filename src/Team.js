import React ,{useState} from 'react';
import Hero from './Hero';

function Team({name, team}){
    return(
        <div className="team">
            <h1>{name}</h1>
            {
                team.map((data,i)=> <Hero key={i} hero={data} />)
            }
        </div>
    );
}

export default Team;