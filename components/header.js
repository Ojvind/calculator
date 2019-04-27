import Link from 'next/link'

const Header = () => (
  <div>
    <Link href="/">
      <a className='linkStyle'>Calculator</a>
    </Link>
    <Link href="/about">
      <a className='linkStyle'>About</a>
    </Link>
    <style jsx global>{`
      a {
        margin-right: 15px;
        color: gray;
      }`}
    </style>
  </div>
)

export default Header
