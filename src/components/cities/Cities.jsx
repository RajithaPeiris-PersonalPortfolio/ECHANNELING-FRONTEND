import "./cities.css";

const Cities = () => {
  return (
    <div className="cities">
        <div className="citiesItem">
            <img src="https://media.istockphoto.com/id/1181382646/photo/colombo-sri-lanka-december-05-2018-view-of-the-colombo-city-skyline-with-modern-architecture.jpg?b=1&s=170667a&w=0&k=20&c=87-1KW4aHxQr9su1lB3oog6UJBzfcuab8VVGBe5YOSU=" alt="" className="citiesImg" />
            <div className="citiesTitles">
                <h1>Colombo</h1>
                <h2>155 Medical Centers</h2>
            </div>
        </div>
        <div className="citiesItem">
            <img src="https://media.istockphoto.com/id/1136638671/photo/island-in-kandy-lake-kandy-sri-lanka.jpg?b=1&s=170667a&w=0&k=20&c=wFqQPBhH8eewGQkNRa-rFckvWXE9R08kYp6uHEcrxUM=" alt="" className="citiesImg" />
            <div className="citiesTitles">
                <h1>Kandy</h1>
                <h2>38 Medical Centers</h2>
            </div>
        </div>
        <div className="citiesItem">
            <img src="https://media.istockphoto.com/id/1254219156/photo/sunrise-over-galle-dutch-fort-lighthouse-surrounded-by-coconut-trees-in-sri-lanka.jpg?b=1&s=170667a&w=0&k=20&c=Ug1gl_bwdd3bLYxv75XbP0PmSVY6l1Bu1ga-O3KGvD8=" alt="" className="citiesImg" />
            <div className="citiesTitles">
                <h1>Galle</h1>
                <h2>45 Medical Centers</h2>
            </div>
        </div>
    </div>
  )
}

export default Cities