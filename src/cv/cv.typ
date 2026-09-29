// Printable CV, built from the same data as the /cv page.
// Compile from the repo root: typst compile --root . src/cv/cv.typ public/cv.pdf

#let data = toml("../data/cv.toml")

#let me = "Thanasis Georgiou"
#let contacts = (
  ("web@thgeorgiou.com", "mailto:web@thgeorgiou.com"),
  ("thgeorgiou.com", "https://thgeorgiou.com/cv"),
  ("ORCID 0000-0002-2940-5672", "https://orcid.org/0000-0002-2940-5672"),
  ("github.com/thgeorgiou", "https://github.com/thgeorgiou"),
)

// Palette from the website's light theme
#let foreground = rgb("#1a2229")
#let subtle = rgb("#56626c")
#let accent = rgb("#e8590c")
#let accent-ink = rgb("#b5470a")
#let edge = rgb("#b3bec7")

#let sans = ("IBM Plex Sans", "Libertinus Serif")
#let mono = ("IBM Plex Mono", "DejaVu Sans Mono")

#set document(title: "Curriculum vitae – " + me, author: me)
#set page(
  paper: "a4",
  margin: (x: 18mm, top: 16mm, bottom: 18mm),
  footer: context {
    set text(font: mono, size: 7.5pt, fill: subtle)
    me + " · Curriculum vitae"
    h(1fr)
    counter(page).display("1 / 1", both: true)
  },
)
#set text(font: sans, size: 9.5pt, fill: foreground, lang: "en")
#set par(leading: 0.55em, justify: false)
#set text(hyphenate: false)
#show link: set text(fill: foreground)

// Helpers

#let months = (
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
)
#let month-year(d) = months.at(d.month() - 1) + " " + str(d.year())
#let date-range(start, end) = (
  month-year(start) + " – " + if end == none { "now" } else { month-year(end) }
)

// Newest first, like the website
#let newest-first(entries, key) = entries.sorted(key: e => e.at(key)).rev()

// "A; B; C et al." -> A, B, C et al., with my own name in bold
#let authors(raw) = {
  let names = raw.split(";").map(n => n.trim().replace(regex("^and\s+"), ""))
  names = names.filter(n => n != "")
  let et-al = false
  let last = names.last()
  if last.ends-with(regex("\s*et al\.?")) {
    et-al = true
    names.at(-1) = last.replace(regex("\s*et al\.?$"), "")
  }
  set text(size: 8.5pt, fill: subtle)
  names
    .map(n => if n == me { text(fill: foreground, weight: "semibold", n) } else { n })
    .join(", ")
  if et-al { emph[ et al.] }
}

#let section(title, note: none, body) = {
  v(14pt, weak: true)
  block(sticky: true, below: 8pt)[
    #set text(font: mono, size: 10.5pt, weight: "medium")
    #box(fill: accent, width: 5pt, height: 5pt, baseline: -1.5pt)
    #h(5pt)
    #upper(title)
    #if note != none {
      h(1fr)
      text(size: 7.5pt, weight: "regular", fill: subtle, note)
    }
    #v(-6pt)
    #line(length: 100%, stroke: 0.5pt + edge)
  ]
  body
}

// One row: a date column on the left, details on the right
#let entry(when, body) = block(breakable: false, below: 10pt, grid(
  columns: (33mm, 1fr),
  column-gutter: 5mm,
  text(font: mono, size: 8pt, fill: subtle, when),
  body,
))

#let title(body, weight: "medium") = block(
  below: 3pt,
  text(weight: weight, body),
)

// Header

#grid(
  columns: (1fr, auto),
  align: (left + bottom, right + bottom),
  [
    #text(size: 24pt, weight: "medium", tracking: -0.02em, me)
    #v(-10pt)
    #text(font: mono, size: 9pt, fill: accent-ink)[Curriculum vitae]
  ],
  {
    set text(font: mono, size: 8pt, fill: subtle)
    set par(leading: 0.5em)
    contacts.map(((label, url)) => link(url, label)).join(linebreak())
  },
)
#v(4pt)
#line(length: 100%, stroke: 1.5pt + accent)

// Sections

#let work = newest-first(data.at("work", default: ()), "startDate")
#if work.len() > 0 {
  section("Experience")[
    #for w in work {
      entry(date-range(w.startDate, w.at("endDate", default: none)))[
        #title(w.role, weight: "semibold")
        #text(fill: subtle, w.name)
        #if "description" in w {
          block(above: 5pt, par(justify: true, w.description))
        }
      ]
    }
  ]
}

#let education = newest-first(data.at("education", default: ()), "startDate")
#if education.len() > 0 {
  section("Education")[
    #for e in education {
      entry(date-range(e.startDate, e.at("endDate", default: none)))[
        #title(e.degree, weight: "semibold")
        #text(fill: subtle, e.institution)
      ]
    }
  ]
}

#let publications = newest-first(
  data.at("publication", default: ()),
  "publicationDate",
)
#if publications.len() > 0 {
  let n = publications.len()
  section(
    "Publications",
    note: str(n) + " peer-reviewed article" + if n == 1 { "" } else { "s" },
  )[
    #for (i, p) in publications.enumerate() {
      let year = p.publicationDate.year()
      let show-year = i == 0 or publications.at(i - 1).publicationDate.year() != year
      entry(if show-year { str(year) })[
        #title(p.title)
        #authors(p.authors)
        #block(above: 3pt, text(size: 8.5pt)[
          #emph(p.journal)
          #if p.at("isFirstAuthor", default: false) {
            text(fill: accent-ink)[, first author]
          }
          #if "doi" in p {
            h(4pt)
            link(
              "https://doi.org/" + p.doi,
              text(font: mono, size: 7.5pt, fill: subtle, "doi:" + p.doi),
            )
          }
        ])
      ]
    }
  ]
}

#let conferences = newest-first(data.at("conferences", default: ()), "date")
#if conferences.len() > 0 {
  section("Conferences")[
    #for c in conferences {
      entry(month-year(c.date))[
        #title(c.title)
        #authors(c.authors)
        #block(above: 3pt, text(size: 8.5pt)[
          #if "type" in c {
            if c.type == "poster" [Poster at ] else [Presentation at ]
          }
          #let name = emph(c.name)
          #if "url" in c { link(c.url, name) } else { name }, #c.location#{
            if c.at("hasProceedings", default: false) [, with proceedings]
          }
        ])
      ]
    }
  ]
}
