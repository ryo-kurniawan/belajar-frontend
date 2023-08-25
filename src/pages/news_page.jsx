import Navbar from "../components/Navbar"

const NewsPage = () => {
  return (
    <>
    <Navbar/>
    {/* Content */}
    <div className="flex justify-center bg-white lg:mx-60 md:mx-5 sm:mx-5 mx-5  my-5">
        
            <div className="w-full">
            <header className="w-full flex justify-start items-center my-5">
            <h1 className="text-2xl font-bold font-display">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, quis.</h1>
            </header>
            <figure className="w-full">
            <img src="https://picsum.photos/400/400" alt="Placeholder" className="rounded-md w-full h-96 object-cover" />
            <figcaption className="my-2 text-slate-500">News - 1, 23-08-2023, Jakarta - Indonesia.</figcaption>
            </figure>
            <p className="my-3 text-justify"><b>Lorem ipsum</b>, dolor sit amet consectetur adipisicing elit. Ullam odio voluptate dignissimos mollitia at cum vitae, dolorum eos molestiae facilis, distinctio veniam delectus blanditiis nulla quisquam nisi in, accusamus hic quae odit commodi deserunt. Vero placeat numquam quos magnam culpa dolores, rem molestiae sunt aliquam, sed officia!</p>
            <p className="my-3 text-justify"><b>Lorem ipsum</b>, dolor sit amet consectetur adipisicing elit. Dignissimos suscipit, voluptates autem quaerat earum excepturi! Veniam saepe qui delectus pariatur minima nihil deserunt nisi eligendi aperiam omnis nobis nulla sint doloremque laborum totam odio, maxime iure minus corporis, debitis ipsum consequuntur enim. Molestias perspiciatis suscipit unde repellendus placeat? Dolores perspiciatis minima, molestiae voluptatum iusto ducimus quos quasi quidem culpa qui alias nesciunt voluptas dolorum, eius at earum doloremque sunt, soluta quibusdam ratione eum in deleniti. Minus, maiores, esse qui illum minima ducimus, non officiis laborum velit nostrum sit quae dolore dolorum quis. Modi maiores maxime aspernatur doloribus autem velit, tenetur porro, ratione ipsum consectetur nam molestias, voluptates recusandae?</p>
            <button className="bg-teal-600 hover:bg-teal-500 px-5 rounded py-3 font-sans text-md font-medium text-white">Like Article 👍</button>
            </div>
        
    </div>
    </>
  )
}

export default NewsPage