import React from 'react';
import '../main_style.css';
import mountain from '../images/background_fudzi.png';

const Main = (props) => {

    let sport_check = 1;
    let entertainment_check = 1;
    let householding_check = 1;
    let educaion_check = 1;
    function cardBoxEducationFlip(){

        if (educaion_check > 0){
            document.getElementById("card-box-education").style.transform = "rotateY(180deg)";
            educaion_check *= -1;

        }
        else {
            document.getElementById("card-box-education").style.transform = "rotateY(360deg)";
            educaion_check *= -1;
        }
    }


    function cardBoxSportFlip() {

        if (sport_check > 0){
            document.getElementById("card-box-sport").style.transform = "rotateY(180deg)";
            sport_check *= -1;
        }
        else {
            document.getElementById("card-box-sport").style.transform = "rotateY(360deg)";
            sport_check *= -1;
        }

    } function cardBoxEntertainmentFlip() {

        if (entertainment_check> 0){
            document.getElementById("card-box-entertainment").style.transform = "rotateY(180deg)";
            entertainment_check *= -1;
        }
        else {
            document.getElementById("card-box-entertainment").style.transform = "rotateY(360deg)";
            entertainment_check *= -1;
        }

    } function cardBoxHouseholdingFlip() {

        if (householding_check > 0){
            document.getElementById("card-box-householding").style.transform = "rotateY(180deg)";
            householding_check *= -1;
        }
        else {
            document.getElementById("card-box-householding").style.transform = "rotateY(360deg)";
            householding_check *= -1;
        }

    }
    return (
        <div>
            <div className="main">
                <img src={mountain} alt="" className="back-img-absolute"/>
                <div className="card-box-main">
                    <div className="card-box">
                        <div id="education-card" className="card-box__item card-box__item_education">
                            <div id="card-box-education" onClick={cardBoxEducationFlip}
                                 className="card-box__item-box card-box__item-box-education">
                                <div className="card-box__item-box-education_front card-box__item-box_front">
                                    <div className="card-box__percent-box">
                                        <div className="card-box__percent-box-item">
                                            <section>
                                                <svg className="card-box__percent-box-item-education">
                                                    <circle cx="70" cy="70" r="65"></circle>
                                                    <circle cx="70" cy="70" r="65"></circle>
                                                </svg>
                                                <div className="card-box__percent-box-number">
                                                    <p>25<span>%</span></p>
                                                </div>
                                            </section>
                                            <p className="card-box__percent-box-text">Progress</p>
                                        </div>
                                    </div>
                                    <div className="card-box__tasks-box">
                                        <div className="card-box__tasks-box-text">
                                            <h3 className="card-box__tasks-box-text-header">Education</h3>
                                            <p className="card-box__tasks-box-text-quest"><span
                                                className="card-box__tasks-box-text-quest_pink">2*</span> Daily - in
                                                process</p>
                                            <p className="card-box__tasks-box-text-quest"><span
                                                className="card-box__tasks-box-text-quest_pink">1*</span> Weekly - in
                                                process</p>
                                            <p className="card-box__tasks-box-text-quest"><span
                                                className="card-box__tasks-box-text-quest_pink">1*</span> Monthly - in
                                                process</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-box__item-box-education_back card-box__item-box_back">
                                    <div className="card-box__text-container">
                                        <div className="card-box__daily-tasks">
                                            <div className="card-box__tasks-header"><p>Daily</p></div>
                                            <div className="card-box__tasks-text-box">
                                                <label>
                                                    <input type="checkbox"/>
                                                        <i></i>
                                                        <span>Write a haiku</span>
                                                </label>
                                                <label>
                                                    <input type="checkbox"/>
                                                        <i></i>
                                                        <span>Leave movie review you watched lately</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="card-box__weekly-tasks">
                                            <div className="card-box__tasks-header"><p>Weekly</p></div>
                                            <div className="card-box__tasks-text-box">
                                                <label>
                                                    <input type="checkbox"/>
                                                        <i></i>
                                                        <span>Watch documentary about bees</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="card-box__monthly-tasks">
                                            <div className="card-box__tasks-header"><p>Monthly</p></div>
                                            <div className="card-box__tasks-text-box">
                                                <label>
                                                    <input type="checkbox"/>
                                                        <i></i>
                                                        <span>Learn how to play a musical instrument available to you</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="sport-card" className="card-box__item card-box__item_sport">
                            <div id="card-box-sport" onClick={cardBoxSportFlip}
                                 className="card-box__item-box card-box__item-box-sport">
                                <div className="card-box__item-box-sport_front card-box__item-box_front">
                                    <div className="card-box__percent-box">
                                        <div className="card-box__percent-box-item">
                                            <section>
                                                <svg className="card-box__percent-box-item-sport">
                                                    <circle cx="70" cy="70" r="65"></circle>
                                                    <circle cx="70" cy="70" r="65"></circle>
                                                </svg>
                                                <div className="card-box__percent-box-number">
                                                    <p>50<span>%</span></p>
                                                </div>
                                            </section>
                                            <p className="card-box__percent-box-text">Progress</p>
                                        </div>
                                    </div>
                                    <div className="card-box__tasks-box">
                                        <div className="card-box__tasks-box-text">
                                            <h3 className="card-box__tasks-box-text-header">Sport</h3>
                                            <p className="card-box__tasks-box-text-quest"><span
                                                className="card-box__tasks-box-text-quest_pink">2*</span> Daily - in
                                                process</p>
                                            <p className="card-box__tasks-box-text-quest"><span
                                                className="card-box__tasks-box-text-quest_pink">1*</span> Weekly - in
                                                process</p>
                                            <p className="card-box__tasks-box-text-quest"><span
                                                className="card-box__tasks-box-text-quest_pink">1*</span> Monthly - in
                                                process</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-box__item-box-sport_back card-box__item-box_back">
                                    <div className="card-box__text-container">
                                        <div className="card-box__daily-tasks">
                                            <div className="card-box__tasks-header"><p>Daily</p></div>
                                            <div className="card-box__tasks-text-box">
                                                <label>
                                                    <input type="checkbox"/>
                                                        <i></i>
                                                        <span>Do 20-40 push-ups</span>
                                                </label>
                                                <label>
                                                    <input type="checkbox"/>
                                                        <i></i>
                                                        <span>Jog for 20 minutes</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="card-box__weekly-tasks">
                                            <div className="card-box__tasks-header"><p>Weekly</p></div>
                                            <div className="card-box__tasks-text-box">
                                                <label>
                                                    <input type="checkbox"/>
                                                        <i></i>
                                                        <span>Improve your sleep pattern</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="card-box__monthly-tasks">
                                            <div className="card-box__tasks-header"><p>Monthly</p></div>
                                            <div className="card-box__tasks-text-box">
                                                <label>
                                                    <input type="checkbox"/>
                                                        <i></i>
                                                        <span>Do daily morning exercises</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="entertainment-card" className="card-box__item card-box__item_entertainment">
                            <div id="card-box-entertainment" onClick={cardBoxEntertainmentFlip}
                                 className="card-box__item-box card-box__item-box-entertainment">
                                <div className="card-box__item-box-entertainment_front card-box__item-box_front">
                                    <div className="card-box__percent-box">
                                        <div className="card-box__percent-box-item">
                                            <section>
                                                <svg className="card-box__percent-box-item-entertainment">
                                                    <circle cx="70" cy="70" r="65"></circle>
                                                    <circle cx="70" cy="70" r="65"></circle>
                                                </svg>
                                                <div className="card-box__percent-box-number">
                                                    <p>75<span>%</span></p>
                                                </div>
                                            </section>
                                            <p className="card-box__percent-box-text">Progress</p>
                                        </div>
                                    </div>
                                    <div className="card-box__tasks-box">
                                        <div className="card-box__tasks-box-text">
                                            <h3 className="card-box__tasks-box-text-header">Entertainment</h3>
                                            <p className="card-box__tasks-box-text-quest"><span
                                                className="card-box__tasks-box-text-quest_pink">2*</span> Daily - in
                                                process</p>
                                            <p className="card-box__tasks-box-text-quest"><span
                                                className="card-box__tasks-box-text-quest_pink">1*</span> Weekly - in
                                                process</p>
                                            <p className="card-box__tasks-box-text-quest"><span
                                                className="card-box__tasks-box-text-quest_pink">1*</span> Monthly - in
                                                process</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-box__item-box-entertainment_back card-box__item-box_back">
                                    <div className="card-box__text-container">
                                        <div className="card-box__daily-tasks">
                                            <div className="card-box__tasks-header"><p>Daily</p></div>
                                            <div className="card-box__tasks-text-box">
                                                <label>
                                                    <input type="checkbox"/>
                                                        <i></i>
                                                        <span>Practice in origami</span>
                                                </label>
                                                <label>
                                                    <input type="checkbox"/>
                                                        <i></i>
                                                        <span>Watch a movie (next step in Education)</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="card-box__weekly-tasks">
                                            <div className="card-box__tasks-header"><p>Weekly</p></div>
                                            <div className="card-box__tasks-text-box">
                                                <label>
                                                    <input type="checkbox"/>
                                                        <i></i>
                                                        <span>Learn how to cook pancakes</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="card-box__monthly-tasks">
                                            <div className="card-box__tasks-header"><p>Monthly</p></div>
                                            <div className="card-box__tasks-text-box">
                                                <label>
                                                    <input type="checkbox"/>
                                                        <i></i>
                                                        <span>Try to meditate</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="householding-card" className="card-box__item card-box__item_householding">
                            <div id="card-box-householding" onClick={cardBoxHouseholdingFlip}
                                 className="card-box__item-box card-box__item-box-householding">
                                <div className="card-box__item-box-householding_front card-box__item-box_front">
                                    <div className="card-box__percent-box">
                                        <div className="card-box__percent-box-item">
                                            <section>
                                                <svg className="card-box__percent-box-item-householding">
                                                    <circle cx="70" cy="70" r="65"></circle>
                                                    <circle cx="70" cy="70" r="65"></circle>
                                                </svg>
                                                <div className="card-box__percent-box-number">
                                                    <p>100<span>%</span></p>
                                                </div>
                                            </section>
                                            <p className="card-box__percent-box-text">Progress</p>
                                        </div>
                                    </div>
                                    <div className="card-box__tasks-box">
                                        <div className="card-box__tasks-box-text">
                                            <h3 className="card-box__tasks-box-text-header">Householding</h3>
                                            <p className="card-box__tasks-box-text-quest"><span
                                                className="card-box__tasks-box-text-quest_pink">2*</span> Daily - in
                                                process</p>
                                            <p className="card-box__tasks-box-text-quest"><span
                                                className="card-box__tasks-box-text-quest_pink">1*</span> Weekly - in
                                                process</p>
                                            <p className="card-box__tasks-box-text-quest"><span
                                                className="card-box__tasks-box-text-quest_pink">1*</span> Monthly - in
                                                process</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-box__item-box-householding_back card-box__item-box_back">
                                    <div className="card-box__text-container">
                                        <div className="card-box__daily-tasks">
                                            <div className="card-box__tasks-header"><p>Daily</p></div>
                                            <div className="card-box__tasks-text-box">
                                                <label>
                                                    <input type="checkbox"/>
                                                        <i></i>
                                                        <span>Delete unnecessary pictures from your phone</span>
                                                </label>
                                                <label>
                                                    <input type="checkbox"/>
                                                        <i></i>
                                                        <span>Clean your room</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="card-box__weekly-tasks">
                                            <div className="card-box__tasks-header"><p>Weekly</p></div>
                                            <div className="card-box__tasks-text-box">
                                                <label>
                                                    <input type="checkbox"/>
                                                        <i></i>
                                                        <span>Keep home clean all week long</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="card-box__monthly-tasks">
                                            <div className="card-box__tasks-header"><p>Monthly</p></div>
                                            <div className="card-box__tasks-text-box">
                                                <label>
                                                    <input type="checkbox"/>
                                                        <i></i>
                                                        <span>Take care of your home plants</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
);
};

export default Main;