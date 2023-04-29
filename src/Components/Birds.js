import BirdCard from './BirdCard'

export default function Birds({ birdData }) {
    return (<>
        <div>
            {birdData.map((bird) => {
                <BirdCard bird={bird} />
            })}
        </div>
    </>)
}