import BirdCard from './BirdCard'

export default function Birds({ birdData }) {
    return (<>
        <div>
            {birdData.map((bird) => {
                return(
                    <BirdCard bird={bird} />
                )
            })}
        </div>
    </>)
}