import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { Row } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Accordion from "react-bootstrap/Accordion";
import logo from "../assets/img/png/logo.png";
import loader from "../assets/img/png/loader.png";
import msg from "../assets/img/png/email.png";
import user from "../assets/img/png/user.png";
import apps from "../assets/img/png/apps.png";
import help from "../assets/img/png/help.png";
import file from "../assets/img/png/file.png";
import setting from "../assets/img/png/setting.png";
import exports from "../assets/img/png/export.png";
import world from "../assets/img/png/web.png";
import search from "../assets/img/png/search.png";
import notification from "../assets/img/png/notification.png";
import calender from "../assets/img/png/calendar.png";
import profile from "../assets/img/png/profile.png";
import bolt from "../assets/img/png/bolt.png";
import dot from "../assets/img/png/dot.png";
import chart from "../assets/img/png/Line Chart.png";
import blue from "../assets/img/png/blue.png";
import green from "../assets/img/png/green.png";
import install from "./Data";
import { Zepplin } from "./Data";
import left_arrow from "../assets/img/png/arrow-left.png";
import rigth_arrow from "../assets/img/png/arrow-right.png";
function Header() {
  const [show, setShow] = useState(0);
  const [count, setCount] = useState(0);
  const myNext = useRef();
  if (show) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "initial";
  }
  const settings = {
    dots: false,
    autoPlay: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  console.log(myNext.current);
  return (
    <>
      <section className="miv-vh-100 overflow-hidden">
        <div className="container-fluid h-100">
          <div className=" h-100 d-lg-none">
            <div className={`${show ? "shownav overflow-auto" : "hidenav"}`}>
              <div className=" hide_dash bg-white ps-4 pt-4 bg-white  d-flex flex-column justify-content-between">
                <div className="">
                  <div className="">
                    <img
                      onClick={() => setShow(!show)}
                      className="logo_size z_index0"
                      src={logo}
                      alt="logo-img"
                    />
                  </div>
                  <h3 className="ff_inter fw-semibold fs_12 text_gray_a2 mt-5 pt-2">
                    D A S H B O A R D
                  </h3>
                  <div>
                    <Accordion defaultActiveKey="0">
                      <Accordion.Item className=" mt-3" eventKey="5">
                        <Accordion.Header>
                          <div className="d-flex align-items-center text_dark_28 ps-0">
                            <img src={loader} alt="loader" />
                            <p className=" mb-0 ff_inter fw-semibold fs_14 ms-2">
                              Dashboard
                            </p>
                          </div>
                        </Accordion.Header>
                        <Accordion.Body className="pt-0">
                          <div className="d-flex flex-column gap-2 ps-2">
                            <span>
                              <a
                                href=""
                                className="Sub_btn ff_inter fw-semibold fs_14 mb-0 text_gray_80"
                              >
                                Analytics
                              </a>
                            </span>
                            <span>
                              <a
                                href="#"
                                className="Sub_btn ff_inter fw-semibold fs_14 mb-0 text_gray_80"
                              >
                                Finance
                              </a>
                            </span>
                            <span>
                              <a
                                href="#"
                                className="Sub_btn ff_inter fw-semibold fs_14 mb-0 text_gray_80"
                              >
                                Job Board
                              </a>
                            </span>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                    <Accordion defaultActiveKey="0">
                      <Accordion.Item className=" mt-3" eventKey="5">
                        <Accordion.Header>
                          <div className="d-flex align-items-center text_dark_28 ps-0">
                            <img src={msg} alt="loader" />
                            <p className=" mb-0 ff_inter fw-semibold fs_14 ms-2">
                              Messages
                            </p>
                          </div>
                        </Accordion.Header>
                        <Accordion.Body className="pt-0">
                          <div className="d-flex flex-column gap-2 ps-2">
                            <span>
                              <a
                                href=""
                                className="Sub_btn ff_inter fw-semibold fs_14 mb-0 text_gray_80"
                              >
                                Analytics
                              </a>
                            </span>
                            <span>
                              <a
                                href="#"
                                className="Sub_btn ff_inter fw-semibold fs_14 mb-0 text_gray_80"
                              >
                                Finance
                              </a>
                            </span>
                            <span>
                              <a
                                href="#"
                                className="Sub_btn ff_inter fw-semibold fs_14 mb-0 text_gray_80"
                              >
                                Job Board
                              </a>
                            </span>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                    <Accordion defaultActiveKey="0">
                      <Accordion.Item className=" mt-3" eventKey="5">
                        <Accordion.Header>
                          <div className="d-flex align-items-center text_dark_28 ps-0">
                            <img src={user} alt="loader" />
                            <p className=" mb-0 ff_inter fw-semibold fs_14 ms-2">
                              Friends
                            </p>
                          </div>
                        </Accordion.Header>
                        <Accordion.Body className="pt-0">
                          <div className="d-flex flex-column gap-2 ps-2">
                            <span>
                              <a
                                href=""
                                className="Sub_btn ff_inter fw-semibold fs_14 mb-0 text_gray_80"
                              >
                                Analytics
                              </a>
                            </span>
                            <span>
                              <a
                                href="#"
                                className="Sub_btn ff_inter fw-semibold fs_14 mb-0 text_gray_80"
                              >
                                Finance
                              </a>
                            </span>
                            <span>
                              <a
                                href="#"
                                className="Sub_btn ff_inter fw-semibold fs_14 mb-0 text_gray_80"
                              >
                                Job Board
                              </a>
                            </span>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                    <Accordion defaultActiveKey="0">
                      <Accordion.Item className=" mt-3" eventKey="5">
                        <Accordion.Header>
                          <div className="d-flex align-items-center text_dark_28 ps-0">
                            <img src={apps} alt="loader" />
                            <p className=" mb-0 ff_inter fw-semibold fs_14 ms-2">
                              Apps
                            </p>
                          </div>
                        </Accordion.Header>
                        <Accordion.Body className="pt-0">
                          <div className="d-flex flex-column gap-2 ps-2">
                            <span>
                              <a
                                href=""
                                className="Sub_btn ff_inter fw-semibold fs_14 mb-0 text_gray_80"
                              >
                                Analytics
                              </a>
                            </span>
                            <span>
                              <a
                                href="#"
                                className="Sub_btn ff_inter fw-semibold fs_14 mb-0 text_gray_80"
                              >
                                Finance
                              </a>
                            </span>
                            <span>
                              <a
                                href="#"
                                className="Sub_btn ff_inter fw-semibold fs_14 mb-0 text_gray_80"
                              >
                                Job Board
                              </a>
                            </span>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>
                  <h3 className="ff_inter fw-semibold fs_12 text_gray_a2 mt-5 pt-2">
                    P A G E S
                  </h3>
                  <div>
                    <Accordion defaultActiveKey="0">
                      <Accordion.Item className=" mt-3" eventKey="5">
                        <Accordion.Header>
                          <div className="d-flex align-items-center text_dark_28 ps-0">
                            <img src={help} alt="loader" />
                            <p className=" mb-0 ff_inter fw-semibold fs_14 ms-2">
                              Help Center
                            </p>
                          </div>
                        </Accordion.Header>
                        <Accordion.Body className="pt-0">
                          <div className="d-flex flex-column gap-2 ps-2">
                            <span>
                              <a
                                href=""
                                className="Sub_btn ff_inter fw-semibold fs_14 mb-0 text_gray_80"
                              >
                                Analytics
                              </a>
                            </span>
                            <span>
                              <a
                                href="#"
                                className="Sub_btn ff_inter fw-semibold fs_14 mb-0 text_gray_80"
                              >
                                Finance
                              </a>
                            </span>
                            <span>
                              <a
                                href="#"
                                className="Sub_btn ff_inter fw-semibold fs_14 mb-0 text_gray_80"
                              >
                                Job Board
                              </a>
                            </span>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                    <Accordion defaultActiveKey="0">
                      <Accordion.Item className=" mt-3" eventKey="5">
                        <Accordion.Header>
                          <div className="d-flex align-items-center text_dark_28 ps-0">
                            <img src={file} alt="loader" />
                            <p className=" mb-0 ff_inter fw-semibold fs_14 ms-2">
                              File Manager
                            </p>
                          </div>
                        </Accordion.Header>
                        <Accordion.Body className="pt-0">
                          <div className="d-flex flex-column gap-2 ps-2">
                            <span>
                              <a
                                href=""
                                className="Sub_btn ff_inter fw-semibold fs_14 mb-0 text_gray_80"
                              >
                                Analytics
                              </a>
                            </span>
                            <span>
                              <a
                                href="#"
                                className="Sub_btn ff_inter fw-semibold fs_14 mb-0 text_gray_80"
                              >
                                Finance
                              </a>
                            </span>
                            <span>
                              <a
                                href="#"
                                className="Sub_btn ff_inter fw-semibold fs_14 mb-0 text_gray_80"
                              >
                                Job Board
                              </a>
                            </span>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>
                </div>
                <div className="d-flex justify-content-between pe-4 pb-3">
                  <span>
                    <img src={setting} alt="img-icon" />
                  </span>
                  <span>
                    <img src={exports} alt="img-icon" />
                  </span>
                  <span>
                    <img src={world} alt="img-icon" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <Row className="h-100 position-relative ">
            <div className="col-lg-2 z_index0 d-lg-flex d-none px-0 overflow-auto">
              <div className="w-100">
                {" "}
                <div className="min-vh-100 hide_dash bg-white ps-4 pt-4 bg-white  d-flex flex-column justify-content-between">
                  <div>
                    <div className="">
                      <img
                        onClick={() => setShow(!show)}
                        className="logo_size z_index0 "
                        src={logo}
                        alt="logo-img"
                      />{" "}
                      <span className="d-lg-none d-flex ">
                        <a href="#">
                          <img
                            className="scale"
                            src={notification}
                            alt="img-icon"
                          />
                        </a>
                      </span>
                      <span className="d-lg-none d-flex ">
                        <a href="#">
                          <img
                            className="scale"
                            src={calender}
                            alt="img-icon"
                          />
                        </a>
                      </span>
                      <span className="d-lg-none d-flex ">
                        <a href="#">
                          <img className="scale" src={apps} alt="img-icon" />
                        </a>
                      </span>
                    </div>
                    <h3 className="ff_inter fw-semibold fs_12 text_gray_a2 mt-5 pt-2">
                      D A S H B O A R D
                    </h3>
                    <div>
                      <Accordion defaultActiveKey="0">
                        <Accordion.Item className=" mt-3" eventKey="5">
                          <Accordion.Header>
                            <div className="d-flex align-items-center text_dark_28 ps-0">
                              <img src={loader} alt="loader" />
                              <p className=" mb-0 ff_inter fw-semibold fs_14 ms-2">
                                Dashboard
                              </p>
                            </div>
                          </Accordion.Header>
                          <Accordion.Body className="pt-0">
                            <div className="d-flex flex-column gap-2 ps-2">
                              <span>
                                <a
                                  href=""
                                  className="Sub_btn ff_inter fw-semibold fs_14 mb-0 text_gray_80"
                                >
                                  Analytics
                                </a>
                              </span>
                              <span>
                                <a
                                  href="#"
                                  className="Sub_btn ff_inter fw-semibold fs_14 mb-0 text_gray_80"
                                >
                                  Finance
                                </a>
                              </span>
                              <span>
                                <a
                                  href="#"
                                  className="Sub_btn ff_inter fw-semibold fs_14 mb-0 text_gray_80"
                                >
                                  Job Board
                                </a>
                              </span>
                            </div>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                      <Accordion defaultActiveKey="0">
                        <Accordion.Item className=" mt-2" eventKey="5">
                          <Accordion.Header>
                            <div className="d-flex align-items-center text_dark_28 ps-0">
                              <img src={msg} alt="loader" />
                              <p className=" mb-0 ff_inter fw-semibold fs_14 ms-2">
                                Messages
                              </p>
                            </div>
                          </Accordion.Header>
                          <Accordion.Body className="pt-0">
                            <div className="d-flex flex-column gap-2 ps-2">
                              <span>
                                <a
                                  href=""
                                  className="Sub_btn ff_inter fw-semibold fs_14 mb-0 text_gray_80"
                                >
                                  Analytics
                                </a>
                              </span>
                              <span>
                                <a
                                  href="#"
                                  className="Sub_btn ff_inter fw-semibold fs_14 mb-0 text_gray_80"
                                >
                                  Finance
                                </a>
                              </span>
                              <span>
                                <a
                                  href="#"
                                  className="Sub_btn ff_inter fw-semibold fs_14 mb-0 text_gray_80"
                                >
                                  Job Board
                                </a>
                              </span>
                            </div>
                          </Accordion.Body>{" "}
                        </Accordion.Item>{" "}
                      </Accordion>
                      <Accordion defaultActiveKey="0">
                        <Accordion.Item className=" mt-2" eventKey="5">
                          <Accordion.Header>
                            <div className="d-flex align-items-center text_dark_28 ps-0">
                              <img src={user} alt="loader" />{" "}
                              <p className=" mb-0 ff_inter fw-semibold fs_14 ms-2">
                                Friends
                              </p>{" "}
                            </div>{" "}
                          </Accordion.Header>{" "}
                          <Accordion.Body className="pt-0">
                            <div className="d-flex flex-column gap-2 ps-2">
                              <span>
                                <a
                                  href=""
                                  className="Sub_btn ff_inter fw-semibold fs_14 mb-0 text_gray_80"
                                >
                                  Analytics{" "}
                                </a>{" "}
                              </span>
                              <span>
                                <a
                                  href="#"
                                  className="Sub_btn ff_inter fw-semibold fs_14 mb-0 text_gray_80"
                                >
                                  Finance{" "}
                                </a>{" "}
                              </span>
                              <span>
                                <a
                                  href="#"
                                  className="Sub_btn ff_inter fw-semibold fs_14 mb-0 text_gray_80"
                                >
                                  Job Board{" "}
                                </a>{" "}
                              </span>
                            </div>{" "}
                          </Accordion.Body>{" "}
                        </Accordion.Item>{" "}
                      </Accordion>
                      <Accordion defaultActiveKey="0">
                        <Accordion.Item className=" mt-2" eventKey="5">
                          <Accordion.Header>
                            <div className="d-flex align-items-center text_dark_28 ps-0">
                              <img src={apps} alt="loader" />{" "}
                              <p className=" mb-0 ff_inter fw-semibold fs_14 ms-2">
                                Apps
                              </p>{" "}
                            </div>{" "}
                          </Accordion.Header>{" "}
                          <Accordion.Body className="pt-0">
                            <div className="d-flex flex-column gap-2 ps-2">
                              <span>
                                <a
                                  href=""
                                  className="Sub_btn ff_inter fw-semibold fs_14 mb-0 text_gray_80"
                                >
                                  Analytics{" "}
                                </a>{" "}
                              </span>
                              <span>
                                <a
                                  href="#"
                                  className="Sub_btn ff_inter fw-semibold fs_14 mb-0 text_gray_80"
                                >
                                  Finance{" "}
                                </a>{" "}
                              </span>
                              <span>
                                <a
                                  href="#"
                                  className="Sub_btn ff_inter fw-semibold fs_14 mb-0 text_gray_80"
                                >
                                  Job Board{" "}
                                </a>{" "}
                              </span>
                            </div>{" "}
                          </Accordion.Body>{" "}
                        </Accordion.Item>{" "}
                      </Accordion>
                    </div>
                    <h3 className="ff_inter fw-semibold fs_12 text_gray_a2 mt-5 pt-2">
                      P A G E S
                    </h3>
                    <div>
                      <Accordion defaultActiveKey="0">
                        <Accordion.Item className=" mt-2" eventKey="5">
                          <Accordion.Header>
                            <div className="d-flex align-items-center text_dark_28 ps-0">
                              <img src={help} alt="loader" />{" "}
                              <p className=" mb-0 ff_inter fw-semibold fs_14 ms-2">
                                Help Center
                              </p>{" "}
                            </div>{" "}
                          </Accordion.Header>{" "}
                          <Accordion.Body className="pt-0">
                            <div className="d-flex flex-column gap-2 ps-2">
                              <span>
                                <a
                                  href=""
                                  className="Sub_btn ff_inter fw-semibold fs_14 mb-0 text_gray_80"
                                >
                                  Analytics{" "}
                                </a>{" "}
                              </span>
                              <span>
                                <a
                                  href="#"
                                  className="Sub_btn ff_inter fw-semibold fs_14 mb-0 text_gray_80"
                                >
                                  Finance{" "}
                                </a>{" "}
                              </span>
                              <span>
                                <a
                                  href="#"
                                  className="Sub_btn ff_inter fw-semibold fs_14 mb-0 text_gray_80"
                                >
                                  Job Board{" "}
                                </a>{" "}
                              </span>
                            </div>{" "}
                          </Accordion.Body>{" "}
                        </Accordion.Item>{" "}
                      </Accordion>
                      <Accordion defaultActiveKey="0">
                        <Accordion.Item className=" mt-2" eventKey="5">
                          <Accordion.Header>
                            <div className="d-flex align-items-center text_dark_28 ps-0">
                              <img src={file} alt="loader" />{" "}
                              <p className=" mb-0 ff_inter fw-semibold fs_14 ms-2">
                                File Manager
                              </p>{" "}
                            </div>{" "}
                          </Accordion.Header>{" "}
                          <Accordion.Body className="pt-0">
                            <div className="d-flex flex-column gap-2 ps-2">
                              <span>
                                <a
                                  href=""
                                  className="Sub_btn ff_inter fw-semibold fs_14 mb-0 text_gray_80"
                                >
                                  Analytics{" "}
                                </a>{" "}
                              </span>
                              <span>
                                <a
                                  href="#"
                                  className="Sub_btn ff_inter fw-semibold fs_14 mb-0 text_gray_80"
                                >
                                  Finance{" "}
                                </a>{" "}
                              </span>
                              <span>
                                <a
                                  href="#"
                                  className="Sub_btn ff_inter fw-semibold fs_14 mb-0 text_gray_80"
                                >
                                  Job Board{" "}
                                </a>{" "}
                              </span>
                            </div>{" "}
                          </Accordion.Body>{" "}
                        </Accordion.Item>{" "}
                      </Accordion>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between pe-4 pb-3">
                    <span>
                      <img src={setting} alt="img-icon" />
                    </span>
                    <span>
                      <img src={exports} alt="img-icon" />
                    </span>
                    <span>
                      <img src={world} alt="img-icon" />
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-10 px-0 ">
              <div className="d-flex z_index justify-content-between bg-white ms_1 pe-4 ps-2 align-items-center py-2 bg-white-sm mb-4 position-fixed w_100 w_lg_83">
                <span className="d-lg-none z_index0 ps-3">
                  <a className="" href="#">
                    <img
                      className="logo_size "
                      onClick={() => setShow(!show)}
                      src={logo}
                      alt="logo"
                    />
                  </a>
                </span>
                <span className="search_bar gap-1 py-1 w-75 d-none d-md-flex align-items-center ms-4">
                  <span>
                    <img className="ps-2" src={search} alt="icon-img" />{" "}
                  </span>
                  <input
                    className="border-0 w_sm_94 outline py-2"
                    type="search"
                    placeholder="Search..."
                  />
                </span>

                <div className="w_lg_25 d-flex justify-content-between gap-2  ps-4 align-items-center">
                  <span className="d-none d-lg-flex">
                    <a href="#">
                      <img
                        className="scale"
                        src={notification}
                        alt="img-icon"
                      />
                    </a>
                  </span>
                  <span className="d-none d-lg-flex">
                    <a href="#">
                      <img className="scale" src={calender} alt="img-icon" />
                    </a>
                  </span>
                  <span className="d-none d-lg-flex">
                    <a href="#">
                      <img className="scale" src={apps} alt="img-icon" />
                    </a>
                  </span>
                  <span>
                    <a href="#">
                      <img className="scale" src={profile} alt="img-icon" />
                    </a>
                  </span>
                </div>
              </div>{" "}
              <div className=" px-sm-4 px-2 mt-2 pt-5">
                <div className="search_bar gap-1 d-flex py-2 w-100 d-md-none align-items-center z_index mt-4">
                  <span>
                    <img className="ps-2" src={search} alt="icon-img" />{" "}
                  </span>
                  <input
                    className="border-0 w_sm_94 w_xsm_90 outline py-2 z_index1"
                    type="search"
                    placeholder="Search..."
                  />
                </div>
                <div className="px-lg-2 mt-5 ">
                  <div className="bg_dark py-4 px-sm-4 rounded-4 d-flex flex-column flex-sm-row justify-content-between align-items-center">
                    <article>
                      <h2 className="text-center text-sm-start ff_inter fw-semibold fs_28 text-white pt-2 px-2">
                        Unlock premium stats
                      </h2>
                      <p className="text-center text-sm-start ff_inter fw-normal fs_14 text-white pb-2 px-2 mb-0">
                        Get up to 10TB of storage for a limited time
                      </p>
                    </article>

                    <span className="btn bg-white rounded-5 px-sm-4 px-2 py-3">
                      <img src={bolt} alt="img-icon" />
                      <a
                        className="ff_inter fw-semibold fs_16 text_dark_28 pe-2 "
                        href="#"
                      >
                        Upgrade
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="px-3">
                <Row className="mt-4 pt-2 ps-2 pe-2">
                  <div className="col-lg-3 col-sm-6 px-lg-3 ">
                    <div className="px-sm-4 px-2 py-4 h-100 bg-white rounded-4">
                      <p className=" ff_inter fw-normal fs_16 text_gray_80 mb-0">
                        Revenue{" "}
                      </p>
                      <h2 className="ff_inter fw-semibold fs_26 text_dark_28 pt-1">
                        $56,945{" "}
                      </h2>
                      <span className="d-flex gap-2 mt-4 align-items-center">
                        <a
                          className="ff_inter fw-semibold fs_12 text_green bg_green py-2 px-3 rounded-5"
                          href="#"
                        >
                          +45%
                        </a>{" "}
                        <a
                          className="ff_inter fw-semibold fs_12  text_gray_a2"
                          href="#"
                        >
                          From 4.6%
                        </a>
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 px-lg-3 mt-4 mt-sm-0">
                    <div className="px-sm-4 px-2 py-4 h-100 bg-white rounded-4">
                      <p className=" ff_inter fw-normal fs_16 text_gray_80 mb-0">
                        Users
                      </p>
                      <h2 className="ff_inter fw-semibold fs_26 text_dark_28 pt-1">
                        76.8%
                      </h2>
                      <span className="d-flex gap-2 mt-4 align-items-center">
                        <a
                          className="ff_inter fw-semibold fs_12 text_red bg_red py-2 px-3 rounded-5"
                          href="#"
                        >
                          -1.7%
                        </a>{" "}
                        <a
                          className="ff_inter fw-semibold fs_12  text_gray_a2"
                          href="#"
                        >
                          From 4.6%
                        </a>
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 px-lg-3 mt-4 mt-lg-0">
                    <div className="px-sm-4 px-2 py-4 h-100 bg-white rounded-4">
                      <p className=" ff_inter fw-normal fs_16 text_gray_80 mb-0">
                        New Signups
                      </p>
                      <h2 className="ff_inter fw-semibold fs_26 text_dark_28 pt-1">
                        116
                      </h2>
                      <span className="d-flex gap-2 mt-4 align-items-center">
                        <a
                          className="ff_inter fw-semibold fs_12 pt-2 bg_light_gray text_gray_80 rounded-5 py-2 px-3 text_gray_a2"
                          href="#"
                        >
                          0.00
                        </a>
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 px-lg-3 mt-4 mt-lg-0">
                    <div className="px-sm-4 px-2 py-4 h-100 bg-white rounded-4">
                      <p className=" ff_inter fw-normal fs_16 text_gray_80 mb-0">
                        Retention
                      </p>
                      <h2 className="ff_inter fw-semibold fs_26 text_dark_28 pt-1">
                        12.67%
                      </h2>
                      <span className="d-flex gap-2 mt-4 align-items-center">
                        <a
                          className="ff_inter fw-semibold fs_12 text_green bg_green py-2 px-3 rounded-5"
                          href="#"
                        >
                          +0.6%
                        </a>{" "}
                        <a
                          className="ff_inter fw-semibold fs_12  text_gray_a2"
                          href="#"
                        >
                          From 4.6%
                        </a>
                      </span>
                    </div>
                  </div>
                </Row>
              </div>{" "}
              <div className="mt-4 px-4">
                <article className="px-1 mx-1 bg-white rounded-4 pt-3">
                  <div className="d-flex justify-content-between align-items-center px-sm-4 px-2 border_bottom pb-2">
                    <h2 className="ff_inter fw-semibold fs_18 text_dark_28">
                      Performance
                    </h2>
                    <span>
                      <img src={dot} alt="dots" />
                    </span>
                  </div>
                  <Row className="mt-4 px-sm-4 px-2">
                    <div className="col-md-1 col-2">
                      <article className="d-flex flex-column gap-4">
                        <p className="mb-2 ff_inter fw-normalfs_12 text_gray_a1">
                          400
                        </p>
                        <p className="mb-2 ff_inter fw-normalfs_12 text_gray_a1">
                          300
                        </p>
                        <p className="mb-2 ff_inter fw-normalfs_12 text_gray_a1">
                          200
                        </p>
                        <p className="mb-2 ff_inter fw-normalfs_12 text_gray_a1">
                          100
                        </p>
                        <p className="mb-2 ff_inter fw-normalfs_12 text_gray_a1">
                          0
                        </p>
                      </article>
                    </div>
                    <div className="col-md-11 col-10 ps-0">
                      <img
                        className="w-100 h_250"
                        src={chart}
                        alt="graph-img"
                      />
                      <article className="d-flex justify-content-between mt-4">
                        <p className="mb-0 ff_inter fw-normalfs_12 text_gray_a1">
                          Sun
                        </p>
                        <p className="mb-0 ff_inter fw-normalfs_12 text_gray_a1">
                          Mon
                        </p>
                        <p className="mb-0 ff_inter fw-normalfs_12 text_gray_a1">
                          Tue
                        </p>
                        <p className="mb-0 ff_inter fw-normalfs_12 text_gray_a1">
                          Wed
                        </p>
                        <p className="mb-0 ff_inter fw-normalfs_12 text_gray_a1">
                          Thu
                        </p>
                        <p className="mb-0 ff_inter fw-normalfs_12 text_gray_a1">
                          Fri
                        </p>
                        <p className="mb-0 ff_inter fw-normalfs_12 text_gray_a1">
                          Sat
                        </p>
                      </article>
                      <article className="d-flex my-4 pt-2 gap-sm-4 gap-2 justify-content-center pe-sm-5">
                        <span className="ff_inter fw-normal fs_14 text_gray_80">
                          <img
                            className="pe-sm-2 pe-1"
                            src={blue}
                            alt="color-circle"
                          />
                          Instagram
                        </span>
                        <span className="ff_inter fw-normal fs_14 text_gray_80">
                          <img
                            className="pe-sm-2 pe-1"
                            src={green}
                            alt="color-circle"
                          />
                          Facebook
                        </span>
                      </article>
                    </div>
                  </Row>
                </article>
              </div>
              <div className=" mx-4 mt-4  pt-4 bg__radius bg_white_radius">
                <div className="d-flex justify-content-between align-items-center px-sm-4 px-2 bg-white mx-1 border_bottom">
                  <h2 className="ff_inter fw-semibold fs_18 text_dark_28 ps-2 pb-3">
                    Installed apps
                  </h2>
                  <span>
                    <img className="pb-3" src={dot} alt="dots" />
                  </span>
                </div>
                <Slider className="pb-0 mb-0" ref={myNext} {...settings}>
                  <div className="">
                    <div className="overflow-auto ">
                      <article className="w_1200">
                        <div>
                          <Row className="py-3 mx_1 px-sm-4 px-2 align-items-center bg_light_gray2 ">
                            {install.map((use) => {
                              return (
                                <div className="col-2">
                                  <div className="d-flex">
                                    <p className="ff-inter fw-normal fs_14 text_gray_80  mb-0">
                                      {use.para}
                                    </p>
                                  </div>
                                </div>
                              );
                            })}
                          </Row>
                          <Row className="py-3 mx_1 px-sm-4 px-2 align-items-center border_bottom ">
                            {Zepplin.map((use) => {
                              return (
                                <div className="col-2">
                                  <div className="d-flex align-items-center">
                                    <img src={use.img} alt="" />
                                    <p className=" mb-0 ff_inter fw-semibold fs_14 text_dark_28">
                                      {use.heading}
                                    </p>
                                    <p className=" ff_inter fw-normal fs_14 text_gray_80 mb-0">
                                      {use.paragraph}
                                    </p>
                                  </div>
                                </div>
                              );
                            })}
                          </Row>
                          <Row className="py-3 mx_1 px-sm-4 px-2 align-items-center border_bottom ">
                            {Zepplin.map((use) => {
                              return (
                                <div className="col-2">
                                  <div className="d-flex align-items-center">
                                    <img src={use.img1} alt="" />
                                    <p className=" mb-0 ff_inter fw-semibold fs_14 text_dark_28">
                                      {use.heading1}
                                    </p>
                                    <p className=" ff_inter fw-normal fs_14 text_gray_80 mb-0">
                                      {use.paragraph1}
                                    </p>
                                  </div>
                                </div>
                              );
                            })}
                          </Row>
                          <Row className="py-3 mx_1 px-sm-4 px-2 align-items-center border_bottom ">
                            {Zepplin.map((use) => {
                              return (
                                <div className="col-2">
                                  <div className="d-flex align-items-center">
                                    <img src={use.img2} alt="" />
                                    <p className=" mb-0 ff_inter fw-semibold fs_14 text_dark_28">
                                      {use.heading2}
                                    </p>
                                    <p className=" ff_inter fw-normal fs_14 text_gray_80 mb-0">
                                      {use.paragraph2}
                                    </p>
                                  </div>
                                </div>
                              );
                            })}
                          </Row>
                          <Row className="py-3 mx_1 px-sm-4 px-2 align-items-center border_bottom ">
                            {Zepplin.map((use) => {
                              return (
                                <div className="col-2">
                                  <div className="d-flex align-items-center">
                                    <img src={use.img3} alt="" />
                                    <p className=" mb-0 ff_inter fw-semibold fs_14 text_dark_28">
                                      {use.heading3}
                                    </p>
                                    <p className=" ff_inter fw-normal fs_14 text_gray_80 mb-0">
                                      {use.paragraph3}
                                    </p>
                                  </div>
                                </div>
                              );
                            })}
                          </Row>
                          <Row className="py-3 mx_1 px-sm-4 px-2 align-items-center border_bottom ">
                            {Zepplin.map((use) => {
                              return (
                                <div className="col-2">
                                  <div className="d-flex align-items-center">
                                    <img src={use.img4} alt="" />
                                    <p className=" mb-0 ff_inter fw-semibold fs_14 text_dark_28">
                                      {use.heading4}
                                    </p>
                                    <p className=" ff_inter fw-normal fs_14 text_gray_80 mb-0">
                                      {use.paragraph4}
                                    </p>
                                  </div>
                                </div>
                              );
                            })}
                          </Row>
                        </div>
                      </article>
                    </div>
                  </div>
                  <div className="">
                    <div className="overflow-auto ">
                      <article className="w_1200">
                        <div>
                          <Row className="py-3 mx_1 px-sm-4 px-2 align-items-center bg_light_gray2 ">
                            {install.map((use) => {
                              return (
                                <div className="col-2">
                                  <div className="d-flex">
                                    <p className="ff-inter fw-normal fs_14 text_gray_80  mb-0">
                                      {use.para}
                                    </p>
                                  </div>
                                </div>
                              );
                            })}
                          </Row>
                          <Row className="py-3 mx_1 px-sm-4 px-2 align-items-center border_bottom ">
                            {Zepplin.map((use) => {
                              return (
                                <div className="col-2">
                                  <div className="d-flex align-items-center">
                                    <img src={use.img} alt="" />
                                    <p className=" mb-0 ff_inter fw-semibold fs_14 text_dark_28">
                                      {use.heading}
                                    </p>
                                    <p className=" ff_inter fw-normal fs_14 text_gray_80 mb-0">
                                      {use.paragraph}
                                    </p>
                                  </div>
                                </div>
                              );
                            })}
                          </Row>
                          <Row className="py-3 mx_1 px-sm-4 px-2 align-items-center border_bottom ">
                            {Zepplin.map((use) => {
                              return (
                                <div className="col-2">
                                  <div className="d-flex align-items-center">
                                    <img src={use.img1} alt="" />
                                    <p className=" mb-0 ff_inter fw-semibold fs_14 text_dark_28">
                                      {use.heading1}
                                    </p>
                                    <p className=" ff_inter fw-normal fs_14 text_gray_80 mb-0">
                                      {use.paragraph1}
                                    </p>
                                  </div>
                                </div>
                              );
                            })}
                          </Row>
                          <Row className="py-3 mx_1 px-sm-4 px-2 align-items-center border_bottom ">
                            {Zepplin.map((use) => {
                              return (
                                <div className="col-2">
                                  <div className="d-flex align-items-center">
                                    <img src={use.img2} alt="" />
                                    <p className=" mb-0 ff_inter fw-semibold fs_14 text_dark_28">
                                      {use.heading2}
                                    </p>
                                    <p className=" ff_inter fw-normal fs_14 text_gray_80 mb-0">
                                      {use.paragraph2}
                                    </p>
                                  </div>
                                </div>
                              );
                            })}
                          </Row>
                          <Row className="py-3 mx_1 px-sm-4 px-2 align-items-center border_bottom ">
                            {Zepplin.map((use) => {
                              return (
                                <div className="col-2">
                                  <div className="d-flex align-items-center">
                                    <img src={use.img3} alt="" />
                                    <p className=" mb-0 ff_inter fw-semibold fs_14 text_dark_28">
                                      {use.heading3}
                                    </p>
                                    <p className=" ff_inter fw-normal fs_14 text_gray_80 mb-0">
                                      {use.paragraph3}
                                    </p>
                                  </div>
                                </div>
                              );
                            })}
                          </Row>
                          <Row className="py-3 mx_1 px-sm-4 px-2 align-items-center border_bottom ">
                            {Zepplin.map((use) => {
                              return (
                                <div className="col-2">
                                  <div className="d-flex align-items-center">
                                    <img src={use.img4} alt="" />
                                    <p className=" mb-0 ff_inter fw-semibold fs_14 text_dark_28">
                                      {use.heading4}
                                    </p>
                                    <p className=" ff_inter fw-normal fs_14 text_gray_80 mb-0">
                                      {use.paragraph4}
                                    </p>
                                  </div>
                                </div>
                              );
                            })}
                          </Row>
                        </div>
                      </article>
                    </div>
                  </div>
                </Slider>
              </div>
              <div className="d-flex justify-content-center align-items-center mx-4 py-4 bg-white  bottom_radius mb-5">
                <span onClick={() => setCount(count - 1)}>
                  <img
                    // onClick={myNext.current.slickPrev()}
                    // onClick={myNext.current.slickPrev()}
                    src={left_arrow}
                    alt="left_arrow"
                  />
                </span>
                <p className=" mb-0 ff_inter fw-normal fs_18 text_dark_28 py-2">
                  {1 + count}/15
                </p>
                <span onClick={() => setCount(count + 1)}>
                  {" "}
                  <img
                    // onClick={myNext.current.slickNext()}
                    // onClick={myNext.current.slickNext()}
                    src={rigth_arrow}
                    alt="rigth_arrow"
                  />
                </span>
              </div>
            </div>
          </Row>
        </div>
      </section>
    </>
  );
}

export default Header;
