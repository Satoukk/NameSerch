import { useState } from "react";
import { questions } from "./data/questions";
import type { Question } from "./type/quiz"; 
import { useNavigate } from "react-router-dom";
import "./App.css";

//画面の状態管理
type Screen = "title" | "finish" | "result";

function Game() {
    const navigate = useNavigate();
    const [screen,setScreen] = useState<Screen>("title");   
    const [hint,setHint] = useState(false);
    const [count,setCount] = useState(0);
    const [question,setQuestion] = useState<Question>(getRandomQuestion);
    const [isCorrect,setIsCorrect] = useState<boolean | null>(null);
    const [quizCount,setQuizCount] = useState(0);

    //問題作成
    function nextQuestion(){
        const nextCount = quizCount+1;
        if(nextCount >= 5){
            setScreen("finish");
            return;
        }
        setQuizCount(nextCount);
        setQuestion(getRandomQuestion());
        setHint(false);
        setIsCorrect(null);
        setScreen("title");
    }
    //答え合わせ
    function handlerAnswer(choice:string){
        setIsCorrect(choice === question.answer);
        if(choice === question.answer){
            setCount((prev) => prev+1 );
        }
        setScreen("result");
    }
    return(
        <main className="game container text-center px-3 py-5">
          <div className="game-content mx-auto py-3">
            {screen === "title" && (
                <>
                    <p className="text-primary fw-bold small mb-3">第{quizCount + 1}問／5問</p>
                    <p className="game-description mb-2">このお店の名前は？</p>
                    <h1 className="game-title fw-bold mb-4">{question.maskedName}</h1>
                        <div className="choices d-grid gap-3">
                                {/* 3択を表示 */}
                            {question.choices.map((choice)=>(
                                <button 
                                    key={choice}
                                    type="button"
                                    className="btn btn-outline-primary rounded-3 p-3"
                                    onClick={() => handlerAnswer(choice)}
                                >
                                    {choice}
                                </button>
                            ))}
                        </div>
                        <button className="btn btn-outline-secondary rounded-pill px-4 mt-4" onClick={()=>setHint(true)}>ヒントを見る</button>
                        {hint == true &&    
                            <aside className="alert alert-light border rounded-3 text-start mt-3">
                                <p className="mb-2">{question.hints[0]}</p>
                                <p className="mb-0">{question.hints[1]}</p>
                            </aside>
                        }
                </>
            )}

                {/* 答えを表示 */}
            {screen==="result" &&(
                <>
                    <h1 className={`game-title fw-bold mb-4 ${isCorrect ? "text-success" : "text-danger"}`}>{isCorrect ? "正解!":"不正解!"}</h1>
                    <p className="game-description mb-2">正解のお店</p>
                    <p className="fs-4 fw-bold text-break mb-4">{question.answer}</p>
                    <div className="bg-white rounded-3 text-start p-3 mb-4">
                      <h2 className="h6 fw-bold mb-3">お店の情報</h2>
                      <p className="game-description mb-2">{question.hints[1]}</p>
                      <p className="game-description mb-0">{question.hints[0]}</p>
                    </div>
                    <button className="btn btn-primary rounded-pill px-5 py-3" onClick={nextQuestion}>
                        {quizCount === 4 ? "最終結果を見る" : "次へ"}
                    </button>
                </>
            )}           
                {/* 最終結果を表示 */}
            {screen === "finish" &&(
                <>
                    <p className="game-description mb-3">おつかれさまでした！</p>
                    <h1 className="game-title fw-bold mb-4">5問中<span className="text-primary">{count}問</span>正解！</h1>
                    <button className="btn btn-primary rounded-pill px-5 py-3" onClick={()=>navigate("/")}>最初に戻る</button>
                </>
            )}
          </div>
        </main>
    )
}

//ランダムでデータ番号を取得する
export function getRandomQuestion():Question{
    const index = Math.floor(Math.random()*questions.length);
    return questions[index];
}

export default Game;
