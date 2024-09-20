(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    13: function (e, t, a) {},
    15: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(0),
        r = a.n(n),
        o = a(7),
        i = a.n(o),
        c = (a(13), a(2)),
        l = a(3),
        s = a(5),
        m = a(4),
        u = a(1);
      function p(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var a,
            n = Object(u.a)(e);
          if (t) {
            var r = Object(u.a)(this).constructor;
            a = Reflect.construct(n, arguments, r);
          } else a = n.apply(this, arguments);
          return Object(m.a)(this, a);
        };
      }
      var f = (function (e) {
        Object(s.a)(a, e);
        var t = p(a);
        function a() {
          return Object(c.a)(this, a), t.apply(this, arguments);
        }
        return (
          Object(l.a)(a, [
            {
              key: "render",
              value: function () {
                var e = this.props.resumeData;
                return r.a.createElement(
                  r.a.Fragment,
                  null,
                  r.a.createElement(
                    "header",
                    { id: "home" },
                    r.a.createElement(
                      "nav",
                      { id: "nav-wrap" },
                      r.a.createElement(
                        "a",
                        {
                          className: "mobile-btn",
                          href: "#nav-wrap",
                          title: "Show navigation",
                        },
                        "Show navigation"
                      ),
                      r.a.createElement(
                        "a",
                        {
                          className: "mobile-btn",
                          href: "#",
                          title: "Hide navigation",
                        },
                        "Hide navigation"
                      ),
                      r.a.createElement(
                        "ul",
                        { id: "nav", className: "nav" },
                        r.a.createElement(
                          "li",
                          { className: "current" },
                          r.a.createElement(
                            "a",
                            { className: "smoothscroll", href: "#home" },
                            "Home"
                          )
                        ),
                        r.a.createElement(
                          "li",
                          null,
                          r.a.createElement(
                            "a",
                            { className: "smoothscroll", href: "#about" },
                            "About"
                          )
                        ),
                        r.a.createElement(
                          "li",
                          null,
                          r.a.createElement(
                            "a",
                            { className: "smoothscroll", href: "#resume" },
                            "Resume"
                          )
                        ),
                        r.a.createElement(
                          "li",
                          null,
                          r.a.createElement(
                            "a",
                            { className: "smoothscroll", href: "#portfolio" },
                            "Works"
                          )
                        ),
                        r.a.createElement(
                          "li",
                          null,
                          r.a.createElement(
                            "a",
                            { className: "smoothscroll", href: "#outreach" },
                            "Outreach"
                          )
                        )
                      )
                    ),
                    r.a.createElement(
                      "div",
                      { className: "row banner" },
                      r.a.createElement(
                        "div",
                        { className: "banner-text" },
                        r.a.createElement(
                          "h1",
                          { className: "responsive-headline" },
                          e.name
                        ),
                        r.a.createElement(
                          "h3",
                          {
                            style: { color: "#fff", fontFamily: "sans-serif " },
                          },
                          "I am a full-stack developer and software engineer who builds user-friendly and scalable applications. In my free time I like to cook and read mystery novels."
                        ),
                        r.a.createElement("hr", null),
                        r.a.createElement(
                          "ul",
                          { className: "social" },
                          e.socialLinks &&
                            e.socialLinks.map(function (e) {
                              return r.a.createElement(
                                "li",
                                { key: e.name },
                                r.a.createElement(
                                  "a",
                                  { href: e.url, target: "_blank" },
                                  r.a.createElement("i", {
                                    className: e.className,
                                  })
                                )
                              );
                            })
                        )
                      )
                    ),
                    r.a.createElement(
                      "p",
                      { className: "scrolldown" },
                      r.a.createElement(
                        "a",
                        { className: "smoothscroll", href: "#about" },
                        r.a.createElement("i", {
                          className: "icon-down-circle",
                        })
                      )
                    )
                  )
                );
              },
            },
          ]),
          a
        );
      })(n.Component);
      function d(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var a,
            n = Object(u.a)(e);
          if (t) {
            var r = Object(u.a)(this).constructor;
            a = Reflect.construct(n, arguments, r);
          } else a = n.apply(this, arguments);
          return Object(m.a)(this, a);
        };
      }
      var h = (function (e) {
        Object(s.a)(a, e);
        var t = d(a);
        function a() {
          return Object(c.a)(this, a), t.apply(this, arguments);
        }
        return (
          Object(l.a)(a, [
            {
              key: "render",
              value: function () {
                var e = this.props.resumeData;
                return r.a.createElement(
                  "section",
                  { id: "about" },
                  r.a.createElement(
                    "div",
                    { className: "row" },
                    r.a.createElement(
                      "div",
                      { className: "three columns" },
                      r.a.createElement("img", {
                        className: "profile-pic",
                        src: "images/profilepic.jpg",
                        alt: "",
                      })
                    ),
                    r.a.createElement(
                      "div",
                      { className: "nine columns main-col" },
                      r.a.createElement("h2", null, "About Me"),
                      r.a.createElement(
                        "p",
                        null,
                        "Hello! I am an Electrical Engineering masters students with a focus on Biomedical Engineering. Currently I am studying the effects of repetitive Transcranial Magnetic Stimultion(rTMS) on EEG readings of people with Major Deppressive Disorder(MDD) with Dr.Deborah Won. My research lab is aiming for an objective biomarker for MDD that is easily accesible, so that doctors and patients can have an easier time in identifying mental diseases. I love doing projects that broaden my understanding of technology. You can find some of my projects that I am most proud of below. Besides work, I enjoy music enough to label myself an amatuer singer and also dabble in weightlifting."
                      ),
                      r.a.createElement(
                        "div",
                        { className: "row" },
                        r.a.createElement(
                          "div",
                          { className: "columns contact-details" },
                          r.a.createElement("h2", null, "Contact Details"),
                          r.a.createElement(
                            "p",
                            { className: "address" },
                            r.a.createElement("span", null, e.name),
                            r.a.createElement("br", null),
                            r.a.createElement("span", null, e.email)
                          )
                        )
                      )
                    )
                  )
                );
              },
            },
          ]),
          a
        );
      })(n.Component);
      function g(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var a,
            n = Object(u.a)(e);
          if (t) {
            var r = Object(u.a)(this).constructor;
            a = Reflect.construct(n, arguments, r);
          } else a = n.apply(this, arguments);
          return Object(m.a)(this, a);
        };
      }
      var v = (function (e) {
        Object(s.a)(a, e);
        var t = g(a);
        function a() {
          return Object(c.a)(this, a), t.apply(this, arguments);
        }
        return (
          Object(l.a)(a, [
            {
              key: "render",
              value: function () {
                var e = this.props.resumeData;
                return r.a.createElement(
                  "section",
                  { id: "resume" },
                  r.a.createElement(
                    "div",
                    { className: "row education" },
                    r.a.createElement(
                      "div",
                      { className: "three columns header-col" },
                      r.a.createElement(
                        "h1",
                        null,
                        r.a.createElement("span", null, "Education")
                      )
                    ),
                    r.a.createElement(
                      "div",
                      { className: "nine columns main-col" },
                      e.education &&
                        e.education.map(function (e) {
                          return r.a.createElement(
                            "div",
                            {
                              style: { marginBottom: 40 },
                              className: "row item",
                            },
                            r.a.createElement(
                              "div",
                              { className: "twelve columns" },
                              r.a.createElement("h3", null, e.UniversityName),
                              r.a.createElement(
                                "p",
                                { className: "info" },
                                e.specialization,
                                r.a.createElement("span", null, "\u2022"),
                                " ",
                                r.a.createElement(
                                  "em",
                                  { className: "date" },
                                  e.MonthOfPassing,
                                  " ",
                                  e.YearOfPassing
                                )
                              ),
                              e.Achievements.map(function (e) {
                                return r.a.createElement(
                                  "p",
                                  { style: { margin: 0 } },
                                  e
                                );
                              })
                            )
                          );
                        })
                    )
                  ),
                  r.a.createElement(
                    "div",
                    { className: "row work" },
                    r.a.createElement(
                      "div",
                      { className: "three columns header-col" },
                      r.a.createElement(
                        "h1",
                        null,
                        r.a.createElement("span", null, "Work")
                      )
                    ),
                    r.a.createElement(
                      "div",
                      { className: "nine columns main-col" },
                      e.work &&
                        e.work.map(function (e) {
                          return r.a.createElement(
                            "div",
                            {
                              style: { marginBottom: 40 },
                              className: "row item",
                            },
                            r.a.createElement(
                              "div",
                              { className: "twelve columns" },
                              r.a.createElement("h3", null, e.CompanyName),
                              r.a.createElement(
                                "p",
                                { className: "info" },
                                e.specialization,
                                r.a.createElement("span", null, "\u2022"),
                                " ",
                                r.a.createElement(
                                  "em",
                                  { className: "date" },
                                  e.MonthOfStarting,
                                  " ",
                                  e.YearOfStarting,
                                  " -",
                                  " ",
                                  e.MonthOfLeaving,
                                  " ",
                                  e.YearOfLeaving
                                )
                              ),
                              e.Achievements &&
                                e.Achievements.map(function (e) {
                                  return r.a.createElement(
                                    "p",
                                    { style: { margin: 0 } },
                                    e
                                  );
                                })
                            )
                          );
                        })
                    )
                  ),
                  r.a.createElement(
                    "div",
                    { className: "row skill" },
                    r.a.createElement(
                      "div",
                      { className: "three columns header-col" },
                      r.a.createElement(
                        "h1",
                        null,
                        r.a.createElement("span", null, "Experience")
                      )
                    ),
                    r.a.createElement(
                      "div",
                      { className: "nine columns main-col" },
                      r.a.createElement(
                        "div",
                        { className: "bars" },
                        r.a.createElement(
                          "ul",
                          { className: "skills" },
                          e.skills &&
                            e.skills.map(function (e) {
                              return r.a.createElement(
                                "li",
                                null,
                                r.a.createElement("span", {
                                  style: { width: "".concat(e.level, "%") },
                                  className: "bar-expand",
                                }),
                                r.a.createElement("em", null, e.skillname)
                              );
                            })
                        )
                      )
                    )
                  ),
                  r.a.createElement(
                    "div",
                    { className: "row download" },
                    r.a.createElement(
                      "div",
                      { className: "twelve columns" },
                      r.a.createElement(
                        "div",
                        { className: "download-button" },
                        r.a.createElement(
                          "ul",
                          { className: "button" },
                          r.a.createElement(
                            "li",
                            null,
                            r.a.createElement(
                              "a",
                              { href: "/reports/cv.pdf", download: !0 },
                              r.a.createElement(
                                "span",
                                null,
                                r.a.createElement("i", {
                                  className: "fa fa-download",
                                }),
                                "\xa0 Download Resume"
                              )
                            )
                          )
                        )
                      )
                    )
                  )
                );
              },
            },
          ]),
          a
        );
      })(n.Component);
      function b(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var a,
            n = Object(u.a)(e);
          if (t) {
            var r = Object(u.a)(this).constructor;
            a = Reflect.construct(n, arguments, r);
          } else a = n.apply(this, arguments);
          return Object(m.a)(this, a);
        };
      }
      var E = (function (e) {
        Object(s.a)(a, e);
        var t = b(a);
        function a() {
          return Object(c.a)(this, a), t.apply(this, arguments);
        }
        return (
          Object(l.a)(a, [
            {
              key: "render",
              value: function () {
                var e = this.props.item;
                return r.a.createElement(
                  "section",
                  { id: "project" },
                  r.a.createElement(
                    "div",
                    { className: "portfolio-item-meta" },
                    r.a.createElement("img", {
                      src: "".concat(e.img1url),
                      className: "img1",
                    }),
                    e.img2url &&
                      r.a.createElement("img", {
                        src: "".concat(e.img2url),
                        className: "img2",
                      }),
                    r.a.createElement("h5", null, e.name),
                    r.a.createElement("p", null, e.description),
                    r.a.createElement("br", null),
                    e.github &&
                      r.a.createElement(
                        r.a.Fragment,
                        null,
                        r.a.createElement(
                          "a",
                          {
                            href: e.github,
                            target: "_blank",
                            rel: "noopener noreferrer",
                          },
                          "Go to github repository"
                        ),
                        r.a.createElement("br", null)
                      ),
                    e.report &&
                      r.a.createElement(
                        r.a.Fragment,
                        null,
                        r.a.createElement(
                          "a",
                          {
                            href: e.report,
                            target: "_blank",
                            rel: "noopener noreferrer",
                          },
                          "Go to project report"
                        ),
                        r.a.createElement("br", null)
                      ),
                    e.video &&
                      r.a.createElement(
                        r.a.Fragment,
                        null,
                        r.a.createElement(
                          "a",
                          {
                            href: e.video,
                            target: "_blank",
                            rel: "noopener noreferrer",
                          },
                          "Go to video"
                        ),
                        r.a.createElement("br", null)
                      ),
                    e.website &&
                      r.a.createElement(
                        r.a.Fragment,
                        null,
                        r.a.createElement(
                          "a",
                          {
                            href: e.website,
                            target: "_blank",
                            rel: "noopener noreferrer",
                          },
                          "Go to website"
                        )
                      ),
                    e.certificate &&
                      r.a.createElement(
                        r.a.Fragment,
                        null,
                        r.a.createElement(
                          "a",
                          {
                            href: e.certificate,
                            target: "_blank",
                            rel: "noopener noreferrer",
                          },
                          "Go to certificate"
                        )
                      )
                  )
                );
              },
            },
          ]),
          a
        );
      })(n.Component);
      function w(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var a,
            n = Object(u.a)(e);
          if (t) {
            var r = Object(u.a)(this).constructor;
            a = Reflect.construct(n, arguments, r);
          } else a = n.apply(this, arguments);
          return Object(m.a)(this, a);
        };
      }
      var y = (function (e) {
        Object(s.a)(a, e);
        var t = w(a);
        function a() {
          return Object(c.a)(this, a), t.apply(this, arguments);
        }
        return (
          Object(l.a)(a, [
            {
              key: "render",
              value: function () {
                var e = this.props.resumeData;
                return r.a.createElement(
                  "section",
                  { id: "portfolio" },
                  r.a.createElement(
                    "div",
                    { className: "row" },
                    r.a.createElement(
                      "div",
                      { className: "twelve columns collapsed" },
                      r.a.createElement(
                        "h1",
                        null,
                        "Check Out Some of My Works."
                      ),
                      r.a.createElement(
                        "div",
                        {
                          id: "portfolio-wrapper",
                          className: "bgrid-quarters s-bgrid-thirds cf",
                        },
                        e.portfolio &&
                          e.portfolio.map(function (e) {
                            return r.a.createElement(
                              "div",
                              { className: "columns portfolio-item" },
                              r.a.createElement(
                                "div",
                                {
                                  id: "project-popup-".concat(e.id),
                                  className: "popup-modal",
                                  style: { display: "none" },
                                },
                                r.a.createElement(E, { item: e })
                              ),
                              r.a.createElement(
                                "div",
                                { className: "item-wrap" },
                                r.a.createElement(
                                  "a",
                                  {
                                    href: "#project-popup-".concat(e.id),
                                    onClick: function () {
                                      document.getElementById(
                                        "project-popup-".concat(e.id)
                                      ).style.display = "block";
                                    },
                                  },
                                  r.a.createElement("img", {
                                    src: "".concat(e.img1url),
                                    className: "item-img",
                                  }),
                                  r.a.createElement(
                                    "div",
                                    { className: "overlay" },
                                    r.a.createElement(
                                      "div",
                                      { className: "portfolio-item-meta" },
                                      r.a.createElement("h5", null, e.name),
                                      r.a.createElement(
                                        "p",
                                        null,
                                        e.shortDescription
                                      )
                                    )
                                  )
                                )
                              )
                            );
                          })
                      )
                    )
                  )
                );
              },
            },
          ]),
          a
        );
      })(n.Component);
      function k(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var a,
            n = Object(u.a)(e);
          if (t) {
            var r = Object(u.a)(this).constructor;
            a = Reflect.construct(n, arguments, r);
          } else a = n.apply(this, arguments);
          return Object(m.a)(this, a);
        };
      }
      var N = (function (e) {
        Object(s.a)(a, e);
        var t = k(a);
        function a() {
          return Object(c.a)(this, a), t.apply(this, arguments);
        }
        return (
          Object(l.a)(a, [
            {
              key: "render",
              value: function () {
                var e = this.props.resumeData;
                return r.a.createElement(
                  "section",
                  { id: "outreach" },
                  r.a.createElement(
                    "div",
                    { className: "text-container" },
                    r.a.createElement(
                      "div",
                      { className: "row" },
                      r.a.createElement(
                        "div",
                        { className: "two columns header-col" },
                        r.a.createElement("h1", null, "Outreach")
                      ),
                      r.a.createElement(
                        "div",
                        { className: "ten columns flex-container" },
                        r.a.createElement(
                          "div",
                          { className: "flexslider" },
                          r.a.createElement(
                            "ul",
                            { className: "slides" },
                            e.outreach &&
                              e.outreach.map(function (e) {
                                return r.a.createElement(
                                  "li",
                                  null,
                                  r.a.createElement(
                                    "blockquote",
                                    null,
                                    r.a.createElement("p", null, e.description),
                                    r.a.createElement(
                                      "p",
                                      { className: "inst" },
                                      e.institution
                                    ),
                                    r.a.createElement("cite", null, e.name)
                                  )
                                );
                              })
                          )
                        ),
                        " "
                      ),
                      " "
                    ),
                    " "
                  ),
                  " "
                );
              },
            },
          ]),
          a
        );
      })(n.Component);
      function O(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var a,
            n = Object(u.a)(e);
          if (t) {
            var r = Object(u.a)(this).constructor;
            a = Reflect.construct(n, arguments, r);
          } else a = n.apply(this, arguments);
          return Object(m.a)(this, a);
        };
      }
      var j = (function (e) {
          Object(s.a)(a, e);
          var t = O(a);
          function a() {
            return Object(c.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(l.a)(a, [
              {
                key: "render",
                value: function () {
                  var e = this.props.resumeData;
                  return r.a.createElement(
                    "footer",
                    null,
                    r.a.createElement(
                      "div",
                      { className: "row" },
                      r.a.createElement(
                        "div",
                        { className: "twelve columns" },
                        r.a.createElement(
                          "ul",
                          { className: "social-links" },
                          e.socialLinks &&
                            e.socialLinks.map(function (e) {
                              return r.a.createElement(
                                "li",
                                null,
                                r.a.createElement(
                                  "a",
                                  { href: e.url },
                                  r.a.createElement("i", {
                                    className: e.className,
                                  })
                                )
                              );
                            })
                        )
                      ),
                      r.a.createElement(
                        "div",
                        { id: "go-top" },
                        r.a.createElement(
                          "a",
                          {
                            className: "smoothscroll",
                            title: "Back to Top",
                            href: "#home",
                          },
                          r.a.createElement("i", { className: "icon-up-open" })
                        )
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(n.Component),
        R = {
          name: "Isuru Rajapakshe",
          socialLinks: [
            {
              name: "linkedin",
              url: "https://linkedin.com/in/isuru-p-rajapakshe/",
              className: "fa fa-linkedin",
            },
            {
              name: "github",
              url: "https://github.com/IsuruPabasara",
              className: "fa fa-github",
            },
            {
              name: "twitter",
              url: "https://twitter.com/IsuruRaj/",
              className: "fa fa-twitter",
            },
          ],
          email: "rmisur@gmail.com",
          education: [
            {
              UniversityName: "University of Moratuwa, Sri Lanka",
              specialization:
                "BSc Engineering in Electronic and Telecommunication Engineering",
              MonthOfPassing: "Aug",
              YearOfPassing: "2021",
              Achievements: [
                "Second Class (Upper Division) Honors with a CGPA of 3.57 out of 4.2",
                "Dean's List Placements - Semesters 1, 6, 7, 8",
              ],
            },
          ],
          work: [
            {
              CompanyName:
                "Insync Information Technologies, Colombo, Sri Lanka",
              specialization: "Software Engineer",
              MonthOfStarting: "Jul",
              YearOfStarting: "2021",
              MonthOfLeaving: "Jul",
              YearOfLeaving: "2022",
            },
            {
              CompanyName: "Lanka Electronics, Minuwangoda, Sri Lanka",
              specialization: "Electronic engineer intern",
              MonthOfStarting: "Jun",
              YearOfStarting: "2019",
              MonthOfLeaving: "Dec",
              YearOfLeaving: "2019",
            },
          ],
          skillsDescription: "Your skills here",
          skills: [
            { skillname: "React JS", level: 90 },
            { skillname: "CSS", level: 71 },
            { skillname: "Javascript", level: 80 },
            { skillname: "Python", level: 60 },
            { skillname: "C#", level: 80 },
            { skillname: "C++(Arduino)", level: 80 },
          ],
          portfolio: [
            {
              name: "Non-Intrusive Power Monitor",
              id: "fyp",
              shortDescription: "2020 Feb. - 2021 Jul.",
              description:
                "This project was done by me and three other team members. Our focus was to develop an accurate power monitor with minimal invasion and real-time remote access which will help reduce electricity wastage in a household. We were able to build a prototype for the project using non-intrusive load monitoring(NILM). We used a clamp ammeter and a voltmeter to measure the instantaneous current and voltage of the main power line to a house and fed this data into a machine-learning model to deduce the power usage of appliances currently used in the house. These deductions can then be viewed by a person remotely real-time using a web interface. I built the web interface using react and hosted it using firebase and also contributed to the circuit design. We experimented with several machine-learning models and were able to outperform sate of the art in regards to real-time capability.",
              github: "https://github.com/IsuruPabasara/FYP-Website.git",
              report: "reports/fyp.pdf",
              video: "https://www.youtube.com/watch?v=IKLFPIjkCOc",
              website: "https://elecmoni.web.app",
              img1url: "images/portfolio/fyp-1.png",
              img2url: "images/portfolio/fyp-2.png",
            },
            {
              name: "LE Robot Software Package",
              id: "lerobot",
              shortDescription: "2019 Jun. - 2019 Sep.",
              description:
                "This was my first assigned project as an engineering trainee at Lanka Electronics Pvt. Ltd. My assigned task was to improve functionality of a software package. The purpose of the software package is to use a 6 degree of freedom to perform welding funtions defined by a user. The package was written in written in C# and I had to develop it's code such that it is capable of generating jerks to perform constant velocity motion with a 6 degree-of-freedom robot arm. After I completed the calculation, I then had to to simulate this motion inside the software by developing an animation tool. After completing this task, me and my supervisor used the generated jerks to test the motion with a real robot arm. We used the software to generate jerks for a path that we wanted and used a HMI to transfer these jerks to the motors in the robot. We were able to achieve about 1% error in its path.",
              report: "reports/lerobot.pdf",
              img1url: "images/portfolio/lerobot-1.png",
              img2url: "images/portfolio/lerobot-2.png",
            },
            {
              name: "Low Cost Human Machine Interface",
              id: "hmi",
              shortDescription: "2019 Sep. - 2019 Dec.",
              description:
                "This was my second assigned project as an engineering trainee at Lanka Electronics Pvt. Ltd. My task was to design and implement a low cost human machine interface. It's function was to communicate with a 6 degree-of-freedom robot arm to perform a welding function. I used a TFT LCD touchscreen and a atmega 128 microcontroller for the HMI. I then developed software using C that will run on the HMI to recieve user commands. The end product had a screen lag but apart from that, performed well in comparision to the high cost HMI in the company.",
              report: "reports/lerobot.pdf",
              img1url: "images/portfolio/hmi-1.jpeg",
              img2url: "images/portfolio/hmi-2.jpg",
            },
            {
              name: "Ambient Temperature and Humidity Controller for Orchids",
              id: "orchid",
              shortDescription: "2019 Apr. - 2019 May",
              description:
                "This project was done by a team of 10 students. Dendrobium orchids make a large portion of flower exports in Sri Lanka and we wanted to help the planters by giving them a low cost solution to the difficulties faced with varying enviorenmental conditions. We wanted to develop a system that can automatically control the  ambient temperature, ambient humidity, and lighting while automating irrigation system and fertilization process in the plantation. Our main focus was partially enclosed Dendrobium plantations. I contributed to the software writing and desgined the enclosures for the system circuits. We were able to develop a system that use humidifiers, sprinklers and solenoid valves to control ambient humidity and irrigate and fertilize the plantation. The lighting and temperature issue was partially solved by using 60% shade nets because other solutions were too costly to be of help to farmers.",
              github: "https://github.com/Mevan1996/AutomatedGreenHouse.git",
              report: "reports/orchid.pdf",
              img1url: "images/portfolio/orchid-1.jpeg",
              img2url: "images/portfolio/orchid-2.png",
            },
            {
              name: "Hot Plate Temperature Controller",
              id: "hotplate",
              shortDescription: "2018 Aug.",
              description:
                "This project was done by a team of four. The aim of the project was to build a temperature controller for a open coil hot plate so as to prevent overheating and energy wastage. We designed the circuit using triacs and PT100 sensor to suit the Sri Lankan current supply. I helped design the circuit and I designed the eclosure using solidworks.",
              report: "reports/hotplate.pdf",
              img1url: "images/portfolio/hotplate-1.png",
              img2url: "images/portfolio/hotplate-2.png",
            },
            {
              name: "CRUD Web App Using MERN Stack",
              id: "crud",
              shortDescription: "2021 Jun.",
              description:
                "This was a self-initiated project done to get fammiliar with the MERN stack. I was able to build a full-stack application that utilized JWT authentication for user handling, material-ui for styling and reducers for front-end data handling.",
              github: "https://github.com/IsuruPabasara/CRUD-with-MERN.git",
              img1url: "images/portfolio/crud-1.png",
              img2url: "images/portfolio/crud-2.png",
            },
            {
              name: "Line Following and Metal Collecting Robot",
              id: "arduinorobot",
              shortDescription: "2018 Mar",
              description:
                "This project was done with a team of four members for a competition. We had to design and implement a robot that can follow a strip on a contrasting background who can then collect metal coins and climb up a steep ramp to get to the finishing line. I developed the code for the robot. The robot callibrated it's sensors to ambient lighting and used magentic strips to collect coins. Our team became the runners-up in the competition.",
              img1url: "images/portfolio/arduinorobot-1.jpg",
            },
            {
              name: "Single Page Restaurant Web Application",
              id: "react",
              shortDescription: "2020 May",
              description:
                "This was a project I had to complete as a part of the Coursera course 'Front-End web development with React'. I built a restaurant app that showed the different dishes in the restaurant, restaurant details, location, contact information and a feedback form for customers. I got fammiliraized with React concepts like class components, context, redux, bootstrap, dom and API handling.",
              github:
                "https://github.com/IsuruPabasara/React-App-Muppala-Course.git",
              certificate:
                "https://coursera.org/share/5a0c5c8ba933d1089ba3071005e65856",
              img1url: "images/portfolio/react-1.png",
              img2url: "images/portfolio/react-2.png",
            },
          ],
          outreach: [
            {
              description: "Committee member",
              institution: "Electronic Club , of University of Moratuwa",
              name: "2019 - 2020",
            },
            {
              description: "Treasurer",
              institution: "IEEE IAS Student Branch, University of Moratuwa",
              name: "2019 - 2020",
            },
            {
              description: "Department Representative",
              institution:
                "Department of Electronic and Telecommunication Engineering, University of Moratuwa",
              name: "2018 - 2019",
            },
            {
              description: "Rotoractor",
              institution:
                "Rotoract Club University of Moratuwa Student Branch",
              name: "2017 - 2019",
            },
          ],
        };
      function I(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var a,
            n = Object(u.a)(e);
          if (t) {
            var r = Object(u.a)(this).constructor;
            a = Reflect.construct(n, arguments, r);
          } else a = n.apply(this, arguments);
          return Object(m.a)(this, a);
        };
      }
      var C = (function (e) {
        Object(s.a)(a, e);
        var t = I(a);
        function a() {
          return Object(c.a)(this, a), t.apply(this, arguments);
        }
        return (
          Object(l.a)(a, [
            {
              key: "render",
              value: function () {
                return r.a.createElement(
                  "div",
                  { className: "App" },
                  r.a.createElement(f, { resumeData: R }),
                  r.a.createElement(h, { resumeData: R }),
                  r.a.createElement(v, { resumeData: R }),
                  r.a.createElement(y, { resumeData: R }),
                  r.a.createElement(N, { resumeData: R }),
                  r.a.createElement(j, { resumeData: R })
                );
              },
            },
          ]),
          a
        );
      })(n.Component);
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      i.a.render(r.a.createElement(C, null), document.getElementById("root")),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready.then(function (e) {
            e.unregister();
          });
    },
    8: function (e, t, a) {
      e.exports = a(15);
    },
  },
  [[8, 2, 1]],
]);
//# sourceMappingURL=main.409ca0ad.chunk.js.map
