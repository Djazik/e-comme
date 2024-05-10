import "./contact.css"


export const Contact = () => {
  return (
    <div>
       <div className="container">
      <div className="contact">
        <div className="contact-shadow">
          <div className="contact__img__texts">
            <div className="contact__img">
              <img src="./images/contact-section-imgs/contact-section-img.png" alt="contact" width="624px" height="710px" />
            </div>
            <div className="contact__texts">
              <div className="contact__touch">Aloqa qiling</div>
              <div className="contact__email">contact@e-comm.ng</div>
              <div className="contact__number">+234 4556 6665 34</div>
              <div className="contact__location">20 Prince Hakerem Lekki Phase 1, Lagos.</div>
            </div>
            <div className="contact__ellipse"></div>
          </div>
          <div className="contact__inputs">
            <label className="contact__input--title" htmlFor="fName">Ism va familiya</label>
            <br />
            <input className="contact__input" id="fName" type="text" placeholder="John Doe" autoComplete />
            <br />
            <label className="contact__input--title" htmlFor="email">Elektron pochta</label>
            <br />
            <input className="contact__input" id="email" type="email" placeholder="johndoe@gmail.com" autoComplete />
            <br />
            <label className="contact__input--title" htmlFor="message">Xabar</label>
            <br />
            <textarea className="contact__input contact__input_textarea" placeholder="Xabaringizni kiriting" id="message" cols="50" rows="10"></textarea>
          </div>
        </div>
      </div>
      <div className="contact__search">
        <input className="contact__input" type="search" placeholder="Qidiruv so'rovi..." />
        <button type="submit">Qidirish</button>
      </div>
    </div>
    </div>
  )
}

export default Contact