import React ,{useState} from 'react';
import Team from './Team';

function Match({heroes}){

    function GetRandomHero(heroArr){
        let randomIndex = Math.floor(Math.random() * heroArr.length);
        let retHero = heroArr[randomIndex];
        while(retHero!=undefined && userHeroes.has(retHero.id)){
            randomIndex = Math.floor(Math.random() * heroArr.length);
            retHero = heroArr[randomIndex];
        }
        heroArr.splice(randomIndex,1);
        if (retHero!=undefined){
            userHeroes.add(retHero.id);
        }
        return retHero;

    }

    function FillATeam(){
        let sup1= GetRandomHero(supportHeros);
        let sup2= GetRandomHero(supportHeros);
        let car= GetRandomHero(carryHeros);
        let nuk= GetRandomHero(nukerHeros);
        let dis= GetRandomHero(disablerHeros);
        return [sup1,sup2,car,nuk,dis];
    }

    function FillHeroes(){
        for (const i in heroes){
            let curHero=heroes[i];
            const heroRoles=curHero["roles"];
            if (heroRoles.includes("Support")){
                supportHeros.push(curHero);
            }
            if (heroRoles.includes("Carry")){
                carryHeros.push(curHero);
            }
            if (heroRoles.includes("Nuker")){
                nukerHeros.push(curHero);
            }
            if (heroRoles.includes("Disabler")){
                disablerHeros.push(curHero);
            }
        }
    }
    let userHeroes = new Set();
    let supportHeros = new Array();
    let carryHeros = new Array();
    let nukerHeros = new Array();
    let disablerHeros = new Array();

    FillHeroes();

    return(
        <div className="match">
            <Team name="The Dire" team={FillATeam()} className="team"/>
            <Team name="The Radiant" team={FillATeam()} className="team"/>
        </div>
    );
}

export default Match;