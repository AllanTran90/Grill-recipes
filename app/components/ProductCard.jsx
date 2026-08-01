import { ExternalLink, Heart, Star } from "lucide-react";

export default function ProductCard({ product, isFavorite, onToggleFavorite }) {
  return (
    <article className="relative bg-[#241a16] border border-orange-900/50 rounded-xl p-5 flex flex-col">
      {product.popular && (
        <span className="absolute top-4 right-4 flex items-center gap-1 text-xs font-heading text-yellow-400">
          <Star className="w-3.5 h-3.5 fill-yellow-400" />
          Populär
        </span>
      )}

      <button
        onClick={() => onToggleFavorite(product.id)}
        aria-label="Spara som favorit"
        className="absolute top-4 left-4 text-orange-200/50 hover:text-red-400 transition-colors"
      >
        <Heart
          className={`w-5 h-5 ${isFavorite ? "fill-red-500 text-red-500" : ""}`}
        />
      </button>

      <h2 className="font-heading text-lg font-semibold mt-6 mb-1 text-orange-50">
        {product.name}
      </h2>
      <p className="text-sm text-orange-100/60 flex-1">{product.desc}</p>

      <div className="mt-4 flex items-center justify-between">
        <div>
          <p className="font-heading text-orange-400 font-semibold">
            {product.price}
          </p>
          <p className="text-xs text-orange-100/50">{product.store}</p>
        </div>
        <a
          href={product.url}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="flex items-center gap-1 text-sm font-heading text-orange-300 hover:text-orange-400"
        >
          Visa
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </article>
  );
}
