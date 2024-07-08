import React, { useMemo } from "react";
import { Carousel } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../redux/actions/userActions";
import { getProd } from "../redux/actions/prodActions";
import { getCart } from "../redux/actions/CartActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userReducer);
  console.log(user);

  useMemo(async () => {
    await dispatch(getProfile());
    await dispatch(getProd());
  }, []);

  return (
    <div>
      <div className="carousel-class">
        <Carousel>
          <Carousel.Item>
            <img
              src="https://cdn.mos.cms.futurecdn.net/izzxkaz596Jhq7tsSk8KYa.jpg"
              alt="tablette"
            />{" "}
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://www.lifewire.com/thmb/CG8-Yts3yCbtyQ2VDB0oameOSag=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/WhatisaPCledephoto-b22a81997d83442eac276834e935922f.jpg"
              alt="pc"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://www.notebookcheck.biz/fileadmin/Notebooks/News/_nc3/iPhone15pro.jpeg"
              alt="iphone"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="containerr" style={{ marginTop: "50px" }}>
        <div className="row" id="t-cards">
          <div className="col">
            <div className="card">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOIl-GW_7X7aa6-JGUQEs0EChe6pdi8L13UqNRKW9RtA&s"
                alt="manette"
                style={{ width: "300px", height: "150px" }}
              />
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://techspace.tn/wp-content/uploads/2024/05/Skermskoot-2024-02-08-215uu.png.webp"
                alt="pc"
                style={{ width: "300px", height: "150px" }}
              />
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://www.pchmayoreo.com/pub/media/catalog/product/7/5/7503030903431-x.png"
                alt=""
                style={{ width: "300px", height: "150px" }}
              />
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuPBQHOBh5FFbwatBZtK5pPeDYVafG0ia0ckON4VkLcg&s
                
                "
                alt="router"
                style={{ width: "300px", height: "150px" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container " id="products-cards">
        <h1 className="text-center">Products</h1>
        <div className="row" style={{ marginTop: "30px" }}>
          <div className="col-md">
            <div className="card">
              <img
                src="https://zoom.com.tn/60656-large_default/apple-iphone-15-pro-max-256gb-titane-naturel-mu793aaa.jpg"
                alt=""
              />
              <div className="card-body"></div>
              <h3 className="tect-center">Iphone 15 Pro</h3>
              <p>Lorem ipsum dolor sit</p>
              <div className="star">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
              <h2>
                3500Dt <span></span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
