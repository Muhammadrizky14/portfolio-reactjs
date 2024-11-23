import React, { useState } from 'react';
import { Star } from 'react-feather';
import ScrollAnimation from './ScrollAnimation';
import './Reviews.css';

const initialReviews = [
  {
    id: 1,
    name: 'Farhonn ea',
    company: 'Tech Solutions Inc.',
    review: 'Rizky membuat situs web yang luar biasa untuk perusahaan kami. Perhatiannya terhadap detail dan kemampuannya menerjemahkan visi kami menjadi kenyataan sangat mengesankan.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Simic kuler',
    company: 'Creative Designs Co.',
    review: 'Bekerja dengan Rizky adalah pengalaman yang menyenangkan. Ia sangat mahir dalam pengembangan dan desain. Projek kami selesai tepat waktu dan melampaui harapan.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Ahgee jon',
    company: 'E-commerce Experts',
    review: 'Keahlian Rizky dalam pengembangan full-stack benar-benar luar biasa. Ia membangun platform e-commerce yang tangguh bagi kami, yang mudah digunakan dan dapat diskalakan.',
    rating: 4,
  },
];

function Reviews() {
  const [reviews, setReviews] = useState(initialReviews);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    review: '',
    rating: 0,
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'rating' ? parseInt(value) : value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create new review with unique ID
    const newReview = {
      ...formData,
      id: Date.now(),
    };

    // Update reviews list
    setReviews((prevReviews) => [...prevReviews, newReview]);

    // Reset form
    setFormData({
      name: '',
      company: '',
      review: '',
      rating: 0,
    });
  };

  return (
    <section id="reviews" className="reviews">
      <div className="container">
        {/* Section Title */}
        <ScrollAnimation>
          <h2>Ulasan Clien</h2>
          <p className="subtitle">Apa yang orang katakan tentang pekerjaanku</p>
        </ScrollAnimation>

        {/* Reviews Grid */}
        <div className="reviews-grid">
          {reviews.map((review) => (
            <ScrollAnimation key={review.id}>
              <div className="review-card">
                <div className="review-header">
                  <h3>{review.name}</h3>
                  <p className="company">{review.company}</p>
                </div>
                <p className="review-text">{review.review}</p>
                <div className="rating">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      fill={i < review.rating ? '#FFC107' : 'none'}
                      stroke={i < review.rating ? '#FFC107' : '#CBD5E0'}
                    />
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Add Review Form */}
        <ScrollAnimation>
          <form onSubmit={handleSubmit} className="review-form">
            <h3>Tambahkan Ulasan</h3>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Nama"
              required
            />
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              placeholder="Perusahaan"
              required
            />
            <textarea
              name="review"
              value={formData.review}
              onChange={handleInputChange}
              placeholder="Ulasan"
              required
            />
            <label>
              Rating:
              <select
                name="rating"
                value={formData.rating}
                onChange={handleInputChange}
                required
              >
                <option value="">Pilih Rating</option>
                {[1, 2, 3, 4, 5].map((rating) => (
                  <option key={rating} value={rating}>
                    {rating} Star{rating > 1 ? 's' : ''}
                  </option>
                ))}
              </select>
            </label>
            <button type="submit">Tambah Ulasan</button>
          </form>
        </ScrollAnimation>
      </div>
    </section>
  );
}

export default Reviews;
