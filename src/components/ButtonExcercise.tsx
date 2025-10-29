type BtnTypes = {
  label: string;
  onClick: () => void;
};

function ButtonExcercise({ label, onClick }: BtnTypes) {
  return <button onClick={onClick}>{label}</button>;
}
export default ButtonExcercise;
