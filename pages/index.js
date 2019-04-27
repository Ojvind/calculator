import Layout from '../components/layout';
import TextBox from '../components/textbox';
import RadioButton from '../components/radiobutton'
import Label from '../components/label'

export default () => {
  return (
    <div>
      <Layout>
        <div className="wrapper">
          <div className='flexItem parameterBox'>Value 1: <TextBox/></div>
          <div className='flexItem parameterBox'>Value 2: <TextBox/></div>
          <div className='flexItem parameterBox'>Value 3: <TextBox/></div>
          <div className='flexItem answerBox'>
            <RadioButton onChange={() => {}}>Sum</RadioButton>
            <RadioButton onChange={() => {}}>Multiply</RadioButton>
            Result: <Label>dddsferer</Label>
          </div>
        </div>
      </Layout>
      <style jsx>{`
        .wrapper {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }

        .flexItem {
          padding: 5px;
          width: 250px;
          height: 250px;
          margin-top: 10px;
          margin-right: 10px;
          color: white;
          font-weight: bold;
          font-size: 1em;
          text-align: center;
          align-items: center;
        }

        .answerBox {
          background: Red;
        }

        .parameterBox {
          background: Tomato;
        }
      `}</style>
    </div>
  )
}