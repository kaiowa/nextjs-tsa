import claimStyles from "./claim.module.scss";
import Parser from 'html-react-parser';

const Claim = (Config) =>{
console.log('claim',Config)
return (
  <div className={claimStyles.claim}>
  <h3 >{Config.config.title}</h3>
  <p>{Parser(Config.config.description)}</p>

</div>
)}
export default Claim
