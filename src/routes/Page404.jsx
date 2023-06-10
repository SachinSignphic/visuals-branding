import { Navbar, LinedBackground, Footer } from "../components"

const Page404 = () => {
    return (
        <>
        <Navbar />
        <LinedBackground style={{marginTop: "10rem"}}>
            <h1 className='ff-almeria-r sec-color'>Error 404: Invalid page!</h1>
        </LinedBackground>
        <Footer />
        </>
    )
}

export default Page404;