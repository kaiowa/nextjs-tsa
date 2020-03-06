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

  render() {
    let show=(this.state && this.state.theposition) ? this.state.theposition :'hidden';
    console.log('position',this.state.theposition);
    return <div className={`totop  ${show}`}><div className={totopStyles.arrow}></div></div>;
    <style jsx>{`
    .show{
      display: block;
    }
    .hidden{
      display: none;
    }
    .totop{
      &.show{
        display: block;
      }
      &.hidden{
        display: none;
      }
      display:none;
      position: fixed;
      width: 40px;
      height: 40px;
      bottom: 40px;
      right: 40px;
      background-color: black;
      opacity: 0.5;
      justify-content: center;
      align-items: center;
      z-index: 1000;
      border-radius: 4px;
      transition: all 0.4s;
      -webkit-transition: all 0.4s;
      -o-transition: all 0.4s;
      -moz-transition: all 0.4s;
      .arrow{
        &::before{
          content: "\f102";
          width:20px;
          height: 20px;
        }
      }
    }
  `}</style>
  }
}

export default ToTop
