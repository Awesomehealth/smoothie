
import { useState, useRef } from "react";
import { Search, Paperclip, FileSymlink } from "lucide-react";

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
  placeholder = "What are you in mood for?" 
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

  return (
    <div className="w-full mx-auto">
      <form onSubmit={handleSubmit} className="relative">
        {/* Main Search Input with Integrated Icons */}
        {!isUrlInputVisible && (
          <div className="relative">
            <div className="search-input-container">
              <div className="flex items-center">
                {/* Left side buttons */}
                <div className="flex items-center px-4">
                  {onImageUpload && (
                    <button 
                      type="button" 
                      onClick={handleImageClick} 
                      className="search-icon-button mr-2"
                      aria-label="Attach image"
                    >
                      <Paperclip className="h-5 w-5" />
                      <span className="text-sm ml-2">Attach</span>
                    </button>
                  )}
                  
                  {onUrlSubmit && (
                    <button 
                      type="button" 
                      onClick={toggleUrlInput}
                      className="search-icon-button"
                      aria-label="Import from URL"
                    >
                      <FileSymlink className="h-5 w-5" />
                      <span className="text-sm ml-2">Import</span>
                    </button>
                  )}
                </div>

                {/* Search input */}
                <input
                  ref={queryInputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={placeholder}
                  className="search-input-integrated flex-grow"
                  aria-label="Search for smoothie recipes"
                />
                
                {/* Right side search button */}
                <div className="flex items-center px-4">
                  <button
                    type="submit"
                    className="search-icon-button search-button"
                    aria-label="Search"
                  >
                    <Search className="h-5 w-5" />
                    <span className="text-sm ml-2">Search</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* URL Input (Toggle View) */}
        {isUrlInputVisible && (
          <div className="relative">
            <div className="search-input-container">
              <div className="flex items-center">
                {/* Left side back button */}
                <div className="flex items-center px-4">
                  <button 
                    type="button" 
                    onClick={toggleUrlInput}
                    className="search-icon-button"
                    aria-label="Back to text search"
                  >
                    <Search className="h-5 w-5" />
                    <span className="text-sm ml-2">Back</span>
                  </button>
                </div>

                {/* URL input */}
                <input
                  id="smoothie-url-input"
                  type="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="Paste recipe URL from YouTube, Instagram, Pinterest..."
                  className="search-input-integrated flex-grow"
                  aria-label="Enter URL for recipe extraction"
                />
                
                {/* Right side import button */}
                <div className="flex items-center px-4">
                  <button 
                    type="submit"
                    className="search-icon-button search-button"
                    aria-label="Extract recipe from URL"
                  >
                    <FileSymlink className="h-5 w-5" />
                    <span className="text-sm ml-2">Import</span>
                  </button>
                </div>
              </div>
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
      </form>
    </div>
  );
};

export default SearchBar;
