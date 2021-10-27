const navigation = () => {
    return (`
      <div>
        <ul id="nav">
          <li>
            <a href="/index.html" class="nav-item nav-home">
              <span class="heading-name"> Paul Plew </span> 
              <br> 
              <span>Developer &#38; Designer</span>
            </a>
          </li>
          <li class="nav-separator"> &#8212;&#8212; </li>
          <li>
            <a href="/about.html" class="nav-item nav-about">
              About Me
            </a>
          </li>
          <li class="nav-separator"> &#8212;&#8212; </li>
          <li>
            <a href="/projects/computer-science.html" class="nav-item nav-computer-science">
              CS Projects
            </a>
          </li>
          <li class="nav-separator"> &#8212;&#8212; </li>
          <li><a href="/projects/design.html" class="nav-item nav-design">Design Projects</a></li>
        </ul>
      </div>
  `)
}

export default navigation