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
      .linkStyle {
        margin-right: 15px;
      }`}
    </style>
  </div>
)

export default Header
