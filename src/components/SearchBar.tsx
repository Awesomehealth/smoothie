
import { useState, useRef } from "react";
import { Search, Paperclip, Globe, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface SearchBarProps {
  onSearch: (query: string) => void;
  onImageUpload?: (file: File) => void;
  onUrlSubmit?: (url: string) => void;
  placeholder?: string;
  initialQuery?: string;
  navigateOnSearch?: boolean;
}

const SearchBar = ({ 
  onSearch, 
  onImageUpload, 
  onUrlSubmit,
  placeholder = "Smoothie, Shakes, Acai bowl...",
  initialQuery = "",
  navigateOnSearch = true
}: SearchBarProps) => {
  const [query, setQuery] = useState(initialQuery);
  const [isUrlInputVisible, setIsUrlInputVisible] = useState(false);
  const [url, setUrl] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const queryInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
      
      // Navigate to search results page if needed
      if (navigateOnSearch) {
        navigate(`/search?q=${encodeURIComponent(query)}`);
      }
    } else if (isUrlInputVisible && url.trim() && onUrlSubmit) {
      onUrlSubmit(url);
      if (navigateOnSearch) {
        navigate(`/search?url=${encodeURIComponent(url)}`);
      }
    }
  };

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && onImageUpload) {
      onImageUpload(file);
      e.target.value = ''; // Reset input after selecting a file
    }
  };

  const toggleUrlInput = () => {
    setIsUrlInputVisible(!isUrlInputVisible);
    if (!isUrlInputVisible) {
      setQuery("");
      setTimeout(() => {
        const urlInput = document.getElementById("smoothie-url-input");
        if (urlInput) {
          urlInput.focus();
        }
      }, 100);
    } else {
      setUrl("");
      setTimeout(() => {
        queryInputRef.current?.focus();
      }, 100);
    }
  };

  const clearUrl = () => {
    setUrl("");
    setIsUrlInputVisible(false);
    setTimeout(() => {
      queryInputRef.current?.focus();
    }, 100);
  };

  return (
    <div className="w-full mx-auto">
      <form onSubmit={handleSubmit} className="relative">
        <div className="search-container rounded-full bg-white border border-gray-200 flex items-center py-2 px-4">
          {!isUrlInputVisible ? (
            <>
              {/* Left side - Search icon and input */}
              <div className="flex-grow flex items-center">
                <Search className="h-5 w-5 text-gray-400 mr-2" />
                <input
                  ref={queryInputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={placeholder}
                  className="flex-grow bg-transparent border-none focus:outline-none focus:ring-0 text-gray-900"
                  aria-label="Search for smoothie recipes"
                />
              </div>
              
              {/* Right side - Action buttons */}
              <div className="flex items-center space-x-2">
                <button
                  type="button"
                  onClick={toggleUrlInput}
                  className="rounded-full p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-colors"
                  aria-label="Import from URL"
                >
                  <Globe className="h-5 w-5" />
                </button>
                
                {onImageUpload && (
                  <button 
                    type="button" 
                    onClick={handleImageClick} 
                    className="rounded-full p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-colors"
                    aria-label="Attach image"
                  >
                    <Paperclip className="h-5 w-5" />
                  </button>
                )}
                
                <button
                  type="submit"
                  className="rounded-full p-2 bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors"
                  aria-label="Search"
                >
                  <Search className="h-5 w-5" />
                </button>
              </div>
            </>
          ) : (
            <>
              {/* URL Input (Toggle View) */}
              <input
                id="smoothie-url-input"
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Paste URL to import..."
                className="flex-grow bg-transparent border-none focus:outline-none focus:ring-0 text-gray-900"
                aria-label="Enter URL for recipe extraction"
              />
              
              {/* X button to clear and return to normal search */}
              <button 
                type="button" 
                onClick={clearUrl}
                className="rounded-full p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-colors mr-2"
                aria-label="Cancel URL input"
              >
                <X className="h-5 w-5" />
              </button>
              
              <button 
                type="submit"
                className="rounded-full p-2 bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors"
                aria-label="Import from URL"
              >
                <Search className="h-5 w-5" />
              </button>
            </>
          )}
        </div>

        {/* Hidden File Input */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
          aria-label="Upload image for recipe search"
        />
      </form>
    </div>
  );
};

export default SearchBar;
