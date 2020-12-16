import './SectionTitle.css';

export default function SectionTitle({ title, color }) {
  return (
    <div className="section-title">
        <h2 className={color === "white" ? "title-white" : "title-gray"}>{title}</h2>
    </div>
  );
}
