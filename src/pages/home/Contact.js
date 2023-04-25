import { useForm, ValidationError } from '@formspree/react';
import "../../App.css"

const ContactForm = ()=>{
  const [state, handleSubmit] = useForm("xyyabbdk");
  if (state.succeeded) {
      return  <div className='col-span-3'>
        <p>Thanks for joining!</p>
      </div>;
  }

  return (
    <form
          onSubmit={handleSubmit}
           className="col-span-3">
            <div className="grid grid-cols-2 gap-5">
              <input className="input" name="Prenom Nom" type="text" placeholder="Prenom et nom *" />
              <input className="input" name="Email" type="e-mail" placeholder="Email *" />
            </div>
            <div className="grid grid-cols-2 gap-5 mt-4">
              <input className="input" name="Objet" placeholder="Objet *" />
              <input className="input" name="Telephone" type="tel" placeholder="Telephone *" />
            </div>
            <div className="grid grid-cols-1 mt-4 bg-white p-2">
              <textarea
                name="message"
                placeholder="Votre message ici..."
                id=""
                rows="4"
                style={{ padding: 10, fontSize: 14, outline: "none" }}
              ></textarea>
              <div className="flex items-center justify-end mt-2">
                <button type="submit" disabled={state.submitting} className="px-2 py-1 bg-blue-600 w-[110px] text-white rounded-sm ">
                  Envoyer
                </button>
              </div>
            </div>
          </form>
  )
}
const Contact = () => {

  return (
    <div id="contact" className="container-xl  bg-contacts px-[4rem] py-[5rem]">
      <h1
        className={
          "text-[1.3rem] font-[700] border-l-[10px] border-black px-6 text-white "
        }
      >
        Pour nous contacter
      </h1>

      <div className="my-[5rem]">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-10">
          <ContactForm />
          <div className="shadow-lg rounded-md col-span-2">
            <div className="w-full" >
              <iframe  scrolling="no" marginheight="0" marginwidth="0"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=INSTITUT%20EDGE%20Route%20de%20la%20Pyrotechnie%20Prolong%C3%A9e+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                width="100%" height="273" frameborder="0"><a href="https://www.maps.ie/distance-area-calculator.html">measure area map</a></iframe></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;