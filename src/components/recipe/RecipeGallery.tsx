
import { Grid } from "lucide-react";

interface RecipeGalleryProps {
  mainImage: string;
  galleryImages: string[];
  smoothieName: string;
  onOpenGallery: (index: number) => void;
  onViewAllPhotos: () => void;
}

const RecipeGallery = ({ 
  mainImage, 
  galleryImages, 
  smoothieName, 
  onOpenGallery, 
  onViewAllPhotos 
}: RecipeGalleryProps) => {
  return (
    <div className="mb-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 relative">
        <div className="md:col-span-2 md:row-span-2 relative">
          <video 
            className="w-full h-full object-cover rounded-tl-lg rounded-bl-lg cursor-pointer"
            style={{ minHeight: "400px" }}
            controls
            autoPlay
            muted
            loop
            onClick={() => onOpenGallery(0)}
          >
            <source src={mainImage} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        
        <div className="hidden md:block">
          <img 
            src={galleryImages[0]} 
            alt={`${smoothieName} detail 1`} 
            className="w-full h-full object-cover rounded-tr-lg cursor-pointer"
            style={{ height: "200px" }}
            onClick={() => onOpenGallery(1)}
          />
        </div>
        <div className="hidden md:block">
          <img 
            src={galleryImages[1]} 
            alt={`${smoothieName} detail 2`} 
            className="w-full h-full object-cover cursor-pointer"
            style={{ height: "200px" }}
            onClick={() => onOpenGallery(2)}
          />
        </div>
        <div className="hidden md:block">
          <img 
            src={galleryImages[2]} 
            alt={`${smoothieName} detail 3`} 
            className="w-full h-full object-cover cursor-pointer"
            style={{ height: "200px" }}
            onClick={() => onOpenGallery(3)}
          />
        </div>
        <div className="hidden md:block relative">
          <img 
            src={galleryImages[3]} 
            alt={`${smoothieName} detail 4`} 
            className="w-full h-full object-cover rounded-br-lg cursor-pointer"
            style={{ height: "200px" }}
            onClick={() => onOpenGallery(4)}
          />
          <button 
            className="absolute bottom-4 right-4 bg-white rounded-full px-4 py-2 flex items-center gap-2 shadow-md"
            onClick={onViewAllPhotos}
          >
            <Grid size={16} /> Show all photos
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeGallery;
