import TextReveal from "./TextReveal"


const Navbar = () => {
  return (
    <div className="flex top-0 left-0 h-[6vh] w-full z-[30] fixed items-center justify-between px-[3rem]">
        <div className="leftNameSide ">
            <TextReveal splitBy= 'chars'>
                <h3 className="text-[1.2rem]">AASHISH CHOTALIYA</h3>
            </TextReveal>
        </div>
        <div className="righLinkSide flex gap-[1.6rem]">
            <TextReveal splitBy= 'chars'>
                <h3 className="text-[1rem]">HOME</h3>
            </TextReveal>
            <TextReveal splitBy= 'chars'>
                <h3 className="text-[1rem]">ABOUT</h3>
            </TextReveal>
            <TextReveal splitBy= 'chars'>
                <h3 className="text-[1rem]">CONTACT</h3>
            </TextReveal>
        </div>
    </div>
  )
}

export default Navbar