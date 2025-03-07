
import { useState, useRef } from "react";
import { Search, Image, Link, Sparkles, X, ArrowUp, Paperclip, FileSymlink, ClipboardList, Globe } from "lucide-react";

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
              className="w-full h-16 px-6 py-4 text-lg bg-gray-900/90 text-white rounded-xl border border-gray-800 focus:outline-none focus:border-gray-700 focus:ring-1 focus:ring-gray-700 placeholder-gray-500"
              aria-label="Search for smoothie recipes"
            />
            <div className="absolute right-2 bottom-0 flex h-full items-center gap-1">
              {onImageUpload && (
                <button 
                  type="button" 
                  onClick={handleImageClick} 
                  className="flex items-center justify-center h-10 px-3 text-gray-400 hover:text-white focus:outline-none transition-colors"
                  aria-label="Upload image"
                >
                  <Paperclip className="h-5 w-5" />
                  <span className="ml-2 text-sm">Attach</span>
                </button>
              )}
              {onUrlSubmit && (
                <button 
                  type="button" 
                  onClick={toggleUrlInput} 
                  className="flex items-center justify-center h-10 px-3 text-gray-400 hover:text-white focus:outline-none transition-colors"
                  aria-label="Paste URL"
                >
                  <FileSymlink className="h-5 w-5" />
                  <span className="ml-2 text-sm">Import</span>
                </button>
              )}
              <button 
                type="button" 
                onClick={handleSmartSearch}
                className="flex items-center justify-center h-10 px-3 text-gray-400 hover:text-white focus:outline-none transition-colors"
                aria-label="AI Smart Search"
              >
                <ClipboardList className="h-5 w-5" />
                <span className="ml-2 text-sm">Plan</span>
              </button>
              <div className="mx-2 h-8 w-px bg-gray-700"></div>
              <button 
                type="button"
                className="flex items-center justify-center h-10 px-3 text-gray-400 hover:text-white focus:outline-none transition-colors"
                aria-label="Public"
              >
                <Globe className="h-5 w-5" />
                <span className="ml-2 text-sm">Public</span>
              </button>
              <button
                type="submit"
                className="flex items-center justify-center h-8 w-8 rounded-lg bg-gray-700 hover:bg-gray-600 text-white ml-1 mr-2"
                aria-label="Search"
              >
                <ArrowUp className="h-4 w-4" />
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
              className="w-full h-16 px-6 py-4 text-lg bg-gray-900/90 text-white rounded-xl border border-gray-800 focus:outline-none focus:border-gray-700 focus:ring-1 focus:ring-gray-700 placeholder-gray-500"
              aria-label="Enter URL for recipe extraction"
            />
            <div className="absolute right-0 top-0 flex h-full">
              <button 
                type="button" 
                onClick={toggleUrlInput} 
                className="h-full px-3 bg-transparent text-gray-400 hover:text-white focus:outline-none transition-colors"
                aria-label="Back to text search"
              >
                <X className="h-5 w-5" />
              </button>
              <button 
                type="submit" 
                className="flex items-center justify-center h-8 w-8 rounded-lg bg-gray-700 hover:bg-gray-600 text-white mr-4 my-auto"
                aria-label="Extract recipe from URL"
              >
                <ArrowUp className="h-4 w-4" />
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
          <div className="absolute top-16 left-0 right-0 bg-gray-900/95 rounded-b-lg shadow-lg z-10 border border-gray-800 border-t-0 text-white">
            <div className="py-2 px-4 hover:bg-gray-800 cursor-pointer" onClick={() => setQuery("High-protein post-workout smoothie")}>
              High-protein post-workout smoothie
            </div>
            <div className="py-2 px-4 hover:bg-gray-800 cursor-pointer" onClick={() => setQuery("Low-carb green smoothie for weight loss")}>
              Low-carb green smoothie for weight loss
            </div>
            <div className="py-2 px-4 hover:bg-gray-800 cursor-pointer" onClick={() => setQuery("Keto-friendly berry smoothie")}>
              Keto-friendly berry smoothie
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default SearchBar;
