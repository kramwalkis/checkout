const CardLockIcon = ({ className }: { className: string }) => {
  return (
    <svg
      width="10"
      height="13"
      viewBox="0 0 10 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 12.1136V6.79545C10 6.30611 9.62674 5.90909 9.16667 5.90909H8.88889V4.13636C8.88889 1.86506 7.13542 0 5 0C2.86458 0 1.11111 1.86506 1.11111 4.13636V5.90909H0.833333C0.373264 5.90909 0 6.30611 0 6.79545V12.1136C0 12.603 0.373264 13 0.833333 13H9.16667C9.62674 13 10 12.603 10 12.1136ZM7.22222 4.13636V5.90909H2.77778V4.13636C2.77778 2.83452 3.77604 1.77273 5 1.77273C6.22396 1.77273 7.22222 2.83452 7.22222 4.13636Z"
        fill="#7B8091"
      />
    </svg>
  );
};

export default CardLockIcon;
