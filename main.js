class Button extends React.Component{
  constructor(props){
    super(props);
    this.state = {value:Number.parseInt(props.value)}
    this.click = this.click.bind(this)
  }
  click(){
    this.setState({value: this.state.value + 1})
  }
  render(){
    return (<button onClick={this.click}>{this.state.value}</button>)

  }
}



  class Buttons extends React.Component{
    constructor(){
      super();
    }
    render(){
      const initValues = [1,10,20,30,40,50];
  return(
    <React.Fragment>
      {initValues.map(y=> <Button value={y}/>)}
    </React.Fragment>
  )
    }
  }



ReactDOM.render(
    // <Button value={1}/>,
    <Buttons />,
    document.getElementById('root')
  );
















