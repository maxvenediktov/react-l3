import React from "react";

function Menu () {
  return (
    <div id="contact">
      <h2>Contacts</h2>
      <p>Don't be shy, text us:</p>

      <p className="contact-info contact-address">
        Moscow, the bells are ringing
      </p>
      <p className="contact-info contact-phone">
        Phone number: <a href="tel:+79956001951">+7(995)600-19-51</a>
      </p>
      <p className="contact-info contact-mail">
        Email: <a href="mailto:hello@hwschool.online">hello@hwschool.online</a>
      </p>
      <form>
        <p>
          <input type="text" placeholder="Имя" name="name"/>
        </p>
        <p>
          <input type="text" placeholder="Email" name="email"/>
        </p>
        <p>
          <input type="text" placeholder="Тема" name="subject"/>
        </p>
        <p>
          <input type="text" placeholder="Сообщения" name="message"/>
        </p>
        <p>
          <button>
            Send message
          </button>
        </p>
      </form>

    </div>
  );
}

export default Menu;
