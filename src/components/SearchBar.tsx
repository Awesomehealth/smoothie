
import { useState, useRef } from "react";
import { Search, Image, Link, Sparkles, X } from "lucide-react";

interface SearchBarProps {
  onSearch: (query: string) => void;
  onImageUpload?: (file: File) => void;
  onUrlSubmit?: (url: string) => void;
  placeholder?: string;
}

const SearchBar = ({ 
  onSearch, 
  onImageUpload, 
  onUrlSubmit,
  placeholder = "Ask anything..." 
}: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const [isUrlInputVisible, setIsUrlInputVisible] = useState(false);
  const [url, setUrl] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const queryInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    } else if (isUrlInputVisible && url.trim() && onUrlSubmit) {
      onUrlSubmit(url);
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

  const handleSmartSearch = () => {
    if (query.trim()) {
      onSearch(`smart:${query}`);
    }
  };

  return (
    <div className="w-full mx-auto">
      <form onSubmit={handleSubmit} className="relative flex flex-col gap-2">
        {/* Main Search Input */}
        {!isUrlInputVisible && (
          <div className="relative">
            <input
              ref={queryInputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={placeholder}
              className="search-input pr-32 w-full h-16 text-lg" 
              aria-label="Search for smoothie recipes"
            />
            <div className="absolute right-0 top-0 flex h-full">
              {onImageUpload && (
                <button 
                  type="button" 
                  onClick={handleImageClick} 
                  className="h-full px-3 bg-transparent text-gray-500 hover:text-gray-700 focus:outline-none transition-colors"
                  aria-label="Upload image"
                >
                  <Image className="h-5 w-5" />
                </button>
              )}
              {onUrlSubmit && (
                <button 
                  type="button" 
                  onClick={toggleUrlInput} 
                  className="h-full px-3 bg-transparent text-gray-500 hover:text-gray-700 focus:outline-none transition-colors"
                  aria-label="Paste URL"
                >
                  <Link className="h-5 w-5" />
                </button>
              )}
              <button 
                type="button" 
                onClick={handleSmartSearch}
                className="h-full px-3 bg-transparent text-gray-500 hover:text-gray-700 focus:outline-none transition-colors"
                aria-label="AI Smart Search"
              >
                <Sparkles className="h-5 w-5" />
              </button>
              <button 
                type="submit" 
                className="search-button mr-2" 
                aria-label="Search"
              >
                <Search className="h-6 w-6" />
              </button>
            </div>
          </div>
        )}

        {/* URL Input (Toggle View) */}
        {isUrlInputVisible && (
          <div className="relative">
            <input
              id="smoothie-url-input"
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Paste recipe URL from YouTube, Instagram, Pinterest..."
              className="search-input pr-24 w-full h-16 text-lg" 
              aria-label="Enter URL for recipe extraction"
            />
            <div className="absolute right-0 top-0 flex h-full">
              <button 
                type="button" 
                onClick={toggleUrlInput} 
                className="h-full px-3 bg-transparent text-gray-500 hover:text-gray-700 focus:outline-none transition-colors"
                aria-label="Back to text search"
              >
                <X className="h-5 w-5" />
              </button>
              <button 
                type="submit" 
                className="search-button mr-2" 
                aria-label="Extract recipe from URL"
              >
                <Search className="h-6 w-6" />
              </button>
            </div>
          </div>
        )}

        {/* Hidden File Input */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
          aria-label="Upload image for recipe search"
        />

        {/* Autocomplete Suggestions (shown when typing) */}
        {query.length > 2 && !isUrlInputVisible && (
          <div className="absolute top-16 left-0 right-0 bg-white rounded-b-lg shadow-lg z-10 border border-gray-200 border-t-0">
            <div className="py-2 px-4 hover:bg-gray-100 cursor-pointer" onClick={() => setQuery("High-protein post-workout smoothie")}>
              High-protein post-workout smoothie
            </div>
            <div className="py-2 px-4 hover:bg-gray-100 cursor-pointer" onClick={() => setQuery("Low-carb green smoothie for weight loss")}>
              Low-carb green smoothie for weight loss
            </div>
            <div className="py-2 px-4 hover:bg-gray-100 cursor-pointer" onClick={() => setQuery("Keto-friendly berry smoothie")}>
              Keto-friendly berry smoothie
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default SearchBar;
