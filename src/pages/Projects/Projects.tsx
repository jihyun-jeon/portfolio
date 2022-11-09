import React from "react";
import { useNavigate } from "react-router-dom";
import "./Projects.css";

function Projects() {
  const navigate = useNavigate();

  const onClickProject = (e: React.MouseEvent<HTMLDivElement>) => {
    const value = (e.currentTarget as HTMLDivElement).dataset.value;

    if (value) {
      navigate(value);
    }
  };

  return (
    <div className="_projects">
      <h1 className="font-ll">Projects</h1>
      <div className="itemContainer">
        <div className="item" data-value="mars" onClick={onClickProject}>
          <div className="itemBgContainer">
            <img src="/imgs/musmaBg.png" />
          </div>
          <div className="ImgDescription">
            <p className="title">MARS 프로젝트</p>
            <p>
              <span className="blue">React.js</span>
              <span className="green">Typescript</span>
              <span className="rosybrown">MobX</span>
              <span className="violet">Tailwind</span>
              <span className="yellow">Javascript</span>
            </p>
          </div>
        </div>
        <div className="item" data-value="account" onClick={onClickProject}>
          <div className="itemBgContainer">
            <img src="/imgs/accountBg.png" />
          </div>
          <div className="ImgDescription">
            <p className="title">Account Manage App</p>
            <p>
              <span className="blue">React.js</span>
              <span className="rosybrown">Redux-toolkit</span>
              <span className="yellow">Axios</span>
              <span className="violet">Tailwind</span>
              <span className="violet">Ant design</span>
            </p>
          </div>
        </div>

        <div className="item" data-value="airbnb" onClick={onClickProject}>
          <div className="itemBgContainer">
            <img src="/imgs/airbnbBg.png" />
          </div>
          <div className="ImgDescription">
            <p className="title">Tamna BnB</p>
            <p>
              <span className="blue">React.js</span>
              <span className="violet">Styled-component</span>
              <span className="yellow">HTML</span>
            </p>
          </div>
        </div>

        <div className="item" data-value="threppa" onClick={onClickProject}>
          <div className="itemBgContainer">
            <img src="/imgs/threppaBg.png" />
          </div>
          <div className="ImgDescription">
            <p className="title">Threppa &nbsp;(신발 온라인 쇼핑몰)</p>
            <p>
              <span className="blue">React.js</span>
              <span className="violet">SCSS</span>
              <span className="yellow">HTML</span>
            </p>
          </div>
        </div>
      </div>
      <h1 className="font-ll toyTitle">Toy Project</h1>
      <div className="itemContainer">
        <div className="item" data-value="instargram" onClick={onClickProject}>
          <div className="itemBgContainer">
            <img src="/imgs/instargramBg.gif" />
          </div>
          <div className="ImgDescription">
            <p className="title">Instargram</p>
            <p>
              <span className="blue">React.js</span>
              <span className="yellow">Javascript</span>
              <span className="green">CSS</span>
              <span className="yellow">HTML</span>
            </p>
          </div>
        </div>
        <div className="item">s</div>
      </div>
    </div>
  );
}

export default Projects;
