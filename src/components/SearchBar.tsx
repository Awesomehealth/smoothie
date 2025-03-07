
import { useState, useRef } from "react";
import { Search, Image, ArrowUp, X, Paperclip, FileSymlink, ClipboardList, Globe } from "lucide-react";

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
      <form onSubmit={handleSubmit} className="relative flex flex-col gap-4">
        {/* Main Search Input */}
        {!isUrlInputVisible && (
          <div className="relative">
            <input
              ref={queryInputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={placeholder}
              className="search-input"
              aria-label="Search for smoothie recipes"
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2">
              <button
                type="submit"
                className="flex items-center justify-center h-10 w-10 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-700"
                aria-label="Search"
              >
                <ArrowUp className="h-5 w-5" />
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
              className="search-input"
              aria-label="Enter URL for recipe extraction"
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-2">
              <button 
                type="button" 
                onClick={toggleUrlInput} 
                className="flex items-center justify-center h-10 w-10 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-700"
                aria-label="Back to text search"
              >
                <X className="h-5 w-5" />
              </button>
              <button 
                type="submit" 
                className="flex items-center justify-center h-10 w-10 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-700"
                aria-label="Extract recipe from URL"
              >
                <ArrowUp className="h-5 w-5" />
              </button>
            </div>
          </div>
        )}

        {/* Action Buttons Row */}
        {!isUrlInputVisible && (
          <div className="flex justify-between">
            <div className="flex gap-4">
              {onImageUpload && (
                <button 
                  type="button" 
                  onClick={handleImageClick} 
                  className="search-action-button"
                  aria-label="Attach image"
                >
                  <Paperclip className="h-5 w-5" />
                  <span className="ml-2">Attach</span>
                </button>
              )}
              {onUrlSubmit && (
                <button 
                  type="button" 
                  onClick={toggleUrlInput} 
                  className="search-action-button"
                  aria-label="Import from URL"
                >
                  <FileSymlink className="h-5 w-5" />
                  <span className="ml-2">Import</span>
                </button>
              )}
              <button 
                type="button" 
                onClick={handleSmartSearch}
                className="search-action-button"
                aria-label="AI Smart Search"
              >
                <ClipboardList className="h-5 w-5" />
                <span className="ml-2">Plan</span>
              </button>
            </div>
            <button 
              type="button"
              className="search-action-button"
              aria-label="Public"
            >
              <Globe className="h-5 w-5" />
              <span className="ml-2">Public</span>
            </button>
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
