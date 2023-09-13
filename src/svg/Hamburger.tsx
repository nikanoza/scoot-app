const Hamburger: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="16"
      onClick={onClick}
    >
      <g fill="#FCB72B" fillRule="evenodd">
        <path d="M0 0h19.692v3.692H0zM0 6.154h19.692v3.692H0zM0 12.308h19.692V16H0z" />
      </g>
    </svg>
  );
};

export default Hamburger;
