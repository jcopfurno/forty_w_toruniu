function Footer() {
    return (
        <footer>
            <div>
                <h1 className="text-2xl font-bold mb-2"> Wykonanie </h1>
                <p className="text-lg"> Wykonawcą oryginalnej strony jest Grzegorz Meller, a odnowionej Jakub Bobiński.</p>
                <p className="text-lg"> Pomysłodawcami stron i autorami tekstów są Jakub oraz Piotr Olińscy.</p>
                <p className="text-lg"> <a href = "http://fortytorun.azurewebsites.net" className="text-blue-500 hover:underline">Link do oryginalnej strony </a> </p>
            </div>

            <div>
                <h1 className="text-2xl font-bold mb-2"> O nas </h1>
                <p className="text-lg"> Strona powstała, aby pokazać torunianom wiele fascynujących miejsc, kóre na codzień mogą pozostać niezauważone. </p>
            </div>
        </footer>
    )
}

export default Footer