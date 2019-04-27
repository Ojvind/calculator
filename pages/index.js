import Layer from '../components/layout';
import TextBox from '../components/textbox';

const wrapper = {
  display: 'flex',
  'flex-wrap': 'wrap',
}  
//'justify-content': 'flex-start',
// flex-start | flex-end | center | space-between | space-around | space-evenly;

const flexItem = {
  background: 'tomato',
  padding: '5px',
  width: '150px',
  height: '150px',
  'margin-top': '10px',
  'margin-right': '10px',
  'line-height': '150px',
  'color': 'white',
  'font-weight': 'bold',
  'font-size': '1em',
  'text-align': 'center',
}  

export default function Index() {
  return (
    <div>
      <Layer>
        <div style={wrapper}>
          <div style={flexItem}><TextBox>ddd</TextBox></div>
          <div style={flexItem}>
              Value 2:
          </div>
          <div style={flexItem}>Value 3:</div>
          <div style={flexItem}>Value 4:</div>
        </div>
      </Layer>
    </div>
  )
}

