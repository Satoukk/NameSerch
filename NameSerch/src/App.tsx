import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './App.css'

function App() {

  const navigate = useNavigate();
  const handleClick=() =>{
    navigate("/game");
  };

  return (
    <main className="home container text-center px-3 py-5">
      <div className="home-content mx-auto py-4 py-md-5">
        <p className="home-label small fw-bold mb-3">文化祭クイズ</p>
        <h1 className="home-title fw-bold mb-4">店舗名クイズ</h1>
        <p className="home-description mb-3">
          隠れているお店の名前を、<br className="d-sm-none" />３択から当てよう！
        </p>
        <p className="home-description small mb-4">全５問・困ったらヒントも使えます。</p>
        <button type="button" className="btn btn-primary btn-lg rounded-pill px-5 py-3" onClick={handleClick}>
          ゲームスタート
        </button>
      </div>
    </main>
  )
}

export default App
