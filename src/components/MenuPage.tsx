type Props = {
  isOpen: boolean
  onClose: () => void
}

export function MenuPage({ isOpen, onClose }: Props) {
  const className = isOpen ? 'menuPage active' : 'menuPage none'

  return (
    <div className={className}>
      <div className="topline">
        <h1 className="logo">
          <a href="#" data-cursor="click" data-name="">
            logo
          </a>
        </h1>
        <a
          href="#"
          className="menuClose"
          data-cursor="click"
          data-name=""
          onClick={(e) => {
            e.preventDefault()
            onClose()
          }}
        >
          <svg
            width="27"
            height="27"
            data-cursor="click"
            data-name=""
            viewBox="0 0 27 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.5 13.5L26.2151 4.97131C27.2616 3.92471 27.2616 2.22784 26.2151 1.1804L25.8196 0.784943C24.773 -0.261648 23.0761 -0.261648 22.0287 0.784943L13.5 10.125L4.97131 0.784943C3.92472 -0.261648 2.22784 -0.261648 1.1804 0.784943L0.784943 1.1804C-0.261648 2.22699 -0.261648 3.92386 0.784943 4.97131L10.5 13.5L0.784943 22.0287C-0.261648 23.0753 -0.261648 24.7722 0.784943 25.8196L1.1804 26.2151C2.22699 27.2616 3.92472 27.2616 4.97131 26.2151L13.5 16.875L22.0287 26.2151C23.0753 27.2616 24.773 27.2616 25.8196 26.2151L26.2151 25.8196C27.2616 24.773 27.2616 23.0761 26.2151 22.0287L16.5 13.5Z"
              fill="white"
            />
          </svg>
        </a>
      </div>
      <ul className="menu">
        <li>
          <a
            href="./#work"
            id="toWORK"
            className="title"
            data-cursor="click"
            data-name=""
            onClick={onClose}
          >
            Work
          </a>
        </li>
        <li>
          <a
            href="./#about"
            id="toABOUT"
            className="title"
            data-cursor="click"
            data-name=""
            onClick={onClose}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="https://jireh-muze.tistory.com/"
            className="title"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="click"
            data-name=""
          >
            BLOG
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Kim-hyosun"
            className="title"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="click"
            data-name=""
          >
            GitHub
          </a>
        </li>
      </ul>
    </div>
  )
}
