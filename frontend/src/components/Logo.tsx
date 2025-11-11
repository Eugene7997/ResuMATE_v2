const Logo = ({ className }: { className?: string }) => {
  return (
    <h1 className={`text-3xl font-bold ${className || ''}`}>
      <span className="text-black">resum</span>
      <span className="text-primary-500">ate</span>
    </h1>
  );
};

export default Logo;