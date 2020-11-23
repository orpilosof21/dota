import React ,{useState} from 'react';

function Hero({hero}){
    if (hero == undefined){
        return (<h2>X</h2>);
    }
    let imgString="http://cdn.dota2.com/apps/dota2/images/heroes/";
    let heroName = hero.name.split('_');
    for (let i=3;i<heroName.length;i++){
        imgString+=heroName[i]+"_"
    }
    imgString+="lg.png";
    return(
        <div>
            <img src={imgString} className='hero'/>
            <h3>{hero.localized_name}</h3>
        </div>
    );
}

export default Hero;