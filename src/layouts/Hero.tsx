const Hero = () => {
  return (
    <section className="h-screen w-full bg-main">
        <div className="siteContainer flex items-center justify-between h-full">
            <div className="flex flex-col">
                <h1 className="text-white md:text-7xl text-5xl font-semibold">Europe's the biggest e-commerce platform</h1>
                <p className="text-white text-sm mt-7">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam et ab at asperiores delectus nihil a, temporibus omnis assumenda soluta laborum numquam placeat inventore iste maxime magnam. Animi dolorem error exercitationem id! Aliquid sed fugit quos, ad harum sapiente odio suscipit! Dignissimos, numquam nihil corporis quibusdam illo praesentium quaerat libero.</p>
                <button className="inline bg-white w-[150px] p-3 rounded-md mt-5 font-semibold">Explore Now</button>
            </div>
        </div>
    </section>
  )
}

export default Hero