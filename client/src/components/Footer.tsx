import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-card py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold text-lg mb-4">Skills Adda</h3>
          <p className="text-muted-foreground">
            Empowering careers through quality education
          </p>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-muted-foreground hover:text-primary">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-muted-foreground hover:text-primary">
                Courses
              </a>
            </li>
            <li>
              <a href="#" className="text-muted-foreground hover:text-primary">
                Team
              </a>
            </li>
            <li>
              <a href="#" className="text-muted-foreground hover:text-primary">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4">Contact Us</h3>
          <address className="text-muted-foreground not-italic">
            <p>123 Education Street</p>
            <p>Indore, India</p>
            <p>Phone: +91 789 879 7660</p>
            <p>Email: info@skillsadda.com</p>
          </address>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-muted-foreground hover:text-primary"
              aria-label="Facebook"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary"
              aria-label="Twitter"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary"
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Skills Adda. All rights reserved.</p>
      </div>
    </footer>
  );
}
