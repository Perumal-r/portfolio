import React from "react";
import { Link } from "react-router-dom";
import { SiBmcsoftware } from "react-icons/si";
import { IoHome } from "react-icons/io5";
import { IoMdContacts } from "react-icons/io";
import { IoIosContact } from "react-icons/io";
import logo from "../../images/perumal-removebg-preview.png";

export default function NavBar() {
  return (
    <>
      <div className="position-sticky top-0 z-3">
        <nav class="navbar sticky-top navbar-expand-lg p-3 navHead">
          <div class="container-fluid">
            <Link class="navbar-brand text-white" to="/">
              <span>
                <SiBmcsoftware className="fs-1 blink" />
              </span>
            </Link>
            <button
              class="navbar-toggler bg-light"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link class="nav-link" to="/">
                    <span className="me-2">
                      <IoHome
                        className="text-primary"
                        style={{ fontSize: "18px" }}
                      />
                    </span>
                    <span className="">Home</span>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/service">
                    <span className="me-2">
                      <IoMdContacts className="text-success" />
                    </span>
                    <span>Service</span>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/contact">
                    <span className="me-2">
                      <IoIosContact className="text-warning" />
                    </span>
                    <span>Contact</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
