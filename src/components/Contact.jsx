import mapMarker from "../assets/map-marker.svg";
import mailIcon from "../assets/envelope.svg";

function Contact() {
  return (
    <div className="contact">
      <div className="text">
        <h3>CONTACT US</h3>
        <h2>
          Let&apos;s talk about <br />
          Love to hear from you
        </h2>
      </div>
      <div className="contact-us">
        <h3>Send us a Message</h3>
        <form action="#">
          <label>
            Full Name<em>&#x2a;</em>
          </label>
          <input
            id=""
            name=""
            required=""
            type="text"
            placeholder="Adam Gelius"
          />
          <label>
            Email<em>&#x2a;</em>
          </label>
          <input
            id=""
            name=""
            required=""
            type="email"
            placeholder="example@yourmail.com"
          />
          <label>Phone</label>
          <input
            id=""
            name=""
            type="tel"
            required=""
            placeholder="+885 1254 5211 552"
          />
          <label>
            Message<em>&#x2a;</em>
          </label>
          <input
            id=""
            name=""
            required=""
            type="text"
            placeholder="type your message here"
          />
          <button id="customerOrder">Send</button>
        </form>
      </div>
      <div className="social">
        <div className="location">
          <img src={mapMarker} alt="Map Marker Icon" />
          <div className="detail">
            <h3>Our Location</h3>
            <p>401 Broadway, 24th Floor, Orchard Cloud View, London</p>
          </div>
        </div>
        <div className="mail">
          <img src={mailIcon} alt="Mail Envelope Icon" />
          <div className="detail">
            <h3>How Can We Help?</h3>
            <p>
              info@yourdomain.com <br />
              contact@yourdomain.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
