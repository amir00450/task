import Contact from "./Contact"
import { PINK, BACKGROUND, PURPLE } from "../helper/color"


const Contacts = ({ contacts }) => {
  return (
    <div>
      <>
        <section className="container" dir="rtl">
          <button className="btn btn-outline-secondary mx-3 my-4" >
            <i className="fa fa-plus"></i>
            افزودن مخاطب
          </button>
        </section>
        <section className="container">
            {
              contacts.length > 0 ? contacts.map(c => (
                <Contact key={c.id} contacts={c} />
              )) : (
                <div>
                  <div className="text-danger text-center"> مخاطبی یافت نشد <span className="spinner-border mx-3"></span></div>
                  <Contact />
                </div>
              )
            }
        </section>
      </>
    </div>
  )
}

export default Contacts