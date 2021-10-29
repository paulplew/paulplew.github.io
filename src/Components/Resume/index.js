import React from "react";
import Navigation from "../Navigation";
import pages from "../Navigation/navigation_pages.json"

const Resume = () => {
  document.title = 'Resume'
  return (
    <>
      <Navigation selected={pages.resume} />
      <iframe src="/resume.pdf" title="Paul Plew's Resume" width="90%" height="500px"></iframe>
    </>
  )
}

export default Resume