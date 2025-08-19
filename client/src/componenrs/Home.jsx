import React, { useEffect } from "react";
import { Carousel, Container, Row, Col, Card, Button } from "react-bootstrap";
import {
  FaStar,
  FaTruck,
  FaShieldAlt,
  FaHeadset,
  FaCreditCard,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getProfile } from "../redux/actions/userActions";
import { getProd } from "../redux/actions/prodActions";
import ProductCard from "./ProductCard";
import "./Home.css";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { Product, loading } = useSelector((state) => state.prodReducer);

  useEffect(() => {
    dispatch(getProfile());
    dispatch(getProd());
  }, [dispatch]);

  // Featured categories data
  const categories = [
    {
      id: 1,
      name: "Smartphones",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
      count: "150+ Products",
    },
    {
      id: 2,
      name: "Laptops",
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop",
      count: "80+ Products",
    },
    {
      id: 3,
      name: "Gaming",
      image:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
      count: "120+ Products",
    },
    {
      id: 4,
      name: "Accessories",
      image:
        "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&h=300&fit=crop",
      count: "200+ Products",
    },
  ];

  const handleCategoryClick = (categoryName) => {
    navigate(`/category/${categoryName}`);
  };

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Tech Enthusiast",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      text: "Amazing selection of products and fast delivery. Highly recommended!",
      rating: 5,
    },
    {
      id: 2,
      name: "Mike Chen",
      role: "Developer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      text: "Best prices I've found online. Customer service is exceptional.",
      rating: 5,
    },
    {
      id: 3,
      name: "Emily Davis",
      role: "Student",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      text: "Perfect for my tech needs. Quality products and great deals!",
      rating: 5,
    },
  ];

  return (
    <div className="home-container">
      {/* Hero Section with Carousel */}
      <section className="hero-section">
        <Carousel className="hero-carousel" indicators={false}>
          <Carousel.Item>
            <div className="carousel-item-content">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=600&fit=crop"
                alt="Latest Smartphones"
                className="carousel-image"
              />
              <div className="carousel-overlay">
                <div className="carousel-content">
                  <h1 className="carousel-title">Latest Smartphones</h1>
                  <p className="carousel-subtitle">
                    Discover the newest models with cutting-edge technology
                  </p>
                  <Button variant="primary" size="lg" className="carousel-btn">
                    Shop Now
                  </Button>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-item-content">
              <img
                src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=1200&h=600&fit=crop"
                alt="Gaming Laptops"
                className="carousel-image"
              />
              <div className="carousel-overlay">
                <div className="carousel-content">
                  <h1 className="carousel-title">Gaming Laptops</h1>
                  <p className="carousel-subtitle">
                    Powerful performance for ultimate gaming experience
                  </p>
                  <Button variant="primary" size="lg" className="carousel-btn">
                    Explore Gaming
                  </Button>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-item-content">
              <img
                src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=1200&h=600&fit=crop"
                alt="Tech Accessories"
                className="carousel-image"
              />
              <div className="carousel-overlay">
                <div className="carousel-content">
                  <h1 className="carousel-title">Tech Accessories</h1>
                  <p className="carousel-subtitle">
                    Complete your setup with premium accessories
                  </p>
                  <Button variant="primary" size="lg" className="carousel-btn">
                    View Accessories
                  </Button>
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <Container>
          <Row className="features-row">
            <Col md={3} className="feature-item">
              <div className="feature-icon">
                <FaTruck />
              </div>
              <h4>Free Shipping</h4>
              <p>On orders over $50</p>
            </Col>
            <Col md={3} className="feature-item">
              <div className="feature-icon">
                <FaShieldAlt />
              </div>
              <h4>Secure Payment</h4>
              <p>100% secure checkout</p>
            </Col>
            <Col md={3} className="feature-item">
              <div className="feature-icon">
                <FaHeadset />
              </div>
              <h4>24/7 Support</h4>
              <p>Dedicated support</p>
            </Col>
            <Col md={3} className="feature-item">
              <div className="feature-icon">
                <FaCreditCard />
              </div>
              <h4>Easy Returns</h4>
              <p>30 day return policy</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <Container>
          <div className="section-header">
            <h2>Shop by Category</h2>
            <p>Explore our wide range of tech products</p>
          </div>
          <Row>
            {categories.map((category) => (
              <Col lg={3} md={6} key={category.id} className="mb-4">
                <Card
                  className="category-card"
                  onClick={() => handleCategoryClick(category.name)}
                >
                  <div className="category-image-container">
                    <Card.Img
                      variant="top"
                      src={category.image}
                      className="category-image"
                    />
                    <div className="category-overlay">
                      <Button variant="outline-light">Shop Now</Button>
                    </div>
                  </div>
                  <Card.Body className="text-center">
                    <Card.Title>{category.name}</Card.Title>
                    <Card.Text className="text-muted">
                      {category.count}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products-section">
        <Container>
          <div className="section-header">
            <h2>Featured Products</h2>
            <p>Handpicked products for you</p>
          </div>
          {loading ? (
            <div className="loading-container">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <Row>
              {Product.slice(0, 8).map((product) => (
                <Col lg={3} md={6} key={product._id} className="mb-4">
                  <ProductCard el={product} />
                </Col>
              ))}
            </Row>
          )}
          <div className="text-center mt-4">
            <Button variant="outline-primary" size="lg">
              View All Products
            </Button>
          </div>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <Container>
          <div className="section-header text-center">
            <h2>What Our Customers Say</h2>
            <p>Real reviews from real customers</p>
          </div>
          <Row>
            {testimonials.map((testimonial) => (
              <Col lg={4} md={6} key={testimonial.id} className="mb-4">
                <Card className="testimonial-card">
                  <Card.Body className="text-center">
                    <div className="testimonial-rating mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} className="star-icon" />
                      ))}
                    </div>
                    <Card.Text className="testimonial-text">
                      "{testimonial.text}"
                    </Card.Text>
                    <div className="testimonial-author">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="testimonial-avatar"
                      />
                      <div>
                        <h5 className="mb-0">{testimonial.name}</h5>
                        <small className="text-muted">{testimonial.role}</small>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <Container>
          <div className="newsletter-card">
            <Row className="align-items-center">
              <Col lg={6}>
                <h3 className="nl-title">Stay Updated</h3>
                <p className="nl-text">
                  Subscribe to our newsletter for the latest products and
                  exclusive offers.
                </p>
              </Col>
              <Col lg={6}>
                <div className="newsletter-form">
                  <div className="input-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email address"
                    />
                    <Button variant="primary">Subscribe</Button>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      {/* Footer Section */}
      <footer className="footer-section">
        <Container>
          <Row>
            <Col lg={3} md={6} className="mb-4">
              <h5>About Us</h5>
              <p>
                Your trusted source for quality tech products. We provide the
                latest gadgets and electronics with excellent customer service.
              </p>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <h5>Quick Links</h5>
              <ul className="footer-links">
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#products">Products</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <h5>Customer Service</h5>
              <ul className="footer-links">
                <li>
                  <a href="#shipping">Shipping Info</a>
                </li>
                <li>
                  <a href="#returns">Returns</a>
                </li>
                <li>
                  <a href="#warranty">Warranty</a>
                </li>
                <li>
                  <a href="#support">Support</a>
                </li>
              </ul>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <h5>Connect With Us</h5>
              <div className="social-links">
                <a href="#facebook" className="social-link">
                  Facebook
                </a>
                <a href="#twitter" className="social-link">
                  Twitter
                </a>
                <a href="#instagram" className="social-link">
                  Instagram
                </a>
                <a href="#linkedin" className="social-link">
                  LinkedIn
                </a>
              </div>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col className="text-center">
              <p>&copy; 2024 TechStore. All rights reserved.</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default Home;
