import { WindowControls } from "#components";
import { socials } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";

const Contact = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="contact" />
        <h2>Contact Me</h2>
      </div>

      <div className="p-5 space-y-5">
        <div className="w-20 h-20 rounded-full overflow-hidden">
          <img
            src="/images/me.jpeg"
            alt="Dibyajyoti"
            className="w-full h-full object-cover"
          />
        </div>

        <h3>Let's Connect</h3>
        <p>Something in mind? Happy to discuss.</p>
        <p className="text-sky-600">
          <a href="mailto:dibyajyotipramanick0750@gmail.com">
            dibyajyotipramanick0750@gmail.com
          </a>
        </p>

        <ul>
          {socials.map(({ id, bg, link, icon, text }) => (
            <li key={id} style={{ backgroundColor: bg }}>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                title={text}
              >
                <img src={icon} alt={text} className="size-5" />
                <p>{text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow;
