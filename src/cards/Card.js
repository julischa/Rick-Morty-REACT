import React from 'react'

const Card = ({character}) => {
    return (
        <div className="col-4">
            <div className="">
                <img src={character.image} alt="rick and morty character pic" className="img-fluid my-3" />
                <div className="">{character.name}</div>
            </div>  
        </div>
    )
}; 

export default Card
