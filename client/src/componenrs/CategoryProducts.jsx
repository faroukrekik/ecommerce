import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  Badge,
  Spinner,
} from "react-bootstrap";
import { FaFilter, FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import {
  getProductsByCategory,
  getAllCategories,
} from "../redux/actions/prodActions";
import ProductCard from "./ProductCard";
import "./CategoryProducts.css";

const CategoryProducts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { category } = useParams();

  const { Product, loading, categories } = useSelector(
    (state) => state.prodReducer
  );

  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12);

  useEffect(() => {
    if (category) {
      dispatch(getProductsByCategory(category));
    }
    dispatch(getAllCategories());
  }, [dispatch, category]);

  // Filter and sort products
  const filteredProducts = Product.filter((product) => {
    const matchesSearch =
      product.nameProd.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesPrice =
      (!priceRange.min || product.price >= parseFloat(priceRange.min)) &&
      (!priceRange.max || product.price <= parseFloat(priceRange.max));

    return matchesSearch && matchesPrice;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "name":
        return a.nameProd.localeCompare(b.nameProd);
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return parseFloat(b.rating) - parseFloat(a.rating);
      default:
        return 0;
    }
  });

  // Pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

  const handleCategoryClick = (cat) => {
    navigate(`/category/${cat}`);
    setCurrentPage(1);
    setSearchTerm("");
    setPriceRange({ min: "", max: "" });
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSortBy("name");
    setPriceRange({ min: "", max: "" });
    setCurrentPage(1);
  };

  if (loading) {
    return (
      <div className="loading-container">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <div className="category-products-container">
      <Container>
        {/* Header */}
        <div className="category-header">
          <h1>{category} Products</h1>
          <p>
            Found {sortedProducts.length} products in {category}
          </p>
        </div>

        <Row>
          {/* Sidebar Filters */}
          <Col lg={3} md={4} className="sidebar">
            <Card className="filter-card">
              <Card.Header>
                <FaFilter className="me-2" />
                Filters
              </Card.Header>
              <Card.Body>
                {/* Search */}
                <div className="filter-section">
                  <h6>Search</h6>
                  <Form.Group className="mb-3">
                    <div className="search-input">
                      <FaSearch className="search-icon" />
                      <Form.Control
                        type="text"
                        placeholder="Search products..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                  </Form.Group>
                </div>

                {/* Categories */}
                <div className="filter-section">
                  <h6>Categories</h6>
                  <div className="category-list">
                    {categories.map((cat) => (
                      <Button
                        key={cat}
                        variant={
                          cat === category ? "primary" : "outline-secondary"
                        }
                        size="sm"
                        className="category-btn"
                        onClick={() => handleCategoryClick(cat)}
                      >
                        {cat}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div className="filter-section">
                  <h6>Price Range</h6>
                  <Row>
                    <Col>
                      <Form.Control
                        type="number"
                        placeholder="Min"
                        value={priceRange.min}
                        onChange={(e) =>
                          setPriceRange({ ...priceRange, min: e.target.value })
                        }
                      />
                    </Col>
                    <Col>
                      <Form.Control
                        type="number"
                        placeholder="Max"
                        value={priceRange.max}
                        onChange={(e) =>
                          setPriceRange({ ...priceRange, max: e.target.value })
                        }
                      />
                    </Col>
                  </Row>
                </div>

                {/* Sort */}
                <div className="filter-section">
                  <h6>Sort By</h6>
                  <Form.Select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="name">Name</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Rating</option>
                  </Form.Select>
                </div>

                {/* Clear Filters */}
                <Button
                  variant="outline-secondary"
                  size="sm"
                  onClick={clearFilters}
                  className="w-100"
                >
                  Clear Filters
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Products Grid */}
          <Col lg={9} md={8}>
            {/* Results Summary */}
            <div className="results-summary">
              <div>
                Showing {indexOfFirstProduct + 1}-
                {Math.min(indexOfLastProduct, sortedProducts.length)} of{" "}
                {sortedProducts.length} products
              </div>
              <div className="active-filters">
                {searchTerm && (
                  <Badge bg="primary" className="me-2">
                    Search: {searchTerm}
                  </Badge>
                )}
                {priceRange.min && (
                  <Badge bg="info" className="me-2">
                    Min: ${priceRange.min}
                  </Badge>
                )}
                {priceRange.max && (
                  <Badge bg="info" className="me-2">
                    Max: ${priceRange.max}
                  </Badge>
                )}
              </div>
            </div>

            {/* Products Grid */}
            {currentProducts.length > 0 ? (
              <Row>
                {currentProducts.map((product) => (
                  <Col lg={4} md={6} key={product._id} className="mb-4">
                    <ProductCard el={product} />
                  </Col>
                ))}
              </Row>
            ) : (
              <div className="no-products">
                <h4>No products found</h4>
                <p>Try adjusting your filters or search terms.</p>
                <Button variant="primary" onClick={clearFilters}>
                  Clear All Filters
                </Button>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="pagination-container">
                <nav>
                  <ul className="pagination justify-content-center">
                    <li
                      className={`page-item ${
                        currentPage === 1 ? "disabled" : ""
                      }`}
                    >
                      <Button
                        className="page-link"
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                      >
                        Previous
                      </Button>
                    </li>

                    {[...Array(totalPages)].map((_, index) => {
                      const pageNumber = index + 1;
                      return (
                        <li
                          key={pageNumber}
                          className={`page-item ${
                            currentPage === pageNumber ? "active" : ""
                          }`}
                        >
                          <Button
                            className="page-link"
                            onClick={() => handlePageChange(pageNumber)}
                          >
                            {pageNumber}
                          </Button>
                        </li>
                      );
                    })}

                    <li
                      className={`page-item ${
                        currentPage === totalPages ? "disabled" : ""
                      }`}
                    >
                      <Button
                        className="page-link"
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                      >
                        Next
                      </Button>
                    </li>
                  </ul>
                </nav>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CategoryProducts;
