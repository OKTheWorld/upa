import logo from './logo.svg'

const Home: React.FC = () => {
  const baseStyle: React.CSSProperties = { textAlign: 'center' }
  const headerStyle: React.CSSProperties = {
    backgroundColor: '#282c34',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white'
  }
  const logoStyle: React.CSSProperties = {
    height: '40vmin',
    pointerEvents: 'none',
    animation: 'spin infinite 20s linear'
  }
  const linkStyle: React.CSSProperties = { color: '#61dafb' }
  return (
    <>
      <div style={baseStyle}>
        <header style={headerStyle}>
          <style>
            {`
              @keyframes spin {
                from {
                  transform: rotate(0deg);
                }
                to {
                  transform: rotate(360deg);
                }
              }
            `}
          </style>
          <img src={logo} style={logoStyle} alt="logo" />
          <p>
            Edit <code>src/Home.tsx</code> and save to reload.
          </p>
          <a href="https://reactjs.org" style={linkStyle} target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
        </header>
      </div>
    </>
  )
}

export default Home
