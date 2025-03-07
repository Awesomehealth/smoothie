
import { useState, useRef } from "react";
import { Search, Image } from "lucide-react";

interface SearchBarProps {
  onSearch: (query: string) => void;
  onImageUpload?: (file: File) => void;
  placeholder?: string;
}

const SearchBar = ({ 
  onSearch, 
  onImageUpload, 
  placeholder = "Ask anything..." 
}: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
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

  return (
    <form onSubmit={handleSubmit} className="w-full mx-auto relative">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="search-input pr-24 w-full h-16 text-lg" 
        aria-label="Search for smoothie recipes"
      />
      <div className="absolute right-0 top-0 flex h-full">
        {onImageUpload && (
          <button 
            type="button" 
            onClick={handleImageClick} 
            className="h-full px-4 bg-transparent text-gray-500 hover:text-gray-700 focus:outline-none transition-colors"
            aria-label="Upload image"
          >
            <Image className="h-5 w-5" />
          </button>
        )}
        <button 
          type="submit" 
          className="search-button mr-2" 
          aria-label="Search"
        >
          <Search className="h-6 w-6" />
        </button>
      </div>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
        aria-label="Upload image for recipe search"
      />
    </form>
  );
};

export default SearchBar;
