import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"


const Footer= ()=> {
  return (
    <footer className="max-container">
        <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
            <div className="flex flex-col items-start ">
                <a href="/">
                  <img src={footerLogo} alt="" width={150} height={46} />
                </a>
                <p className="text-white-400 sm:max-w-sm mt-6 leading-7 font-montserrat ">Get shoes ready for the new term at your nearest Nike store. FInd your perfect size in store. Get Rewards!</p>
                <div className="flex items-center mt-8  gap-5">
                    {socialMedia.map((icon)=>
                    (
                      <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
                          <img src={icon.src} alt={icon.alt} height={24} width={24} />
                      </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
                      {footerLinks.map((section)=>
                      (
                        <div>
                          <h4 className="text-white font text-2xl leading-normal font-medium mb-6">{section.title}</h4>
                          <ul>{section.links.map((link)=>
                          (
                            <li 
                            key={link.name} className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer">
                              <a> {link.name} </a>
                            </li>
                          ))}</ul>
                        </div>
                      ))}
            </div>
        </div>
        <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
                  <div className="flex flex-1 justify-start items-center font-montserrat cursor-pointer gap-2"> 
                      <img src={copyrightSign} alt="CopyRightSign" width={20} height={20} className="rounded-e-full m-0" />
                      <p>All Rights Reserved</p>
                  </div>
                  <p className="font-monserrat cursor-pointer "> Terms & Conditions</p>
        </div>
    </footer>
  )
}
 
export default Footer
