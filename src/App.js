import React from 'react';
import './style.css';
import $ from 'jquery';
import AOS from 'aos';

export default function App() {
  return (
    <div>
      <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="style.css" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
          integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
          crossorigin="anonymous"
        />
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
          integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk"
          crossorigin="anonymous"
        />
        <title>Franco Casuscelli</title>
        <link
          rel="icon"
          href="https://imagizer.imageshack.com/img923/3931/aDdPfW.png"
        />
      </head>
      <body>
        <div className="container-fluid" id="fijo">
          <div className="row">
            <div className="col">
              <img
                src="https://imagizer.imageshack.com/img924/2277/y4QvbM.png"
                alt="fc"
                id="logo"
                data-aos="fade"
              />
            </div>
          </div>
        </div>
        <div className="container-fluid" id="borde">
          <div className="row" id="caja">
            <div
              className="col-6"
              id="hola"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              <p
                id="saludo"
                data-aos="fade"
                data-aos-delay="500"
                data-aos-duration="800"
              >
                HE
                <span style={{ color: '#ec5353' }}>
                  LLO<span style={{ color: '#212529' }}>.</span>
                </span>
              </p>
              <div id="texto-inicio">
                <p
                  data-aos="fade-up"
                  id="base"
                  data-aos-offset="60"
                  data-aos-delay="200"
                  data-aos-duration="500"
                >
                  {' '}
                  <span style={{ color: '#212529' }}>
                    Welcome to my portfolio!{' '}
                  </span>
                  <span style={{ color: '#FFFFFF' }}>
                    I’m Franco Casuscelli, full stack web developer.
                  </span>
                </p>
              </div>
              <a href="#services" className="go-down-arrow bounce" />
            </div>
            <div
              className="col-6"
              id="segundo"
              data-aos="fade-down"
              data-aos-duration="1000"
            />
          </div>
        </div>
        <a class="ir-arriba" title="Volver arriba">
          <span class="fa-stack">
            <i class="fa fa-circle fa-stack-2x" />
            <i class="fa fa-arrow-up fa-stack-1x fa-inverse" />
          </span>
        </a>
        <div className="container-fluid">
          <div className="row" id="boorar">
            <div className="col-12">
              <p
                id="about"
                data-aos="fade-right"
                data-aos-delay="300"
                data-aos-offset="50"
                data-aos-duration="1000"
              >
                ABOUT ME
              </p>
            </div>
            <div className="col-12">
              <p
                id="me"
                data-aos="fade"
                data-aos-delay="500"
                data-aos-offset="100"
                data-aos-duration="800"
              >
                My name is <strong>Franco Casuscelli</strong> a passionate about
                the immense world of programming and web development. I would
                like to be able to grow in the professional and continue
                learning with more experienced people, in addition to being able
                to generate a good work environment and generate value for the
                work team, I am a person who follows responsibly the proposed
                projects and works together with the group designated for each
                project, I consider myself a detail person where my tastes are
                in sight.
              </p>
              <img
                id="perfil"
                src="https://imagizer.imageshack.com/img923/228/h34iHp.jpg"
                alt="foto-perfil"
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-offset="100"
                data-aos-duration="800"
              />
              <div
                id="cv"
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-offset="50"
                data-aos-duration="700"
              >
                <button
                  type="button"
                  className="btn btn-secondary active"
                  data-toggle="button"
                  aria-pressed="false"
                >
                  <a
                    href="https://drive.google.com/file/d/1s1VKueCZDlLbA--vN8B-b4YetQ-fU15C/view?usp=sharing"
                    download
                    target="_blank"
                  >
                    CV IN ENGLISH
                  </a>
                </button>
                <button
                  type="button"
                  className="btn btn-secondary active"
                  data-toggle="button"
                  aria-pressed="false"
                >
                  <a
                    href="https://drive.google.com/file/d/1Tg45DHMbnzFsqGYo03r_Ye5Gf9jPUR0Z/view?usp=sharing"
                    download
                    target="_blank"
                  >
                    CV IN SPANISH
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row" id="base-projects">
            <div className="col-12">
              <p
                id="projects"
                data-aos="slide-right"
                data-aos-delay="0"
                data-aos-offset="80"
                data-aos-duration="1000"
              >
                PROJECTS
              </p>
              <p
                id="linea"
                data-aos="fade-up"
                data-aos-delay="0"
                data-aos-offset="100"
                data-aos-duration="1000"
              />
              <div className="row row-cols-1" id="cartas">
                <div
                  className="col mb-4"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <div className="card">
                    <img
                      class="card-img-top"
                      src="https://imagizer.imageshack.com/img922/1978/TxjDLE.png"
                      alt="kitchening"
                    />
                    <div
                      className="card-body"
                      data-aos="fade-right"
                      data-aos-duration="900"
                    >
                      <a
                        href="https://github.com/Franco-Casuscelli/kitchening"
                        target="_blank"
                      >
                        <p className="card-title">kitchening</p>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="col mb-4"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <div className="card">
                    <img
                      class="card-img-top"
                      src="https://imagizer.imageshack.com/img922/429/2OXADX.jpg"
                      alt="Coco"
                    />
                    <div
                      className="card-body"
                      data-aos="fade-right"
                      data-aos-duration="900"
                    >
                      <a
                        href="https://github.com/0220CBFSNCN01ARCO/COCO"
                        target="_blank"
                      >
                        <p className="card-title">Coco</p>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="col mb-4"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <div className="card">
                    <img
                      class="card-img-top"
                      src="https://imagizer.imageshack.com/img924/9504/BZVx9i.png"
                      alt="Norman Borlaug"
                    />
                    <div
                      className="card-body"
                      data-aos="fade-right"
                      data-aos-duration="900"
                    >
                      <a
                        href="https://codepen.io/FCasuscelli/details/XWKNYQX"
                        target="_blank"
                      >
                        <p className="card-title">Dr. Norman Borlaug</p>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="col mb-4"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <div className="card">
                    <img
                      class="card-img-top"
                      src="https://imagizer.imageshack.com/img922/1209/vXy6YG.png"
                      alt="Form"
                    />
                    <div
                      className="card-body"
                      data-aos="fade-right"
                      data-aos-duration="900"
                    >
                      <a
                        href="https://codepen.io/FCasuscelli/details/abZBPMx"
                        target="_blank"
                      >
                        <p className="card-title">Survey Form</p>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="col mb-4"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <div className="card">
                    <img
                      class="card-img-top"
                      src="https://imagizer.imageshack.com/img924/8568/KYzAF5.png"
                      alt="trombones"
                    />
                    <div
                      className="card-body"
                      data-aos="fade-right"
                      data-aos-duration="900"
                    >
                      <a
                        href="https://codepen.io/FCasuscelli/details/JjKbVVQ"
                        target="_blank"
                      >
                        <p className="card-title">Product landing page</p>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="col mb-4"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <div className="card">
                    <img
                      class="card-img-top"
                      src="https://imagizer.imageshack.com/img923/2930/10oTrn.png"
                      alt="tecnical documentation"
                    />
                    <div
                      className="card-body"
                      data-aos="fade-right"
                      data-aos-duration="900"
                    >
                      <a
                        href="https://codepen.io/FCasuscelli/details/RwRKGwd"
                        target="_blank"
                      >
                        <p className="card-title">
                          tecnical documentation page
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="col mb-4"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <div className="card">
                    <img
                      class="card-img-top"
                      src="https://imagizer.imageshack.com/img922/8867/p1gj4n.png"
                      alt="portfolio"
                    />
                    <div
                      className="card-body"
                      data-aos="fade-right"
                      data-aos-duration="900"
                    >
                      <a
                        href="https://codepen.io/FCasuscelli/details/OJXWjBX"
                        target="_blank"
                      >
                        <p className="card-title">portfolio webpage</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row" id="footer">
            <div className="col-12">
              <p
                id="contact"
                data-aos="fade"
                data-aos-delay="0"
                data-aos-duration="1000"
              >
                CONTACT
              </p>
              <div id="deco">
                <p
                  id="email"
                  data-aos="fade-left"
                  data-aos-offset="-1"
                  data-aos-delay="0"
                  data-aos-duration="500"
                >
                  <i className="fas fa-envelope fa-lg" />{' '}
                  franco.casuscelli5@gmail.com
                </p>
                <p
                  data-aos="fade-right"
                  data-aos-offset="-1"
                  data-aos-delay="0"
                  data-aos-duration="1000"
                >
                  <a
                    id="email"
                    href="https://www.linkedin.com/in/franco-casuscelli-b84744196/"
                    target="_blank"
                  >
                    <i className="fab fa-linkedin fa-lg" />{' '}
                    /franco-casuscelli-b84744196
                  </a>
                </p>
                <p
                  data-aos="fade-up"
                  data-aos-offset="-1"
                  data-aos-delay="0"
                  data-aos-duration="1100"
                >
                  <a
                    id="email"
                    href="https://github.com/Franco-Casuscelli"
                    target="_blank"
                  >
                    <i className="fab fa-github fa-lg" /> /Franco-Casuscelli
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div id="barra-footer">
              <p data-aos="fade" data-aos-offset="-1">
                2021 © Franco Casuscelli
              </p>
            </div>
          </div>
        </div>
        <script
          src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"
          type="text/javascript"
        />
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js" />
        {AOS.init()}
        <script
          src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
          integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
          crossorigin="anonymous"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns"
          crossorigin="anonymous"
        />
        <script
          src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"
          type="text/javascript"
        />

        <script
          {...$(function() {
            $(window).scroll(function() {
              if ($(document).scrollTop() >= 5) {
                $('#caja').css('animation', 'pruebamov 1s 1');
                $('#caja').css('animation-fill-mode', 'forwards');
              }
              if ($(document).scrollTop() == 0) {
                $('#caja').css('animation', 'pruebamov2 1s 1');
                $('#caja').css('animation-fill-mode', 'forwards');
              }
            });
          })}
        />
      </body>
    </div>
  );
}
