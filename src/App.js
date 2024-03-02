
import './App.css';
 let name = "This is "
function App() {
  return (
    <>
 <nav className="navbar navbar-expand-lg navbar-light bg-dark text-white">
  <div className="container-fluid px-5">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarTogglerDemo01">
      <a className="navbar-brand text-white fs-1 " href="/">Brand Logo</a>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active text-white" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="/">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active text-white" href="/" tabindex="-1" aria-disabled="true">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active text-white" href="/" tabindex="-1" aria-disabled="true">Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active text-white" href="/" tabindex="-1" aria-disabled="true">Blog</a>
        </li>
      </ul>
    
    </div>
  </div>
</nav>
    </>
  );
}

export default App;
