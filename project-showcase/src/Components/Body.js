import React, { Component } from "react";
import h2 from './img/Rectangle.jpg'
import f1 from './img/Rectangle 2.jpg'
import f2 from './img/Rectangle 2.1.jpg'
import f3 from './img/Rectangle 3.jpg'
import Me1 from './img/Me1.jpg'
import Me2 from './img/Me2.jpg'
import Me3 from './img/Me3.jpg'
import Me4 from './img/Me4.jpg'
import icon1 from './img/gmail.jpg'
import icon2 from './img/phone.jpg'
import icon3 from './img/add.jpg'
import icon4 from './img/git.jpg'
import icon6 from './img/in.jpg'
import icon7 from './img/fa.jpg'
import edit from './img/edit.png'
import photo3 from './img/Rectangle 2.jpg'
import photo1 from './img/Rectangle 2.1.jpg'
import photo2 from './img/Rectangle 3.jpg'
export default function Body() {
    localStorage.setItem('name', "Gembucket");
    const name = localStorage.getItem('name');
    return (
        <div>
            <h1 className="gembucket">{name}</h1>
            <button class="pen"><a href="#popup1"><i class="fas fa-pen"></i></a></button>
            <div id="popup1" class="overlay">
                <div class="popup">
                    <div class="form">
                        <h2 class="pj">Project</h2>
                        <h3 class="name">Name <span>*</span></h3>
                        <input class="input1" type="text" value="    Gembucket" />
                        <h3>Keywords</h3>
                        <input type="text" class="input2" />
                        <p class="t1">#solar_breeze <span> x</span></p>
                        <p class="t2">#red_hold <span> x</span> </p>
                        <p class="t3">#card_guard <span> x</span></p>
                        <p class="t4">#lotstring <span> x</span></p>
                        <p class="t5">#tough_joy_fax <span> x</span></p>
                        <p class="t6">#cardify <span> x</span></p>
                        <h3 class="su">Summary <span> *</span></h3>
                        <textarea class="input3" rows="4">   Tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio	feugiat non pretium quis lectus suspendisse.</textarea>
                        <h3>Websites</h3>
                        <div>
                            <input class="ct1" type="text" value="   https://gembucket.com" />
                            <select class="choice" name="choice">
                                <option value="Official">Official site</option>
                            </select>
                            <button class="re">Remove</button>
                        </div>
                        <button class="add">Add another website</button>
                    </div>
                    <button class="bt1"><a href="http://localhost:3000/">Cancel</a></button>
                    <button class="bt2"><a href="http://localhost:3000/">Save</a></button>
                </div>
            </div>

            <p class="a">#solar_breeze</p>
            <p class="b">#red_hold</p>
            <p class="c">#card_guard</p>
            <p class="d">#lostring</p>
            <p class="e">#tough_joy_fax</p>
            <p class="f">#cardify</p>
            <p class="text1">Tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at neque aenean auctor
                gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio feugiat non pretium
                quis lectus suspendisse.</p>
            <p class="off">Official site:</p>
            <a href="https://gembucket.com" class="li">https://gembucket.com</a>
            <img src={h2} alt="" class="img1"></img>
            <h1 class="h2">Description</h1>
            <button class="poo"><a href="#popup2"><i class="fas fa-pen"></i></a></button>
            <div id="popup2" class="overlay">
                <div class="popup">
                    <div class="form">
                        <h3>Description</h3>
                        <img class="edit" src={edit} alt=""></img>
                        <div class="text-description" rows="4" cols="90">
                            <li class="liedit">Dugue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante
                                vel nasand praesent blandit lacinia erat vestibulum sed.</li>
                            <li class="liedit">Augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere.</li>
                            <li class="liedit">Liam neque vestibulum eget vulputate ut ultrices vel.</li>
                            <br />
                            <p class="count">320/500</p>
                            <button class="btt1"><a href="http://localhost:3000/">Cancel</a></button>
                            <button class="btt2"><a href="http://localhost:3000/">Save</a></button>
                        </div>
                    </div>
                </div>
            </div>
            <li class="li1">Dugue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel nasand
                praesent blandit lacinia erat vestibulum sed.</li>
            <li class="li2">Augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere.</li>
            <li class="li3">Liam neque vestibulum eget vulputate ut ultrices vel.</li>
            <h1 class="h3">Features</h1>
            <button class="po3"><a href="#popup3"><i class="fas fa-pen"></i></a></button>
            <div id="popup3" class="overlay">
                <div class="popup3">
                    <div class="croll">
                        <h3>Features</h3>
                        <img class="photo3" src={photo3}></img>
                        <div class="title-edit">
                            <h4>Title <span> *</span></h4>
                            <input class="ipt1" type="text" value="  User Reasearch  " size="40" />
                            <h4 class="Des">Description <span> *</span></h4>
                            <textarea class="ipt2" name="w3review" rows="4"
                                cols="42">   Ipsum ac tellus semper interdum mauris libero ullamcorper purus sit amet nulla quisque arcu libero rustrum sempereed ac lobortis vel dapibus at.</textarea>
                        </div>
                        <img class="photo1" src={photo1}></img>
                        <div class="title-edit">
                            <h4>Title <span> *</span></h4>
                            <input type="text" value="    Getting stakeholder" size="40" />
                            <h4>Description <span> *</span></h4>
                            <textarea name="w3review" rows="4"
                                cols="42">   Ipsum ac tellus semper interdum mauris libero ullamcorper purus sit amet nulla quisque arcu libero rustrum sempereed ac lobortis vel dapibus at.</textarea>
                        </div>
                        <img class="photo2" src={photo2}></img>
                        <div class="title-edit">
                            <h4>Title <span> *</span></h4>
                            <input type="text" value="    User interaction" size="40" />
                            <h4>Description <span> *</span></h4>
                            <textarea name="w3review" rows="4"
                                cols="42">   Sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt anteca veal ipsum praesent blandit lacinia erat vestibulum sed at magna.</textarea>
                        </div>
                        <button class="add">Add another website</button>
                        <button class="bt1"><a
                            href="http://localhost:3000/">Cancel</a></button>
                        <button class="bt2"><a href="http://localhost:3000/">Save</a></button>
                    </div>
                </div>
            </div>
            <img src={f1} alt="" class="f1"></img>
            <p class="fh1">User Reasearch</p>
            <p class="ft1">Metus vitae durea nullam ipsum aliquam non mauris morbi non lectus aliquam sit amet aliquam dieam earn
                magna bibendum imperdiet nullam orci pede.</p>
            <hr class="line-1"></hr>
            <img src={f2} alt="" class="f2"></img>
            <p class="fh2">Getting stakehoder</p>
            <p class="ft2">Ipsum ac tellus semper interdum mauris libero ullamcorper purus sit amet nulla quisque arcu libero
                rustrum sempereed ac lobortis vel dapibus at.</p>
            <hr class="line-2"></hr>
            <img src={f3} alt="" class="f3"></img>
            <p class="fh3">User interaction</p>
            <p class="ft3">Sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt anteca veal ipsum praesent
                blandit lacinia erat vestibulum sed at magna.</p>
            <hr class="line-3"></hr>
            <h1 class="h4">Team-member</h1>
            <p class="Me1">Antons Playden </p>
            <img src={Me1} alt="" class="Me1"></img>
            <p class="Me1_1">Dental Hygienist</p>
            <p class="Me2">Lowe Coronas </p>
            <img src={Me2} alt="" class="Me2"></img>
            <p class="Me2_2">Financial Analyst</p>
            <p class="Me3">Galvan Bonifas </p>
            <img src={Me3} alt="" class="Me3"></img>
            <p class="Me3_3">Media Manager</p>
            <p class="Me4">Galvan Bonifas </p>
            <img src={Me4} alt="" class="Me4"></img>
            <p class="Me4_4">Media Manager</p>
            <h1 class="h5">Want to know more, contact me!</h1>
            <div class="box">
                <img src={icon1} alt="" class="icon1"></img>
                <div class="icon">
                    <p class="icon">pattietrusdale@gmail.com</p>
                </div>
                <img src={icon2} alt="" class="icon2"></img>
                <div class="icon2">
                    <p class="icon">+8421 223 2234</p>
                </div>
                <img src={icon3} alt="" class="icon3"></img>
                <div class="icon2">
                    <p class="icon">34 Milwaukee Avenue</p>
                </div>
            </div>
            <div class="infor">
                <img src={icon4} alt="" class="icon4"></img>
                <div class="icon5">
                    <p class="icon5">pattietrusdale@gmail.com</p>
                </div>
            </div>
            <div class="in">
                <img src={icon6} alt="" class="icon6"></img>
                <div class="icon5">
                    <p class="icon5">linkedin.com/in/pattie-trusdale-34...</p>
                </div>
            </div>
            <div class="fa">
                <img src={icon7} alt="" class="icon7"></img>
                <div class="icon5">
                    <p class="icon5">facebook.com/pattie.trusdale</p>
                </div>
            </div>
        </div>
    )
}