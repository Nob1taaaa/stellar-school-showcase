type AnimatedCampusCardProps = {
  image: string;
  title: string;
  description: string;
  category?: string;
};

const AnimatedCampusCard = ({ image, title, description, category }: AnimatedCampusCardProps) => {
  return (
    <div className="w-full flex justify-center">
      <svg style={{ position: "absolute", width: 0, height: 0 }} aria-hidden>
        <filter id="unopaq" y="-100%" height="300%" x="-100%" width="300%">
          <feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 5 0"></feColorMatrix>
        </filter>
        <filter id="unopaq2" y="-100%" height="300%" x="-100%" width="300%">
          <feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 10 0"></feColorMatrix>
        </filter>
        <filter id="unopaq3" y="-100%" height="300%" x="-100%" width="300%">
          <feColorMatrix values="1 0 0 1 0  0 1 0 1 0  0 0 1 1 0  0 0 0 2 0"></feColorMatrix>
        </filter>
      </svg>
      <div className="card-container">
        <div className="spin spin-blur"></div>
        <div className="spin spin-intense"></div>
        <div className="backdrop"></div>
        <div className="card-border">
          <div className="spin spin-inside"></div>
        </div>
        <div className="card">
          <div className="relative w-full h-full">
            <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              {category ? (
                <div className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-white/20 text-white backdrop-blur-sm border border-white/30 mb-2">
                  {category}
                </div>
              ) : null}
              <h3 className="text-white text-xl font-bold mb-1">{title}</h3>
              <p className="text-white/90 text-sm leading-relaxed">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedCampusCard;
