import spinnerStyles from "./spinner.module.scss";
import Link from 'next/link';
const Spinner = props =>{
return (
  <div className={spinnerStyles.contentSpiner}>
    <div className={spinnerStyles.spinner+' '+spinnerStyles.spinner__1}></div>
  </div>
)}
export default Spinner
