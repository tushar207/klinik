import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Afooter() {
  const redirect = useNavigate();

  // Delete session
  const logout = () => {
    localStorage.removeItem("adminid");
    localStorage.removeItem("adminname");
    toast.success("Logout Success");
    redirect("/admin-login");
  };
  return (
    <>
      <div>
        <div
          className="container-fluid bg-dark text-light footer mt-5 pt-5 wow fadeIn"
          data-wow-delay="0.1s"
        >
          <div className="container py-5">
            <div className="row g-5">
              <div className="col-lg-3 col-md-6">
                <h5 className="text-light mb-4">Address</h5>
                <p className="mb-2">
                  <i className="fa fa-map-marker-alt me-3" />
                  123 Street, New York, USA
                </p>
                <p className="mb-2">
                  <i className="fa fa-phone-alt me-3" />
                  +012 345 67890
                </p>
                <p className="mb-2">
                  <i className="fa fa-envelope me-3" />
                  info@example.com
                </p>
                <div className="d-flex pt-2">
                  <a
                    className="btn btn-outline-light btn-social rounded-circle"
                    href
                  >
                    <i className="fab fa-twitter" />
                  </a>
                  <a
                    className="btn btn-outline-light btn-social rounded-circle"
                    href
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a
                    className="btn btn-outline-light btn-social rounded-circle"
                    href
                  >
                    <i className="fab fa-youtube" />
                  </a>
                  <a
                    className="btn btn-outline-light btn-social rounded-circle"
                    href
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <h5 className="text-light mb-4">Services</h5>
                <a className="btn btn-link" href>
                  Cardiology
                </a>
                <a className="btn btn-link" href>
                  Pulmonary
                </a>
                <a className="btn btn-link" href>
                  Neurology
                </a>
                <a className="btn btn-link" href>
                  Orthopedics
                </a>
                <a className="btn btn-link" href>
                  Laboratory
                </a>
              </div>
              <div className="col-lg-3 col-md-6">
                <h5 className="text-light mb-4">Quick Links</h5>
                <a className="btn btn-link" href>
                  About Us
                </a>
                <a className="btn btn-link" href>
                  Contact Us
                </a>
                <a className="btn btn-link" href>
                  Our Services
                </a>
                <a className="btn btn-link" href>
                  Terms &amp; Condition
                </a>
                <a className="btn btn-link" href>
                  Support
                </a>
              </div>
              <div className="col-lg-3 col-md-6">
                <h5 className="text-light mb-4">Newsletter</h5>
                <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                <div
                  className="position-relative mx-auto"
                  style={{ maxWidth: 400 }}
                >
                  {(() => {
                    if (localStorage.getItem("adminid")) {
                      return (
                        <>
                          <a
                            href="javascript:void(0)"
                            onClick={logout}
                            className="btn btn-danger rounded-0 py-4 px-lg-5 d-none d-lg-block"
                          >
                            Logout
                          </a>
                        </>
                      );
                    } else {
                      return (
                        <>
                          <Link
                            to="/admin-login"
                            className="btn btn-danger rounded-0 py-4 px-lg-5 d-none d-lg-block"
                          >
                            LOG IN
                          </Link>
                        </>
                      );
                    }
                  })()}

                  {/* <button
                    type="button"
                    className="btn btn-primary py-2 position-absolute  "
                  >
                    SignUp
                  </button> */}
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="copyright">
              <div className="row">
                <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                  ©{" "}
                  <a className="border-bottom" href="#">
                    klinicx.com
                  </a>
                  , All Right Reserved.
                </div>
                <div className="col-md-6 text-center text-md-end">
                  {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
                  Designed By
                  <a className="border-bottom" href="#">
                  TUSHAR MAKAVANA
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Afooter;
