
class App extends React.Component {
  constructor(){
  super();
  this.state = { open: true}
  }
  imageClick = () => {
    this.setState(state => ({ open: !state.open }))
  }

  getImageName = () => this.state.open ? 'winter' : 'duck' 
  
//  function getImageName(){
//    if (this.state.open){
//      'winter';
//    }else if (this.state.open){
//      'duck';
//     }else if (this.state.open){
//       'bunny';
//     }else if(this.state.open){
//       'child';
//  }
// }


  render() {
    const images = {
      winter: 'https://cdn.pixabay.com/photo/2019/10/15/13/40/winter-4551699_960_720.jpg',
      duck: 'https://cdn.pixabay.com/photo/2021/04/22/06/40/duck-6198196_960_720.jpg',
      bunny : 'https://cdn.pixabay.com/photo/2021/04/17/23/58/bunny-6187026_960_720.jpg',
      child: 'https://cdn.pixabay.com/photo/2020/09/18/21/16/child-5582985_960_720.jpg'
    }
    const imageName = this.getImageName();
    return (
      <div>
      <img style={{maxWidth: '550px'}} src={images[imageName]} onClick={this.imageClick} />
    </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);














class App extends React.Component {
  constructor(props){
  super(props);
  this.state = {open:props.open}
}

  imageClick = () => {
    this.setState(state => ({ open: !state.open }))
   }
  

  render() {
    const getImage=  [
      'https://cdn.pixabay.com/photo/2019/10/15/13/40/winter-4551699_960_720.jpg',
      'https://cdn.pixabay.com/photo/2021/04/22/06/40/duck-6198196_960_720.jpg',
      'https://cdn.pixabay.com/photo/2021/04/17/23/58/bunny-6187026_960_720.jpg',
      'https://cdn.pixabay.com/photo/2020/09/18/21/16/child-5582985_960_720.jpg'
      ];
    return (
  <React.Fragment>
    {getImage.map(v => <img src={this.state[getImage]} value = {v} onClick={this.imageClick} />)}
  </React.Fragment>
     
    );
    
}
}


ReactDOM.render(
<App />, document.getElementById("root")
);
