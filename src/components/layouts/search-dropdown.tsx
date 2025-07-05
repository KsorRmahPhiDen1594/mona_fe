'use client'
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface SearchDropdownProps {
  isOpen: boolean;
  onToggle: () => void;
}

const SearchDropdown = ({ isOpen, onToggle }: SearchDropdownProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  // Mock search suggestions
  const searchSuggestions = [
    "Thiết kế website",
    "Digital Marketing",
    "SEO",
    "Hosting",
    "Domain",
    "Bảo mật website",
    "Tối ưu hiệu suất",
    "Responsive design"
  ];

  const filteredSuggestions = searchSuggestions.filter(suggestion =>
    suggestion.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="relative">
      <Button
        className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-gray-600 hover:text-gray-800"
        aria-label="Tìm kiếm"
        onClick={onToggle}
      >
        <Search className="w-5 h-5" />
      </Button>

      {/* Search Dropdown */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 w-80 z-50">
          <div className="p-3 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <Search className="w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Tìm kiếm..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 text-sm outline-none border-none bg-transparent"
                autoFocus
              />
            </div>
          </div>

          {/* Search Suggestions */}
          {searchQuery && filteredSuggestions.length > 0 && (
            <div className="max-h-48 overflow-y-auto">
              {filteredSuggestions.map((suggestion, index) => (
                <button
                  key={index}
                  className="w-full text-left px-3 py-2 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0 text-sm"
                  onClick={() => {
                    setSearchQuery(suggestion);
                    onToggle();
                    // TODO: Navigate to search results
                    console.log("Search for:", suggestion);
                  }}
                >
                  <div className="flex items-center gap-2">
                    <Search className="w-3 h-3 text-gray-400" />
                    <span className="text-gray-700">{suggestion}</span>
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* No results */}
          {searchQuery && filteredSuggestions.length === 0 && (
            <div className="p-3 text-center text-gray-500 text-sm">
              Không tìm thấy kết quả cho "{searchQuery}"
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchDropdown; 