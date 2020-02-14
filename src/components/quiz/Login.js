import React , { Fragment} from 'react';
import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import answer from '../../assets/img/answer.png';
import fiftyFifty from '../../assets/img/fiftyFifty.PNG';
import hints from '../../assets/img/hints.PNG';
import options from '../../assets/img/options.PNG';

const Login=() =>(
    <Fragment>
        <Helmet><title>Quiz Login-Quiz App</title></Helmet>
        <div className="instructions container">
        <br/><h1>How to Play the Game</h1><br/>
            <p>Ensure you read this guide from the start</p><br/>
            <ul className="browser-default" id="main-list">
                <li>  The Game has a duration of 15 mins and ends as soon as your time elapses.</li><br/>
                <li>  Game consists of 15 questions</li><br/>
                <li>
                      Every question contains 4 options <br/><br/>
                    <img src ={options} alt="Quiz App Options Examples"/>
                    </li><br/>
                    <li>
                     Select the option which best suits the question by clicking (or selecting) it.<br/><br/>
                    <img src ={answer} alt="Quiz App Answer Examples"/>
                    </li><br/>
                    <li>
                      Every game has 2 lifelines namely:
                    <ul id="sublist"><br/>
                        <li>  Two 50-50 chances</li><br/>
                        <li>  Five Hints</li>
                    </ul>
                    </li>
                    <br/>
                    <li>
                      Selecting a 50-50 lifeline by clicking the respective icon will remove 2 wrong answers leaving the correct answer and one incorrect option.
                    <br/><img src={fiftyFifty} alt="Quiz App Fifty Fifty"/>
                    </li><br/>
                    <li>
                      Using a hint by clicking the hint icon will remove one wrong answer leaving two wrong options and one correct answer. You can use as many hints as possible on a single question. <br/>
                    <br/><img src={hints} alt="Quiz App Hints Example"/>
                    </li><br/>
                    <li>
                    Timer Starts as soon as the game starts.
                    </li><br/>
                    <li>
                    Feel free to quit the game at any time .In that case your score will be revaluated afterwords.
                    </li><br/>
                    <li>
                 Let's Do this if you think you've got what it takes?
                    </li>
            </ul>
            
                <div class="quiz-instruction-buttons">
                <Link to="/" className="left">No Take me back</Link>
                <Link to="/play/quiz" className="right">Okay, Let's do this.</Link>
                
            </div>
        </div>
    </Fragment>
       
);

export default Login;