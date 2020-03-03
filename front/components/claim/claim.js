import claimStyles from "./claim.module.scss";


const Claim = (Config) =>{
console.log('claim',Config)
return (
  <div className={claimStyles.claim}>
  <h3 >{Config.config.title}</h3>
  <p>{Config.config.description}</p>
</div>
)}
export default Claim
