let  Error = ({ statusCode }) => {

return (
  <div className="container categorias"> 
  <div className="categories-shop">
    <div className="container-categories">
        <div className="row">
        <p className="error">
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : 'An error occurred on client'}
       </p>
        </div>
    </div>
  </div>
    <style jsx>{`
      .container {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items:center;
        margin-top :90px;
      }
      .error{
        font-size: 31px;
        color:#ff5252;
      }
      .container .text{
        font-size:1.3rem;
        width:98%;
        line-height: 1.8rem;
      }
     .container .categories-shop{
       margin-top:30px;
       width:100%;
       display:flex;
     }
     .container .categories-shop .container-categories{
       width:100%;
     }
      .row {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-justify-content: center;
        -ms-flex-pack: distribute;
        justify-content: center;
        -webkit-align-content: stretch;
        -ms-flex-line-pack: stretch;
        align-content: stretch;
        -webkit-align-items: center;
        -ms-flex-align: start;
        align-items: center;
      }
     
    `}</style>
 
  </div>
)}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}
export default Error
