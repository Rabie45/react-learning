import MarkerLogo from '../images/maps-and-flags.png'
export default function Entry(data) {
  return (
        <article className='journal-entry'>
         <div className="main-image-container">
            <img className='main-image' src= {data.img.src}  alt={data.img.alt}/>

            </div>
            <div className='info-container'>
                <img className='marker' src={MarkerLogo}/>
                <span className='country'>
                {data.country}
                </span>
                <a href={data.googleMapsLink}> View on google map</a>
                <h2 className="entry-title">{data.title}</h2>
                <p className="trip-dates">{data.dates}</p>
                <p className="entry-text">{data.text}</p>

            </div>
        </article>
  )
}
