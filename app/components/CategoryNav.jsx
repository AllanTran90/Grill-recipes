import { ICONS } from "../lib/icons";

export default function CategoryNav({ categories, activeCategory, onSelect }) {
  return (
    <nav className="max-w-5xl mb-8 flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-auto sm:px-0 sm:pb-0 sm:flex-wrap sm:overflow-visible sm:justify-center">
      {categories.map((cat) => {
        const Icon = ICONS[cat.iconName];
        const isActive = activeCategory === cat.key;
        return (
          <button
            key={cat.key}
            onClick={() => onSelect(cat.key)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-colors font-heading text-sm whitespace-nowrap flex-shrink-0 ${
              isActive
                ? "bg-orange-500 border-orange-500 text-white"
                : "border-orange-900 text-orange-100/70 hover:border-orange-500 hover:text-orange-300"
            }`}
          >
            {Icon && <Icon className="w-4 h-4" />}
            {cat.label}
          </button>
        );
      })}
    </nav>
  );
}
