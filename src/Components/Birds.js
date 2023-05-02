import BirdCard from './BirdCard'

export default function Birds({ birdData, adoptBird }) {
    return (<>
        <div className="birds">
            {birdData.map((bird) => {
                return(
                    <BirdCard bird={bird} adoptBird={adoptBird} key={bird.id}/>
                )
            })}
        </div>
    </>)
}