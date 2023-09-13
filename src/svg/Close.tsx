const Close: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      onClick={onClick}
    >
      <g fill="#FCB72B" fillRule="evenodd">
        <path d="M3.19.733l13.923 13.924-2.61 2.61L.579 3.343z" />
        <path d="M.579 14.657L14.503.733l2.61 2.61L3.19 17.267z" />
      </g>
    </svg>
  );
};

export default Close;
