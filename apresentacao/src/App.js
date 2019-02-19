import React, { Component } from "react"
import "./App.css"
import "webslides/static/js/webslides.js"
import "webslides/static/js/svg-icons.js"

/* global WebSlides */
class App extends Component {
  componentDidMount() {
    window.ws = new WebSlides()
  }

  render() {
    return (
      <div className="App">
        <main role="main">
          <article id="webslides" className="vertical">
            {/** Quick Guide
          - Each parent <section> in the <article id="webslides"> element is an individual slide.
          - Vertical sliding = <article id="webslides" className="vertical">
          - <div className="wrap"> = container 90% / <div className="wrap size-50"> = 45%;
        **/}
            <section class="bg-primary aligncenter">
              <span
                class="background dark"
                style={{
                  backgroundImage: "url('images/skull.jpg')"
                }}
              />
              <div class="wrap">
                <div className="content-left">
                  <h1>
                    O Pensamento Computacional como Recurso para Aprendizagem
                    Científica
                  </h1>
                  <br />
                  <p className="" style={{ marginBottom: 0 }}>
                    <strong>Autor:</strong> Hellon Canella Machado
                  </p>
                  <p className="">
                    <strong>Orientador:</strong> Dr. Hélio Salim de Amorim
                  </p>
                  {/* <h1 class="text-landing">Landings</h1>

                <p class="text-symbols">* * * </p> */}
                  {/* <p>
                    <a
                      class="button ghost"
                      href="https://github.com/webslides/webslides"
                      title="Download WebSlides for free"
                    >
                      <svg class="fa-github">
                        <use xlinkHref="#fa-github" />
                      </svg>{" "}
                      WebSlides
                    </a>
                  </p> */}
                </div>
              </div>
            </section>

            <section>
              <span
                className="background"
                style={{
                  "background-image":
                    "url('https://webslides.tv/static/images/nature.jpg')"
                }}
              />
              <div className="wrap alignleft">
                <h1>
                  <strong>Create beautiful stories</strong>
                </h1>
                <p className="text-intro">
                  WebSlides makes HTML presentations easy.
                  <br />
                  Just the essentials and using lovely CSS.
                </p>
                <p>
                  <a
                    href="https://webslides.tv/webslides-latest.zip"
                    className="button zoomIn"
                    title="Download WebSlides for free"
                  >
                    <svg className="fa-cloud-download">
                      <use xlinkHref="#fa-cloud-download" />
                    </svg>
                    WebSlides
                  </a>
                </p>
                <ul className="flexblock steps">
                  <li>Oio</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                  <li>Item 4</li>
                </ul>
              </div>
            </section>
            <section>
              <div className="wrap size-50 aligncenter">
                <h2>
                  <strong>Why WebSlides?</strong>
                </h2>
                <p className="text-intro">
                  <a href="demos/why-webslides.html" title="Why WebSlides?">
                    Presentations
                  </a>
                  ,{" "}
                  <a href="demos/landings.html" title="Landings">
                    landings
                  </a>
                  ,{" "}
                  <a href="demos/portfolios.html" title="Portfolios">
                    portfolios
                  </a>
                  , and{" "}
                  <a href="demos/longforms.html" title="Longforms">
                    longforms
                  </a>
                  .
                </p>
                <div className="bg-white shadow">
                  <ul className="flexblock reasons">
                    <li>
                      <h2>An opportunity to engage.</h2>
                      <p>
                        WebSlides is about good karma. This is about telling the
                        story, and sharing it in a beautiful way. HTML and CSS
                        as narrative elements.
                      </p>
                    </li>
                    <li>
                      <h2>Work better, faster.</h2>
                      <p>
                        Designers, marketers, and journalists can now focus on
                        the content. Simply{" "}
                        <a href="demos/index.html" title="WebSlides Demos">
                          choose a demo
                        </a>{" "}
                        and customize it in minutes.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            <section>
              <div className="wrap">
                <div className="grid vertical-align">
                  <div className="column">
                    <h3>
                      <strong>WebSlides is really easy</strong>
                    </h3>
                    <p className="text-intro">
                      Each parent <code>&lt;section&gt;</code> in the #webslides
                      element is an individual slide.{" "}
                    </p>
                    <p>
                      Code is clean and scalable. It uses{" "}
                      <strong>intuitive markup</strong> with popular naming
                      conventions. There's no need to overuse classes or
                      nesting.{" "}
                      <strong>
                        Making an HTML presentation has never been so fast
                      </strong>
                      .
                    </p>
                  </div>
                  <div className="column">
                    <pre>
                      &lt;article id="webslides"&gt;
                      <span className="code-comment">
                        &lt;!-- Slide 1 --&gt;
                      </span>
                      &lt;section&gt; &lt;h1&gt;Design for trust&lt;/h1&gt;
                      &lt;/section&gt;
                      <span className="code-comment">
                        &lt;!-- Slide 2 --&gt;
                      </span>
                      &lt;section className="bg-primary"&gt; &lt;div
                      className="wrap"&gt; &lt;h2&gt;.wrap = container (width:
                      90%)&lt;/h2&gt; &lt;/div&gt; &lt;/section&gt;
                      &lt;/article&gt;
                    </pre>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <div className="wrap">
                <h2>Features</h2>
                <ul className="flexblock features">
                  <li>
                    <div>
                      <h2>
                        <span>&rarr;</span>
                        Simple Navigation
                      </h2>
                      with arrow keys, presenter...
                    </div>
                  </li>
                  <li>
                    <div>
                      <h2>
                        <svg className="fa-link">
                          <use xlinkHref="#fa-link" />
                        </svg>
                        Permalinks
                      </h2>
                      Go to a specific slide.
                    </div>
                  </li>
                  <li>
                    <div>
                      <h2>
                        <svg className="fa-clock-o">
                          <use xlinkHref="#fa-clock-o" />
                        </svg>
                        Slide Counter
                      </h2>
                      Current/Total number.
                    </div>
                  </li>
                  <li>
                    <div>
                      <h2>
                        <span>
                          40<sup>+</sup>
                        </span>
                        Beautiful Components
                      </h2>
                      Covers, cards, quotes...
                    </div>
                  </li>
                  <li>
                    <div>
                      <h2>
                        <svg className="fa-text-height">
                          <use xlinkHref="#fa-text-height" />
                        </svg>
                        Vertical Rhythm
                      </h2>
                      Use multiples of 8.
                    </div>
                  </li>
                  <li>
                    <div>
                      <h2>
                        <span>
                          500<sup>+</sup>
                        </span>
                        SVG Icons
                      </h2>
                      Font Awesome Kit.
                    </div>
                  </li>
                </ul>
              </div>
            </section>
            <section>
              <div className="wrap">
                <h2>
                  <strong>WebSlides Demos</strong>
                </h2>
                <p>
                  Contribute on{" "}
                  <a
                    href="https://github.com/webslides/webslides"
                    title="Contribute on Github"
                  >
                    Github
                  </a>
                  .{" "}
                  <span className="alignright">
                    <a href="demos/index.html" title="WebSlides Demos">
                      View all &rsaquo;
                    </a>
                  </span>
                </p>
                <ul className="flexblock gallery">
                  <li>
                    <a href="demos/why-webslides.html" title="Why WebSlides?">
                      <figure>
                        <img
                          alt="Thumbnail Why WebSlides?"
                          src="https://webslides.tv/static/images/demos-why.png"
                        />
                        <figcaption>
                          <h2>Why WebSlides?</h2>
                        </figcaption>
                      </figure>
                    </a>
                  </li>
                  <li>
                    <a href="demos/landings.html" title="Landings">
                      <figure>
                        <img
                          alt="Thumbnail Landings"
                          src="https://webslides.tv/static/images/demos-landings.png"
                        />
                        <figcaption>
                          <h2>Landings</h2>
                        </figcaption>
                      </figure>
                    </a>
                  </li>
                  <li>
                    <a href="demos/portfolios.html" title="Portfolios">
                      <figure>
                        <img
                          alt="Thumbnail Portfolios"
                          src="https://webslides.tv/static/images/demos-portfolios.png"
                        />
                        <figcaption>
                          <h2>Portfolios</h2>
                        </figcaption>
                      </figure>
                    </a>
                  </li>
                  <li>
                    <a href="demos/keynote.html" title="Apple Keynote">
                      <figure>
                        <img
                          alt="Thumbnail Apple Keynote"
                          src="https://webslides.tv/static/images/demos-apple.png"
                        />
                        <figcaption>
                          <h2>Apple Keynote</h2>
                        </figcaption>
                      </figure>
                    </a>
                  </li>
                </ul>
              </div>
            </section>
            <section>
              <div className="wrap">
                <div className="grid vertical-align">
                  <div className="column">
                    <h4>
                      <svg className="fa-life-ring">
                        <use xlinkHref="#fa-life-ring" />
                      </svg>
                      <strong>Guides</strong>
                    </h4>
                    <p>
                      If you need help, here's just three tutorials. Just a
                      basic knowledge of HTML is required:
                    </p>
                    <ul className="description">
                      <li>
                        <a
                          href="demos/components.html"
                          title="WebSlides Components"
                        >
                          WebSlides Components
                        </a>
                        .
                      </li>
                      <li>
                        <a href="demos/classes.html" title="WebSlides Classes">
                          WebSlides Classes
                        </a>
                        .
                      </li>
                      <li>
                        <a href="demos/media.html" title="WebSlides Media">
                          WebSlides Media: images, videos...
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="column">
                    <figure>
                      <img
                        className="aligncenter"
                        src="static/images/setup.png"
                        alt="WebSlides Files"
                      />
                    </figure>
                  </div>
                  <div className="column">
                    <h4>
                      <svg className="fa-cubes">
                        <use xlinkHref="#fa-cubes" />
                      </svg>
                      <strong>Built to expand</strong>
                    </h4>
                    <p>
                      The best way to <strong>inspire with your content</strong>{" "}
                      is to connect on a personal level:
                    </p>
                    <ul className="description">
                      <li>
                        Background images:{" "}
                        <a href="http://unsplash.com">Unsplash</a>.
                      </li>
                      <li>
                        CSS animations:{" "}
                        <a href="https://daneden.github.io/animate.css/">
                          Animate.css
                        </a>
                        .
                      </li>
                      <li>
                        Longforms:{" "}
                        <a href="http://michalsnik.github.io/aos/">
                          {" "}
                          Animate on scroll
                        </a>
                        .
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            <section className="aligncenter">
              <div className="wrap">
                <h2>
                  <strong>Ready to Start?</strong>{" "}
                </h2>
                <p className="text-intro">
                  Create your own presentation instantly. <br />
                  120+ premium slides ready to use.
                </p>
                <p>
                  <a
                    href="https://webslides.tv/webslides-latest.zip"
                    className="button"
                    title="Download WebSlides"
                  >
                    <svg className="fa-cloud-download">
                      <use xlinkHref="#fa-cloud-download" />
                    </svg>
                    Free Download
                  </a>
                  <span className="try">
                    <a
                      href="https://www.paypal.me/jlantunez/8"
                      title="Thanks :)"
                    >
                      <svg className="fa-paypal">
                        <use xlinkHref="#fa-paypal" />
                      </svg>
                      Pay what you want.
                    </a>
                  </span>
                </p>
              </div>
            </section>
            <section className="slide-bottom">
              <div className="wrap">
                <div className="content-right text-serif">
                  <h2>
                    <strong>Thanks.</strong>
                    <a
                      target="_blank"
                      title="Share on Twitter"
                      href="https://twitter.com/intent/tweet?text=Finally,%20everything%20you%20need%20to%20make%20HTML%20presentations%20in%20a%20fast/beautiful%20way.%20@WebSlides%20=%20Good%20karma%20&mdash;%20https://webslides.tv"
                    >
                      <svg className="fa-twitter">
                        <use xlinkHref="#fa-twitter" />
                      </svg>
                    </a>
                  </h2>
                  <p>
                    People share content that makes them feel inspired.
                    WebSlides is a very effective way to engage young audiences,
                    customers, and teams.
                  </p>
                  <p>
                    Best,
                    <br />{" "}
                    <a href="https://twitter.com/jlantunez">@jlantunez</a>,{" "}
                    <a href="https://twitter.com/belelros">@belelros</a>, and{" "}
                    <a href="https://twitter.com/luissacristan">
                      @luissacristan
                    </a>
                    .
                  </p>
                </div>
              </div>
            </section>
          </article>
        </main>
      </div>
    )
  }
}

export default App
