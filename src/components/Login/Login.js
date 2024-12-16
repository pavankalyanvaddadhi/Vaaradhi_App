const Login = () => {
  return (
    <>
      <div
        className="Container"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems:"center",
          backgroundColor:"#f5f5f5", 
          width:"100%",
          height:"700px"
        }}>
        <div
          className="card p-3"
          style={{backgroundColor: 'white',border:"none"}}>
          <div
            className="container"
            style={{
              display: 'flex',
              justifyContent: 'center',
              padding: '40px',
              
            }}>
            <img
              style={{width: '104px', height: '60px'}}
              src="https://vaaradhifarms.com/cdn/shop/files/Asset_1_2x_399eef15-89ca-42cd-ac92-8f75b5e60552.png?v=1685440038&width=370  "
            />
          </div>

         
          <div className="p-3">
          <h3>Log in</h3>
          <p>Enter your email and we'll send you a login code</p>

            <input
              type="text"
              style={{width: '450px', height: '40px' ,borderRadius:"5px"}}
              placeholder="Email"></input>
            <div>
              <button
                style={{
                  backgroundColor: 'green',
                  color: 'white',
                  width: '450px',
                  height: '40px',
                  marginTop:"20px",
                  borderRadius:"5px",
                  fontWeight:"600"
                }}>
                Continue
              </button>
             
            </div>
            <p className="mt-4">Privacy</p>
          </div>
        
        </div>
      </div>
    </>
  )
}
export default Login
