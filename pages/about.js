import Link from 'next/link';
import Layout from '../components/layout';

export default function About() {
    return (
      <Layout>
        <p>Öjvind Otterbjörk</p>
        <ul>
            <li>
              Linkedin:
              <Link href="https://www.linkedin.com/in/ojvind-otterbjork/">
                <a>linkedin.com/in/ojvind-otterbjork/</a>
              </Link>
            </li>
            <li>
                Homepage:
                <Link href="http://ojvind.otterbjork.com">
                  <a>ojvind.otterbjork.com</a>
                </Link>
            </li>
        </ul>
      </Layout>
    )
  }