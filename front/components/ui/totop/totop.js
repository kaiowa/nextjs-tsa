import totopStyles from "./totop.module.scss";
import Link from 'next/link';

class ToTop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theposition:'hidden'
    }; 
  }
  componentDidMount() {
    this.setState({
      theposition:'hidden'
    })

    window.addEventListener('scroll', this.listenToScroll)
  }
  
  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll)
  }
  
  listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop
  
   
    //const scrolled = winScroll / height
   //const scrolled=  e.clientY - e.currentTarget.getBoundingClientRect().top
   console.log(winScroll);
    this.setState({
      theposition: (winScroll>0)  ? 'show' : 'hidden',
    })
  }

  gotop =()=>{
    console.log('alll top');
  }
  render() {
    let show=(this.state && this.state.theposition) ? this.state.theposition :'hidden';
    console.log('position',this.state.theposition);
    return <div className={`totop  ${show}`} ><div className={totopStyles.arrow}><img src="/images/arrowup.png"></img></div></div>;
    <style jsx>{`
    .show{
      display: block;
    }
    .hidden{
      display: none;
    }
    
    
  `}</style>
  }
}

export default ToTop
