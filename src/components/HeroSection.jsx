
const heading ={
    image: ''
}

export const HeroSection =()=>{

    return (
        <>
            <div className="border w-full h-full top-15 pt-60 pb-60" id="home">
                <div className="flex justify-center">
                    <img src={heading.image} alt="" srcset="" height={100} width={100}/>
                </div>
                <div>
                        <h2>Lorem ipsum dolor sit.</h2>
                        <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, molestiae!</h1>
                    </div>
            </div>
        </>
    )
}