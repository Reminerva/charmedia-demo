import React, { useState, useEffect } from 'react';
import productList from '../../assets/database/database';
import { Link } from 'react-router-dom';

const Header = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const handleSearchChange = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    if (term) {
      const filteredProducts = productList.filter((product) =>
        product.name.toLowerCase().includes(term)
      );
      setSuggestions(filteredProducts.slice(0, 5));
    } else {
      setSuggestions([]);
    }
  };

  const handleSearchFocus = () => {
    setIsSearchFocused(true);
  };

  const handleSearchBlur = () => {
    // Delay untuk menghindari hilangnya rekomendasi saat mengklik item
    setTimeout(() => {
      setIsSearchFocused(false);
      setSuggestions([]);
    }, 100);
  };

  const handleSuggestionClick = () => {
    setSuggestions([]);
    setIsSearchFocused(false);
    setSearchTerm(''); // Optional: Clear the search term after clicking a suggestion
  };

  const headerBgColor = props.isHomepage ? 'bg-[#fff8f0]' : 'bg-[#FDDDE6]';
  const hoverBgColor = props.isHomepage ? 'bg-[#e47068]' : 'bg-[#fff8f0]';
  const hoverTextColor = props.isHomepage ? 'text-[#fff8f0]' : 'bg-[#e47068]';
  const borderColor = props.isHomepage ? 'border-[#e47068]' : 'border-[#e47068]';
  const textColor = props.isHomepage ? 'text-[#e47068]' : 'text-[#e47068]';
  const placeholderColor = props.isHomepage ? 'placeholder-[#e47068]' : 'placeholder-[#e47068]';

  return (
    <header className={`${headerBgColor} py-2 px-4 flex justify-center shadow-xl fixed top-0 left-0 right-0 z-20`}>
      <div className={`w-80 h-10 border ${borderColor} rounded-full flex items-center px-3 relative`}>
        <input
          type="text"
          placeholder="Search"
          className={`flex-grow bg-transparent ${textColor} ${placeholderColor} outline-none`}
          value={searchTerm}
          onChange={handleSearchChange}
          onFocus={handleSearchFocus}
          onBlur={handleSearchBlur}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 ${textColor}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18.5a7.5 7.5 0 006.15-3.85z"
          />
        </svg>

        {suggestions.length > 0 && isSearchFocused && (
          <div className={`absolute top-full left-0 right-0 ${headerBgColor} outline-[#e47068] outline-1 shadow-md rounded-md z-10 mt-1`}>
            <ul>
              {suggestions.map((product) => (
                <li
                  key={product.slug}
                  className={`p-2 hover:${hoverBgColor} hover:${hoverTextColor} cursor-pointer text-[#e47068]`}
                  onClick={handleSuggestionClick}
                >
                  <Link to={`/product/${product.slug}`} className="block">
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;