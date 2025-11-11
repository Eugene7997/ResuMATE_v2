import type { AvatarProps } from '@lib/types/types';

const Avatar = ({ src, alt = 'Avatar', size = 48, initials, className = '', ...props }: AvatarProps) => {
  const sizeValue = typeof size === 'number' ? `${size}px` : size;
  const baseClasses = `inline-flex items-center justify-center rounded-full overflow-hidden select-none ${className}`;

  return (
    <div
      className={baseClasses}
      style={{ width: sizeValue, height: sizeValue }}
      title={alt}
      aria-label={alt}
      {...props}
    >
      {src ? (
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full bg-primary text-white flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            className="w-1/2 h-1/2"
          >
            <title>Profile</title>
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        </div>
      )}
    </div>
  );
};

export default Avatar;