import Link from 'next/link';
import Layout from '../components/layout';

export default function About() {
    return (
      <div>
        <Layout>
          <div className='some-page-wrapper'>
              <div className='row'>
                  <div className='double-column'>
                    <h1>Öjvind Otterbjörk</h1>
                  </div>
              </div>
              <div className='row'>
                  <div className='column'>
                    <Link href="https://www.linkedin.com/in/ojvind-otterbjork/">
                      <a><img src='/static/linkedinlogo.png'></img></a>
                    </Link>
                  </div>
                  <div className='column'>
                    <Link href="http://ojvind.otterbjork.com">
                      <a><img src='/static/star_only_no_color.png'></img></a>
                    </Link>
                  </div>
              </div>
            </div>
          </Layout>
        <style jsx>{`
            .some-page-wrapper {
                margin: 15px;
                padding:20px;
          }
          
          .row {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            width: 350px;
            justify-content: center;
            text-align: center;
            align-items: center;
          }
          
          .column {
            display: flex;
            flex-direction: column;
            flex-basis: 100%;
            flex: 1;
          }   

          .double-column {
            display: flex;
            flex-direction: column;
            flex-basis: 100%;
            flex: 2
          }
        `}</style>
      </div>
    )
  }